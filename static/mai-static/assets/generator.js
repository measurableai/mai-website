const DATA = window.MAI_DATA;

const METRIC_LABELS = { demand: "Demand trend", incentive: "Incentive rate" };
const ALL_METRICS = ["demand", "incentive"];
const NOUN = { delivery: "online delivery merchants", ridehail: "ride-hailing operators" };
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const when = iso => `${MONTHS[+iso.slice(5, 7) - 1]} ${iso.slice(0, 4)}`;

const state = { industry: DATA.industries[0].id, market: null, metric: null };
let lastIndustry = null;   // market chips animate only when this changes
const $ = s => document.querySelector(s);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const industry = () => DATA.industries.find(i => i.id === state.industry);
const market = () => industry().markets.find(m => m.iso === state.market);

/* ── picker ───────────────────────────────────────────────── */
function chip(html, on, disabled, why) {
  const b = document.createElement("button");
  b.className = "chip"; b.type = "button"; b.innerHTML = html;
  b.setAttribute("aria-pressed", String(on));
  if (disabled) { b.disabled = true; if (why) b.title = why; }
  return b;
}

function renderPicker() {
  const ind = industry();

  const iw = $("#industry"); iw.innerHTML = "";
  DATA.industries.forEach(i => {
    const b = chip(i.label, state.industry === i.id, false);
    b.onclick = () => {
      if (state.industry === i.id) return;
      state.industry = i.id; state.market = null; state.metric = null;
      renderPicker();
    };
    iw.append(b);
  });

  const mw = $("#market"); mw.innerHTML = "";
  mw.classList.toggle("fresh", lastIndustry !== state.industry);
  ind.markets.forEach((m, i) => {
    const b = chip(`<span class="flag">${m.flag}</span>${m.market}`, state.market === m.iso, false);
    b.style.setProperty("--i", i);
    b.onclick = () => { state.market = m.iso; renderPicker(); };
    mw.append(b);
  });
  lastIndustry = state.industry;

  const tw = $("#metric"); tw.innerHTML = "";
  ALL_METRICS.forEach(id => {
    const has = ind.metrics.includes(id);
    const b = chip(METRIC_LABELS[id], state.metric === id, !has,
      has ? "" : `Not published for ${ind.label.toLowerCase()}`);
    if (has) b.onclick = () => { state.metric = id; renderPicker(); };
    tw.append(b);
  });

  $("#c-ind").textContent = ind.label;
  $("#c-mkt").textContent = state.market ? market().market : "—";
  $("#c-met").textContent = state.metric ? METRIC_LABELS[state.metric] : "—";
  const ready = state.market && state.metric;
  $("#go").disabled = !ready;
  const mm = ind.markets.find(x => x.iso === state.market);
  $("#hint").textContent = ready
    ? `${mm.period.from} – ${mm.period.to} · ${mm.report}`
    : `${ind.markets.length} markets · ${ind.metrics.length} metric${ind.metrics.length > 1 ? "s" : ""}`;
}

/* ── generation beat ──────────────────────────────────────── */
function generate() {
  const ind = industry(), m = market();
  const steps = [
    `connecting to consumer panel · ${m.market}`,
    "reading anonymised e-receipts",
    `filtering to ${NOUN[ind.id] || ind.label.toLowerCase()}`,
    state.metric === "demand" ? "aggregating monthly order volume"
                              : "counting orders carrying promotions",
    `indexing against baseline · ${m.period.from}`,
    "typesetting sheet"
  ];
  $("#gate-slot").innerHTML = "";
  $("#stage").innerHTML = `<div class="readout">${steps.map((s, i) =>
    `<div style="animation-delay:${i * 0.19}s">${s}</div>`).join("")}</div>`;
  setTimeout(() => { renderSheet(); renderGate(); },
             reduced ? 60 : steps.length * 190 + 420);
}

/* ── the sheet ────────────────────────────────────────────── */
/* Attribution has to survive a crop. A single corner mark is one rectangular
   selection away from being gone, so the mark is tiled across the whole sheet
   and the brand lockup sits in the foot as well. */
const WMARK_TILES = 40;
const wmarkTiles = "<span>measurable.ai</span>".repeat(WMARK_TILES);
/* Two co-located grids, one dark and one white. On the paper the white one is
   invisible and the dark one reads; over a filled bar or a dark plot it is the
   other way round. Whatever a crop lands on, one of them is legible. */
const watermark = () =>
  `<div class="wmark" aria-hidden="true">
     <div class="wmark-grid wmark-dark">${wmarkTiles}</div>
     <div class="wmark-grid wmark-light">${wmarkTiles}</div>
   </div>`;

