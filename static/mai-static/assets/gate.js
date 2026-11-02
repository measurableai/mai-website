/* MAIGate — the lead-capture form shared by the generator and the report
   library. One implementation of the rules from the Figma annotations:
     · work email only (free-mail domains rejected by name)
     · LinkedIn mandatory
     · details remembered so nobody re-enters them for a second report
       (localStorage key "mai_lead")

   HubSpot: portal 20168923 (na2) — the "ANNUAL REPORT GENERATOR" form
   (d2773338-...), cloned from "MAI Request Demo" so it inherits that form's
   submission-notification recipients.

   Three things had to change on that clone for this page to work:
     · reCAPTCHA removed — the Forms API hard-rejects captcha-protected forms
     · LinkedIn URL + Industry added — the demo form has neither
     · Last Name made optional — this page collects a single name field
   Fields posted: firstname, email, company, hs_linkedin_url, industry, message.

   NOTE: cloning does NOT carry over workflows. This form has no follow-up
   email to the lead — only notifications to the team. See DEPLOY.md blocker 1. */

const MAIGate = (() => {
  const HUBSPOT = { portalId: "20168923", region: "na2", formGuid: "d2773338-74d8-4630-9267-319582a339df" };
  const LIVE = true;
  const FREE = ["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","qq.com","163.com","proton.me"];
  const KEY = "mai_lead";

  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch { return null; }
  }
  function save(lead) {
    try { localStorage.setItem(KEY, JSON.stringify(lead)); } catch {}
  }

  function submit(fields) {
    if (!LIVE || !HUBSPOT.formGuid) return Promise.resolve("preview");
    const url = `https://api-${HUBSPOT.region}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT.portalId}/${HUBSPOT.formGuid}`;
    const hutk = document.cookie.match(/hubspotutk=([^;]+)/)?.[1];
    return fetch(url, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: Object.entries(fields).map(([name, value]) => ({ objectTypeId: "0-1", name, value })),
        context: { pageUri: location.href, pageName: document.title, ...(hutk && { hutk }) }
      })
    }).then(r => { if (!r.ok) throw new Error("HubSpot " + r.status); return "sent"; });
  }

  function validate(v) {
    if (!v.firstname) return "Tell us your name.";
    const dom = v.email.split("@")[1]?.toLowerCase();
    if (!dom || !dom.includes(".")) return "Enter your work email address.";
    if (FREE.includes(dom)) return `We send reports to work addresses — ${dom} won't reach you.`;
    if (!v.linkedin) return "Add your LinkedIn profile so we know who's asking.";
    return null;
  }

  /* Render the form into `container`.
     opts: { industry, contextLine, submitLabel, onDone(lead),
             download: { href, title } — href is relative to the calling page,
             so the generator passes "downloads/x.pdf" and the library
             "../downloads/x.pdf". Omit it and the form just confirms. } */
  function render(container, opts = {}) {
    const lead = load() || {};
    const sel = x => (opts.industry || lead.industry) === x ? " selected" : "";
    container.innerHTML = `
      <form class="gate-form" novalidate>
        <div class="frow">
          <div><label for="g-fn">Name</label>
            <input id="g-fn" type="text" placeholder="Your name" autocomplete="name" value="${esc(lead.firstname || "")}"></div>
          <div><label for="g-co">Company</label>
            <input id="g-co" type="text" placeholder="Company" autocomplete="organization" value="${esc(lead.company || "")}"></div>
        </div>
        <div class="frow">
          <div><label for="g-em">Work email</label>
            <input id="g-em" type="email" placeholder="you@company.com" autocomplete="email" value="${esc(lead.email || "")}"></div>
          <div><label for="g-li">LinkedIn profile</label>
            <input id="g-li" type="url" placeholder="linkedin.com/in/…" autocomplete="url" value="${esc(lead.linkedin || "")}"></div>
        </div>
        <div><label for="g-iw">Industry you care about</label>
          <select id="g-iw">
            <option${sel("Online delivery")}>Online delivery</option>
            <option${sel("Ride-hailing")}>Ride-hailing</option>
            <option${sel("E-commerce")}>E-commerce</option>
            <option${sel("Other")}>Other</option>
          </select></div>
        <div><label for="g-ms">What are you looking for?</label>
          <textarea id="g-ms" rows="2" placeholder="${esc(opts.placeholder || "Markets, cadence, panel access…")}"></textarea></div>
        <p class="consent">By submitting this form you agree to our
          <a href="https://measurable.ai/en-US/privacyPolicy" target="_blank" rel="noopener">privacy policy</a> and
          <a href="https://measurable.ai/en-US/termsOfUse" target="_blank" rel="noopener">terms of use</a>,
          and to receive updates about Measurable AI.</p>
        <div class="err" id="g-err"></div>
        <button class="generate" type="submit">${esc(opts.submitLabel || "Send me the report")}</button>
      </form>`;
    const form = container.querySelector("form");
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const g = id => container.querySelector("#g-" + id).value.trim();
      const v = { firstname: g("fn"), company: g("co"), email: g("em"),
                  linkedin: g("li"), industry: container.querySelector("#g-iw").value };
      const err = container.querySelector("#g-err");
      const bad = validate(v);
      if (bad) { err.textContent = bad; return; }
      err.textContent = "";
      const btn = form.querySelector("button"); btn.disabled = true;
      try {
        const { linkedin, ...rest } = v;
        await submit({ ...rest, hs_linkedin_url: linkedin,
                       message: `${opts.contextLine || ""} ${g("ms")}`.trim() });
      } catch {
        err.textContent = "Something broke on our side — email business@measurable.ai instead.";
        btn.disabled = false; return;
      }
      save(v);
      const dl = opts.download;
      container.innerHTML =
        `<p class="sent">${opts.doneText || (dl
          ? `Thanks, ${esc(v.firstname)} — your report is ready.`
          : `Sent. The full report is on its way to <b>${esc(v.email)}</b>.`)}</p>` +
        (dl
          ? `<a class="generate dl-btn" href="${esc(dl.href)}" download>Download the PDF</a>
             <p class="dl-note">${esc(dl.title)}</p>`
          : "") +
        (LIVE ? "" : `<p class="hint">Prototype — nothing was submitted or stored beyond this browser.</p>`);
      opts.onDone && opts.onDone(v);
    });
  }

  /* Fire-and-forget submission for a returning visitor (library downloads). */
  function logActivity(contextLine) {
    const lead = load();
    if (!lead) return false;
    const { linkedin, ...rest } = lead;
    submit({ ...rest, hs_linkedin_url: linkedin, message: contextLine }).catch(() => {});
    return true;
  }

  return { render, load, logActivity, LIVE };
})();
