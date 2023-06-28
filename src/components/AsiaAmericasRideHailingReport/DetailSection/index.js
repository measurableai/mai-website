import React from "react"
import {
  detailSection,
  regionsWrapper,
  metricsWrapper,
  sneakpeekWrapper,
} from "./style"
import metrics01Png from "@/images/annual-report/asia-americas-ride-hailing/metrics01.png"
import metrics02Png from "@/images/annual-report/asia-americas-ride-hailing/metrics02.png"
import metrics03Png from "@/images/annual-report/asia-americas-ride-hailing/metrics03.png"
import metrics04Png from "@/images/annual-report/asia-americas-ride-hailing/metrics04.png"
import newsletterPng from "@/images/annual-report/newsletter-hero.png"
import singaporePng from "@/images/annual-report/singapore.png"
import thailandPng from "@/images/annual-report/thailand.png"
import indonesiaPng from "@/images/annual-report/indonesia.png"
import indiaPng from "@/images/annual-report/india.png"
import vietnamPng from "@/images/annual-report/vietnam.png"
import brazilPng from "@/images/annual-report/brazil.png"
import mexicoPng from "@/images/annual-report/mexico.png"
import usPng from "@/images/annual-report/us.png"
import argentinaPng from "@/images/annual-report/argentina.png"
import chilePng from "@/images/annual-report/chile.png"
import colombiaPng from "@/images/annual-report/colombia.png"

const AnnualReportDetailSection = () => {
  const availableRegions = [
    { name: "Singapore", img: singaporePng },
    { name: "Thailand", img: thailandPng },
    { name: "Indonesia", img: indonesiaPng },
    { name: "Vietnam", img: vietnamPng },
    { name: "India", img: indiaPng },
    { name: "Brazil", img: brazilPng },
    { name: "Mexico", img: mexicoPng },
    { name: "US", img: usPng },
    { name: "Argentina", img: argentinaPng },
    { name: "Chile", img: chilePng },
    { name: "Colombia", img: colombiaPng },
  ]

  const metrics = [
    { text: "Ride-Hailing Major Player Market share", icon: metrics01Png },
    { text: "Ride-Hailing Demand Trend", icon: metrics02Png },
    { text: "Ride-Hailing User Consumption", icon: metrics03Png },
    { text: "Ride-Hailing Consumer behaviour", icon: metrics04Png },
  ]

  return (
    <section css={detailSection}>
      <h2>
        Steering Through Change: A Ride-hailing Retrospective in Asia and
        Americas
      </h2>
      <div css={regionsWrapper}>
        <h3>
          Across <span className="circle">{availableRegions.length}</span>{" "}
          Regions
        </h3>
        <div>
          {availableRegions.map((region, index) => (
            <React.Fragment key={index}>
              <div>
                <img src={region.img} alt={`The flag of ${region.name}`} />
                <span>{region.name}</span>
              </div>
              {index !== availableRegions.length - 1 && <span>···</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div css={metricsWrapper}>
        <h3>
          INTO <span className="circle">4</span> Key Metrics
        </h3>
        <ul>
          {metrics.map((metric, index) => (
            <li key={index}>
              <span>{metric.text}</span>
              <img src={metric.icon} alt={metric.text} />
            </li>
          ))}
        </ul>
      </div>
      <div css={sneakpeekWrapper}>
        <div></div>
        <img src={newsletterPng} alt="" />
      </div>
    </section>
  )
}

export default AnnualReportDetailSection
