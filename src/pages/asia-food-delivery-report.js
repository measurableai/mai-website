import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { mq } from "@/theme"
import SlopedSection from "@/components/SlopedBackground"
import AnnualReportDetailSection from "@/components/AnnualReport/DetailSection/index.js"
import AnnualReportForm from "@/components/AnnualReport/Form"
import AnnualReportHero from "@/components/AnnualReport/Hero"
import "@/fonts/barlow.css"

import ogImageJpg from "@/images/annual-report/og-image.jpg"

const background = theme => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 0rem;

  ${mq.tablet} {
    margin-bottom: 23rem;
  }
`

const shoutOutPadding = css`
  padding-top: 16rem;
  text-align: left;

  ${mq.tablet} {
    padding-top: 8.8rem;
    padding-left: 0;
  }
`

const AnnualReportRequestPage = () => {
  const theme = useTheme()

  return (
    <Layout headerMode="light">
      <SEO
        title="Asia Food Delivery Annual Report 2019-2022"
        description="Check out Measurable AI's latest Asia Online Food and Grocery Delivery Overview Report capturing key insights across 9 markets from 2019 to 2022."
        meta={[
          {
            property: `og:image`,
            content: `https://www.measurable.ai${ogImageJpg}`,
          },
        ]}
      />
      <SlopedSection
        css={background}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <AnnualReportHero css={shoutOutPadding} />
      </SlopedSection>
      <AnnualReportDetailSection />
      <AnnualReportForm />
    </Layout>
  )
}

export default AnnualReportRequestPage
