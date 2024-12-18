import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { mq } from "@/theme"
import AnnualReportForm from "@/components/AllReports/Form"
import SlopedSection from "@/components/SlopedBackground"

import "@/fonts/barlow.css"

import ogImageJpg from "@/images/annual-report/digital-economy-annual-report-2024/og-image.jpg"
import IntroSection from "@/components/AllReports/IntroSection"

const layout = css`
  width: 100rem;
  margin: 0 auto;
  padding-top: 12rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "main main aside";
  gap: 4rem;

  & > div {
    grid-area: main;
    text-align: left;
  }
  & > aside {
    grid-area: aside;
  }
`

const background = theme => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 0rem;

  ${mq.tablet} {
    margin-bottom: 23rem;
  }
`

const AllReportsPage = () => {
  const createGreenWhiteLinearGradient = (deg, percentage) =>
    `linear-gradient(${deg},#B3FFCB,#FFFFFF ${percentage})`

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
      <SlopedSection
        css={background}
        slopedBackgroundImage={createGreenWhiteLinearGradient(
          "-111.5deg",
          "50%"
        )}
      >
        <div css={layout}>
          <div>
            <IntroSection />
          </div>
          <aside>
            <AnnualReportForm />
          </aside>
        </div>
      </SlopedSection>
    </Layout>
  )
}

export default AllReportsPage
