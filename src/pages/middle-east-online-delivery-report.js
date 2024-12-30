import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { mq } from "@/theme"
import AnnualReportForm from "@/components/MiddleEastOnlineDeliveryReport/Form"

import "@/fonts/barlow.css"

import ogImageJpg from "@/images/annual-report/digital-economy-annual-report-2024/og-image.jpg"
import ReportBody from "@/components/MiddleEastOnlineDeliveryReport/Body"

const layout = css`
  width: 100rem;
  margin: 0 auto;
  padding-top: 12rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "main main aside";
  gap: 4rem;

  ${mq.tablet} {
    width: 100%;
    padding: 6.4rem 2.4rem 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 0;
  }

  & > div {
    grid-area: main;
    text-align: left;
  }
  & > aside {
    grid-area: aside;
  }
`

const MiddleEastOnlineDeliveryReportPage = () => {
  return (
    <Layout headerMode="light">
      <SEO
        title="Get Free Reports"
        description="Check out Measurable AI’s reports capturing key insights covering food delivery, ride-hailing and e-commerce."
        meta={[
          {
            property: `og:image`,
            content: `https://www.measurable.ai${ogImageJpg}`,
          },
        ]}
      />
      <div css={layout}>
        <div>
          <ReportBody />
        </div>
        <aside>
          <AnnualReportForm />
        </aside>
      </div>
    </Layout>
  )
}

export default MiddleEastOnlineDeliveryReportPage
