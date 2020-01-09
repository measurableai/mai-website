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
import ConnectingTheDots from "@/components/ConnectingTheDots"
import LogosSection from "@/components/LogosSection"

const background = theme => css`
  background-image: ${theme.linearGradients.purpleDarkToLight};
  background-color: ${theme.colors.purples.dark};
`

const lastSection = css`
  /* margin-bottom: 30rem; */
`

const subscribeSection = css`
  margin: 0 auto;
  width: 102.4rem;
  padding: 0 1.2rem;
  box-sizing: border-box;
`

const createGreenWhiteLinearGradient = (deg, percentage) =>
  `linear-gradient(${deg},#B3FFCB,#FFFFFF ${percentage})`

const IndexPage = () => {
  const theme = useTheme()
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBackground>
        <ConnectingTheDots />
      </HeroBackground>
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
        slopedBackgroundImage={createGreenWhiteLinearGradient("68.5deg", "70%")}
      >
        <DataReportSection />
      </SlopedSection>
      <SlopedSection
        mode="dark"
        slopedBackgroundImage={createGreenWhiteLinearGradient(
          "-111.5deg",
          "50%"
        )}
      >
        <DataInsights />
      </SlopedSection>
      <SlopedSection
        mode="dark"
        slopedBackgroundImage={createGreenWhiteLinearGradient("68.5deg", "30%")}
      >
        <LogosSection />
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