function renderSheet() {
  const ind = industry(), m = market(), met = m.metrics[state.metric];
  const p = ind.palette;
  const body = state.metric === "demand" ? demandBody(m, met, p) : incentiveBody(met);
  $("#stage").innerHTML = `
    <div class="sheet" style="--series:${p.series};--deep:${p.deep};--rule:${p.rule};--sheet-ink:${p.ink};--contrast:${p.contrast}">
      ${watermark()}
      <div class="sheet-head">
        <div class="market">${m.market}</div>
        <div class="title">${ind.label}<br>${met.label.toLowerCase()}</div>
        <div class="period">${state.metric === "incentive"
          ? `${met.points[0].label}<b>${met.points[met.points.length - 1].label}</b>`
          : `${m.period.from}<b>${m.period.to}</b>`}</div>
      </div>
      <div class="sheet-body">
        <div class="plot">${body.chart}</div>
        <div>${body.figure}
          <div class="readnote"><span class="cap">What we see</span>${met.commentary}</div>
        </div>
      </div>
      <div class="sheet-foot">
        <p class="foot-src">${met.source} · ${met.unit}. Index is relative to Measurable
          AI&rsquo;s panel baseline and does not represent absolute order volume.</p>
        <p class="foot-brand">
          <img class="foot-logo" src="assets/mai-logo.svg" alt="Measurable AI" width="185" height="26">
          <span>measurable.ai/report-generator</span>
        </p>
      </div>
    </div>`;
  if (state.metric === "demand") drawLine(met);
  else requestAnimationFrame(() =>
    document.querySelectorAll(".track .on").forEach((el, i) => {
      el.style.transitionDelay = `${i * 55}ms`;
      el.style.width = el.dataset.w + "%";
    }));
}

function demandBody(m, met, p) {
  const pts = met.points.filter(q => q.v !== null);
  const W = 760, H = 412, L = 44, R = 8, T = 12, B = 34, vmax = met.axis_max;
  const X = i => L + (W - L - R) * i / (pts.length - 1);
  const Y = v => H - B - (H - B - T) * v / vmax;
  const line = pts.map((q, i) => `${i ? "L" : "M"}${X(i).toFixed(1)},${Y(q.v).toFixed(1)}`).join("");
  const area = `M${L},${H - B}${pts.map((q, i) => `L${X(i).toFixed(1)},${Y(q.v).toFixed(1)}`).join("")}L${X(pts.length - 1).toFixed(1)},${H - B}Z`;
  let grid = "", labs = "", years = "";
  for (let k = 0; k * 10000 <= vmax; k++) {
    const y = Y(k * 10000);
    grid += `<line x1="${L}" y1="${y}" x2="${W - R}" y2="${y}"></line>`;
    labs += `<text class="axis-lab" x="${L - 7}" y="${y + 4}" text-anchor="end">${k * 10}k</text>`;
  }
  pts.forEach((q, i) => {
    if (q.m.endsWith("-01")) years += `<text class="year-lab" x="${X(i)}" y="${H - B + 17}" text-anchor="middle">${q.m.slice(0, 4)}</text>`;
  });
  const last = pts[pts.length - 1];
  /* No numeric readout here. The index value is an axis-relative quantity and
     a big standalone figure reads as an absolute volume, which these pages
     must never show. The chart itself (like the published reports) is the
     whole statement. */
  return {
    chart: `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img"
        aria-label="${m.market} ${met.label} index, ${when(pts[0].m)} to ${when(last.m)}">
      <defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${p.series}" stop-opacity=".55"></stop>
        <stop offset="1" stop-color="${p.series}" stop-opacity=".03"></stop>
      </linearGradient></defs>
      <g class="grid">${grid}</g>${labs}${years}
      <path d="${area}" fill="url(#fade)" style="opacity:0"></path>
      <path class="series-line" d="${line}"></path>
      <circle class="endpoint" cx="${X(pts.length - 1).toFixed(1)}" cy="${Y(last.v).toFixed(1)}" r="0"></circle>
    </svg>`,
    figure: ""
  };
}

function incentiveBody(met) {
  const rows = met.points.slice().reverse().map(q => `
    <div class="bar-row">
      <div class="yr">${q.label}</div>
      <div class="track">
        <div class="on" data-w="${q.pct}"><span>${q.pct}%</span></div>
        <div class="off"><span>${100 - q.pct}%</span></div>
      </div>
    </div>`).join("");
  const latest = met.points[met.points.length - 1];
  return {
    chart: `<div class="bar-key">
        <span><i style="background:var(--series)"></i>with incentives</span>
        <span><i style="background:var(--sheet-ink)"></i>without</span>
      </div><div class="bars">${rows}</div>`,
    figure: `<div class="figure">${latest.pct}%<small>Incentivised · ${latest.label}</small></div>`
  };
}

/* ── draw animation ───────────────────────────────────────── */
function drawLine(met) {
  const path = document.querySelector(".series-line");
  const area = document.querySelector('path[fill="url(#fade)"]');
  const dot  = document.querySelector(".endpoint");
  if (reduced) { area.style.opacity = 1; dot.setAttribute("r", 5); return; }
  const len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  path.getBoundingClientRect();
  path.style.transition = "stroke-dashoffset 1.5s cubic-bezier(.35,.1,.25,1)";
  path.style.strokeDashoffset = 0;
  area.style.transition = "opacity .7s .75s ease"; area.style.opacity = 1;
  setTimeout(() => { dot.style.transition = "r .3s"; dot.setAttribute("r", 5); }, 1450);
}

