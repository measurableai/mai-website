import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import HeroBackground from "@/components/HeroBackground"
import SlopedSection from "@/components/SlopedBackground"
import DataInsights from "@/components/DataInsights"
import WhySection from "@/components/WhySection"
import WhatSection from "@/components/WhatSection"
import WhoSection from "@/components/WhoSection"
import DataReportSection from "@/components/DataReportSection"
import GetStarted from "@/components/GetStarted"
import Subscribe from "@/components/Subscribe"

const background = theme => css`
  background-image: ${theme.linearGradients.purpleDarkToLight};
  background-color: ${theme.colors.purples.dark};
`

const lastSection = css`
  margin-bottom: 30rem;
`

const subscribeSection = css`
  margin: 0 auto;
  width: 102.4rem;
  padding: 0 1.2rem;
  box-sizing: border-box;
`

const IndexPage = () => {
  const theme = useTheme()
  return (
    <Layout headerMode="light">
      <SEO title="Home" />
      <HeroBackground />
      <SlopedSection
        css={background}
        slopedBackgroundImage={theme.linearGradients.purpleLightToDark}
        slopedBackgroundColor={theme.colors.purples.dark}
      >
        <WhySection />
      </SlopedSection>
      <SlopedSection
        slopedBackgroundImage={theme.linearGradients.purpleDarkToLight}
        slopedBackgroundColor={theme.colors.purples.dark}
      >
        <WhatSection />
      </SlopedSection>
      <SlopedSection
        slopedBackgroundImage={theme.linearGradients.purpleLightToDark}
        slopedBackgroundColor={theme.colors.purples.dark}
      >
        <WhoSection />
      </SlopedSection>
      <SlopedSection
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <DataReportSection />
      </SlopedSection>
      <SlopedSection
        mode="dark"
        slopedBackgroundImage={theme.linearGradients.greenLightToDark}
      >
        <DataInsights />
      </SlopedSection>
      <SlopedSection
        mode="dark"
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <p>Section 6</p>
      </SlopedSection>
      <SlopedSection
        mode="dark"
        css={lastSection}
        slopedBackgroundColor={theme.colors.greens.light}
      >
        <GetStarted />
      </SlopedSection>
      <Subscribe css={subscribeSection} />
    </Layout>
  )
}

export default IndexPage
