import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { mq } from "@/theme"
import AnnualReportDetailSection from "@/components/AsiaAmericasRideHailingReport/DetailSection/index.js"
import AnnualReportForm from "@/components/AsiaAmericasRideHailingReport/Form"
import AnnualReportHero from "@/components/AsiaAmericasRideHailingReport/Hero"
import "@/fonts/barlow.css"

import ogImageJpg from "@/images/annual-report/og-image.jpg"

const shoutOutPadding = css`
  padding-top: 16rem;
  text-align: left;

  ${mq.tablet} {
    padding-top: 8.8rem;
    padding-left: 0;
  }
`

const AsiaAmericasRideHailingReportPage = () => {
  return (
    <Layout headerMode="light">
      <SEO
        title="Asia Americas Ride Hailing Report 2019-2023"
        description="Check out Measurable AI's latest Asia Americas Ride Hailing Overview Report capturing key insights across 11 markets from 2019 to 2023."
        meta={[
          {
            property: `og:image`,
            content: `https://www.measurable.ai${ogImageJpg}`,
          },
        ]}
      />
      <AnnualReportHero css={shoutOutPadding} />
      <AnnualReportDetailSection />
      <AnnualReportForm />
    </Layout>
  )
}

export default AsiaAmericasRideHailingReportPage
