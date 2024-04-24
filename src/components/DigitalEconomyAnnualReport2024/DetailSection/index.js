import React from "react"
import AnnualReportDashboardIframe from "@/components/DigitalEconomyAnnualReport2024/Dashboard"
import {
  detailSection,
  regionsWrapper,
  metricsWrapper,
  sneakpeekWrapper,
  industriesWrapper,
} from "./style"
import industries01Png from "@/images/annual-report/digital-economy-annual-report-2024/icon-food_delivery.png"
import industries02Png from "@/images/annual-report/digital-economy-annual-report-2024/icon-ride_sharing.png"
import industries03Png from "@/images/annual-report/digital-economy-annual-report-2024/icon-e_commerce.png"
import metrics01Png from "@/images/annual-report/digital-economy-annual-report-2024/metrics01.png"
import metrics02Png from "@/images/annual-report/digital-economy-annual-report-2024/metrics02.png"
import metrics03Png from "@/images/annual-report/digital-economy-annual-report-2024/metrics03.png"
import metrics04Png from "@/images/annual-report/digital-economy-annual-report-2024/metrics04.png"
import newsletterPng from "@/images/annual-report/newsletter-hero.png"
import singaporePng from "@/images/annual-report/singapore.png"
import thailandPng from "@/images/annual-report/thailand.png"
import indonesiaPng from "@/images/annual-report/indonesia.png"
import indiaPng from "@/images/annual-report/india.png"
import vietnamPng from "@/images/annual-report/vietnam.png"
import brazilPng from "@/images/annual-report/brazil.png"
import mexicoPng from "@/images/annual-report/mexico.png"
import argentinaPng from "@/images/annual-report/argentina.png"
import chilePng from "@/images/annual-report/chile.png"
import colombiaPng from "@/images/annual-report/colombia.png"
import japanPng from "@/images/annual-report/japan.png"
import hongKongPng from "@/images/annual-report/hong-kong.png"
import philippinesPng from "@/images/annual-report/philippines.png"
import malaysiaPng from "@/images/annual-report/malaysia.png"
import taiwanPng from "@/images/annual-report/taiwan.png"
import turkeyPng from "@/images/annual-report/turkey.png"

const AnnualReportDetailSection = () => {
  const availableRegions = [
    { name: "Singapore", img: singaporePng },
    { name: "Japan", img: japanPng },
    { name: "Hong Kong", img: hongKongPng },
    { name: "Taiwan", img: taiwanPng },
    { name: "Philippines", img: philippinesPng },
    { name: "Malaysia", img: malaysiaPng },
    { name: "Thailand", img: thailandPng },
    { name: "Indonesia", img: indonesiaPng },
    { name: "Vietnam", img: vietnamPng },
    { name: "India", img: indiaPng },
    { name: "Mexico", img: mexicoPng },
    { name: "Brazil", img: brazilPng },
    { name: "Argentina", img: argentinaPng },
    { name: "Chile", img: chilePng },
    { name: "Colombia", img: colombiaPng },
    { name: "Turkey", img: turkeyPng },
  ]

  const industries = [
    { text: "Food Delivery", icon: industries01Png },
    { text: "Ride-Hailing", icon: industries02Png },
    { text: "E-commerce", icon: industries03Png },
  ]

  const metrics = [
    { text: "Market Size", icon: metrics01Png },
    { text: "Grow Projection", icon: metrics02Png },
    { text: "User Consumption", icon: metrics03Png },
    { text: "Consumer Behaviour", icon: metrics04Png },
  ]

  return (
    <section css={detailSection}>
      <h2>
        2024 Digital Economy Outlook:
        <br />
        <span>Pioneering Through Resilient Future</span>
      </h2>
      <AnnualReportDashboardIframe />
      <div css={regionsWrapper}>
        <h3>
          Across <span className="triangle">{availableRegions.length}</span>{" "}
          markets
        </h3>
        <div>
          {availableRegions.map((region, index) => (
            <React.Fragment key={index}>
              <div>
                <img src={region.img} alt={`The flag of ${region.name}`} />
                <span>{region.name}</span>
              </div>
              {index !== availableRegions.length - 1 && <span></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div css={industriesWrapper}>
        <h3>
          <span className="triangle">3</span> Industries
        </h3>
        <div>
          {industries.map((industries, index) => (
            <React.Fragment key={index}>
              <div>
                <span>{industries.text}</span>
                <img src={industries.icon} alt={industries.text} />
              </div>
              {index !== industries.length - 1 && <span></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div css={metricsWrapper}>
        <h3>
          Into <span className="triangle">4</span> Key Metrics
        </h3>
        <div>
          {metrics.map((metric, index) => (
            <React.Fragment key={index}>
              <div>
                <span>{metric.text}</span>
                <img src={metric.icon} alt={metric.text} />
              </div>
              {index !== metrics.length - 1 && <span></span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div css={sneakpeekWrapper}>
        <div></div>
        <img src={newsletterPng} alt="" />
      </div>
    </section>
  )
}

export default AnnualReportDetailSection
