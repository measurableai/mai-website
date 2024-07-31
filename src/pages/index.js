import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { mq } from "@/theme"

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
import TestimonialSection from "@/components/TestimonialSection"
// import LogosSection from "@/components/LogosSection"

const background = theme => css`
  background-image: ${theme.linearGradients.purpleDarkToLight};
  background-color: ${theme.colors.purples.dark};
`

const subscribeSection = css`
  margin: 0 auto;
  width: 102.4rem;
  padding: 0 1.2rem;
  box-sizing: border-box;

  ${mq.tablet} {
    width: 100%;
  }
`

const createGreenWhiteLinearGradient = (deg, percentage) =>
  `linear-gradient(${deg},#B3FFCB,#FFFFFF ${percentage})`

const IndexPage = () => {
  const theme = useTheme()

  return (
    <Layout>
      <SEO title="Home" />
      <HeroBackground showNavigator>
        <ConnectingTheDots />
      </HeroBackground>
      <SlopedSection
        css={background}
        showNavigator
        slopedBackgroundImage={theme.linearGradients.purpleLightToDark}
        slopedBackgroundColor={theme.colors.purples.dark}
      >
        <WhySection />
      </SlopedSection>
      <SlopedSection
        showNavigator
        slopedBackgroundImage={theme.linearGradients.purpleDarkToLight}
        slopedBackgroundColor={theme.colors.purples.dark}
        dotBackground
      >
        <WhatSection />
      </SlopedSection>
      <SlopedSection
        showNavigator
        slopedBackgroundImage={theme.linearGradients.purpleLightToDark}
        slopedBackgroundColor={theme.colors.purples.dark}
      >
        <WhoSection />
      </SlopedSection>
      <SlopedSection
        showNavigator
        slopedBackgroundImage={createGreenWhiteLinearGradient("68.5deg", "70%")}
        mode="dark"
      >
        <DataReportSection />
      </SlopedSection>
      <SlopedSection
        showNavigator
        mode="dark"
        slopedBackgroundImage={createGreenWhiteLinearGradient(
          "-111.5deg",
          "50%"
        )}
      >
        <DataInsights />
      </SlopedSection>
      {/* Media Section */}
      <SlopedSection
        showNavigator
        slopedBackgroundImage={createGreenWhiteLinearGradient("68.5deg", "70%")}
        mode="dark"
      >
        <LogosSection />
      </SlopedSection>
      <SlopedSection
        showNavigator
        mode="dark"
        slopedBackgroundImage={createGreenWhiteLinearGradient(
          "-111.5deg",
          "50%"
        )}
      >
        <TestimonialSection />
      </SlopedSection>
      {/* <SlopedSection
        showNavigator
        mode="dark"
        slopedBackgroundImage={createGreenWhiteLinearGradient("68.5deg", "30%")}
      >
        <LogosSection />
      </SlopedSection> */}
      <SlopedSection
        showNavigator
        slopedBackgroundColor={theme.colors.greens.light}
        hoverBackgroundColor={theme.colors.purples.normal}
        requestADemo
      >
        <GetStarted />
      </SlopedSection>
      <Subscribe css={subscribeSection} />
    </Layout>
  )
}

export default IndexPage
