import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import HeroBackground from "@/components/HeroBackground"
import SlopedSection from "@/components/SlopedBackground"
import DataInsights from "@/components/DataInsights"
import DataReportSection from "@/components/DataReportSection"

const background = theme => css`
  background-image: ${theme.linearGradients.purpleDarkToLight};
  background-color: ${theme.colors.purples.dark};
`

const lastSection = css`
  margin-bottom: 30rem;
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
        <p style={{ color: "white" }}>Section 1</p>
      </SlopedSection>
      <SlopedSection
        slopedBackgroundImage={theme.linearGradients.purpleDarkToLight}
        slopedBackgroundColor={theme.colors.purples.dark}
      >
        <p style={{ color: "white" }}>Section 2</p>
      </SlopedSection>
      <SlopedSection
        slopedBackgroundImage={theme.linearGradients.purpleLightToDark}
        slopedBackgroundColor={theme.colors.purples.dark}
      >
        <p style={{ color: "white" }}>Section 3</p>
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
        slopedBackgroundColor={theme.colors.greens.dark}
      >
        <p>Section 7</p>
      </SlopedSection>
    </Layout>
  )
}

export default IndexPage
