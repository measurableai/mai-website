import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { mq } from "@/theme"
import AnnualReportDetailSection from "@/components/DigitalEconomyAnnualReport2024/DetailSection/index.js"
import AnnualReportForm from "@/components/DigitalEconomyAnnualReport2024/Form"
import AnnualReportHero from "@/components/DigitalEconomyAnnualReport2024/Hero"
import AnnualReportDashboardIframe from "@/components/DigitalEconomyAnnualReport2024/Dashboard"
import "@/fonts/barlow.css"

import ogImageJpg from "@/images/annual-report/asia-americas-ride-hailing/og-image.jpg"

const shoutOutPadding = css`
  padding-top: 16rem;
  text-align: left;

  ${mq.tablet} {
    padding-top: 8.8rem;
    padding-left: 0;
  }
`

const DigitalEconomyAnnualReport2024Page = () => {
  return (
    <Layout headerMode="light">
      <SEO
        title="Digital Economy Annual Report 2024"
        description="Check out Measurable AI’s latest Digital Economy Annual Report capturing key insights across 16 emerging markets in 2024: covering food delivery, ride-hailing, e-commerce."
        meta={[
          {
            property: `og:image`,
            content: `https://www.measurable.ai${ogImageJpg}`,
          },
        ]}
      />
      <AnnualReportHero css={shoutOutPadding} />
      <AnnualReportDashboardIframe />
      <AnnualReportDetailSection />
      <AnnualReportForm />
    </Layout>
  )
}

export default DigitalEconomyAnnualReport2024Page
