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
import Helmet from "react-helmet"
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
        title="Asia Online Delivery Annual Report 2019-2022"
        description="This Report provides an overview of the online delivery (food + grocery) market across 9 regions: Singapore, Malaysia, Thailand, Indonesia, Hong Kong, Taiwan, Philippines, India and Japan. See which players and countries have been performing relatively well throughout the years 2019 to 2022."
      />
      <Helmet>
        <meta property="og:image" content={ogImageJpg} />
      </Helmet>
      <SlopedSection
        css={background}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <AnnualReportHero css={shoutOutPadding} />
      </SlopedSection>
      <AnnualReportDetailSection />
      {/* <AnnualReportForm /> */}
    </Layout>
  )
}

export default AnnualReportRequestPage
