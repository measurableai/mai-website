import React from "react"
import {
  detailSection,
  regionsWrapper,
  metricsWrapper,
  sneakpeekWrapper,
} from "./style"
import demandTrendPng from "@/images/annual-report/demand-trend.png"
import marketSharePng from "@/images/annual-report/market-share.png"
import userConsumptionPng from "@/images/annual-report/user-consumption.png"
import userLoyaltyPng from "@/images/annual-report/user-loyalty.png"
import newsletterPng from "@/images/annual-report/newsletter-hero.png"
import singaporePng from "@/images/annual-report/singapore.png"
import malaysiaPng from "@/images/annual-report/malaysia.png"
import thailandPng from "@/images/annual-report/thailand.png"
import hongKongPng from "@/images/annual-report/hong-kong.png"
import taiwanPng from "@/images/annual-report/taiwan.png"
import indonesiaPng from "@/images/annual-report/indonesia.png"
import philippinesPng from "@/images/annual-report/philippines.png"
import indiaPng from "@/images/annual-report/india.png"
import japanPng from "@/images/annual-report/japan.png"

const AnnualReportDetailSection = () => {
  const availableRegions = [
    { name: "Singapore", img: singaporePng },
    { name: "Malaysia", img: malaysiaPng },
    { name: "Thailand", img: thailandPng },
    { name: "Hong Kong", img: hongKongPng },
    { name: "Taiwan", img: taiwanPng },
    { name: "Indonesia", img: indonesiaPng },
    { name: "Philippines", img: philippinesPng },
    { name: "India", img: indiaPng },
    { name: "Japan", img: japanPng },
  ]

  const metrics = [
    { text: "Food Delivery Major Player Market share", icon: marketSharePng },
    { text: "Food Delivery Demand Trend", icon: demandTrendPng },
    { text: "Food Delivery User Consumption", icon: userConsumptionPng },
    { text: "Food Delivery User Loyalty", icon: userLoyaltyPng },
  ]

  return (
    <section css={detailSection}>
      <h2>
        <span>
          Four Years of Tracking the Ins and Outs of the Online Delivery Market
          in Asia
        </span>
      </h2>
      <div css={regionsWrapper}>
        <h3>
          Across <span>9</span> Regions
        </h3>
        <div>
          {availableRegions.map((region, index) => (
            <>
              <div>
                <img src={region.img} alt={`The flag of ${region.name}`} />
                <span>{region.name}</span>
              </div>
              {index !== availableRegions.length - 1 && <span>···</span>}
            </>
          ))}
        </div>
      </div>
      <div css={metricsWrapper}>
        <h3>
          INTO <span>4</span> Key Metrics
        </h3>
        <ul>
          {metrics.map(metric => (
            <li>
              <span>{metric.text}</span>
              <img src={metric.icon} alt={metric.text} />
            </li>
          ))}
        </ul>
      </div>
      <div css={sneakpeekWrapper}>
        <div></div>
        <img src={newsletterPng} />
      </div>
    </section>
  )
}

export default AnnualReportDetailSection