/* ── which PDF backs the sheet on screen ──────────────────── */
/* Delivery maps one report title to one file. Ride-hailing does not: the
   dataset carries "Asia and the Americas" as a single report, but it was
   published as two PDFs, so that one splits on the market. */
const RH_ASIA = ["ID", "IN", "SG", "VN", "TH"];
const REPORT_PDF = {
  "Middle East Online Delivery Report 2020–2024":  "middleeast_online_delivery_report.pdf",
  "The 2024 AltAsia Online Delivery Report":       "altasia_online_delivery_report_2024.pdf",
  "Asia Online Delivery Market Overview Report 2019–2022": "asia_food_delivery_report.pdf",
};
const RH_PDF = {
  asia:     { file: "asia_ride-hailing_report.pdf",     title: "Four Years of Ride-Hailing in Asia 2019–2023" },
  americas: { file: "americas_ride-hailing_report.pdf", title: "Four Years of Ride-Hailing in the Americas 2019–2023" },
};

function downloadFor(ind, m) {
  if (ind.id === "ridehail") {
    const half = RH_PDF[RH_ASIA.includes(m.iso) ? "asia" : "americas"];
    return { href: `downloads/${half.file}`, title: half.title };
  }
  const file = REPORT_PDF[m.report];
  return file ? { href: `downloads/${file}`, title: m.report } : null;
}

/* ── gate ─────────────────────────────────────────────────── */
function renderGate() {
  const ind = industry(), m = market();
  /* Name the report the visitor actually receives. For ride-hailing that is
     one half of the dataset's combined "Asia and the Americas" title, so the
     pitch and the download button would otherwise disagree. */
  const dl = downloadFor(ind, m);
  const reportName = dl ? dl.title : m.report;
  const bullets = ind.id === "delivery"
    ? ["Demand &amp; consumption trends for every market in the report",
       "Incentive &amp; promotion rate history",
       "Top restaurants by order volume"]
    : ["Demand &amp; consumption trends across the region",
       "Market share by operator",
       "Average order value in local currency"];
  $("#gate-slot").innerHTML = `
    <div class="gate">
      <div>
        <h2>Get the full report</h2>
        <p>This page is one panel of <b>${reportName}</b> — get the whole thing.</p>
        <ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        <p class="hint" style="margin-top:.8rem"><a class="quiet" href="reports/">Browse all free reports →</a></p>
      </div>
      <div id="gate-form-slot"></div>
    </div>`;
  MAIGate.render($("#gate-form-slot"), {
    industry: ind.label,
    contextLine: `[Generator · ${ind.label} · ${m.market}]`,
    placeholder: `e.g. ${m.market} vs neighbouring markets, quarterly updates, raw panel access…`,
    download: dl
  });
}

$("#go").addEventListener("click", generate);
renderPicker();

/* ── idle ghost: real market curves, drawing on a loop ─────── */
function renderPlaceholder() {
  const picks = [];
  DATA.industries.forEach(ind => {
    [0, Math.min(6, ind.markets.length - 1)].forEach(i => {
      const m = ind.markets[i];
      if (m && !picks.some(p => p.m === m)) picks.push({ ind, m });
    });
  });
  const W = 600, H = 320, PER = 5.5, CYCLE = picks.length * PER;
  const paths = [], labels = [];
  picks.forEach(({ ind, m }, i) => {
    const pts = m.metrics.demand.points.filter(q => q.v !== null);
    const vmax = Math.max(...pts.map(q => q.v));
    const d = pts.map((q, k) =>
      `${k ? "L" : "M"}${(k / (pts.length - 1) * W).toFixed(1)},${(H - 14 - (H - 28) * q.v / vmax).toFixed(1)}`).join("");
    paths.push(`<path class="gpath" d="${d}" stroke="${ind.palette.series}"
      style="--d:${(i * PER).toFixed(1)}s;--cycle:${CYCLE}s"></path>`);
    labels.push(`<span class="ghost-label" ${i === 0 ? "data-first" : ""}
      style="--d:${(i * PER).toFixed(1)}s;--cycle:${CYCLE}s;--gcol:${ind.palette.series}">
      ${m.flag} ${m.market} <b>· ${ind.label}</b></span>`);
  });
  let grid = "";
  for (let k = 1; k < 5; k++) grid += `<line x1="0" y1="${H * k / 5}" x2="${W}" y2="${H * k / 5}"></line>`;
  $("#stage").innerHTML = `
    <div class="ghost" aria-hidden="true">
      <div class="ghost-head"><div class="ghost-labels">${labels.join("")}</div></div>
      <svg class="ghost-chart" viewBox="0 0 ${W} ${H}">
        <g class="ghost-grid">${grid}</g>${paths.join("")}
      </svg>
      <p class="ghost-cta"><span class="go">◄</span>Real curves from real markets.
        Pick yours and hit <b>Generate</b> — your page typesets itself in seconds.</p>
    </div>`;
  requestAnimationFrame(() =>
    document.querySelectorAll(".gpath").forEach(p =>
      p.style.setProperty("--len", p.getTotalLength().toFixed(0))));
}
renderPlaceholder();

