import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import SlopedSection from "@/components/SlopedBackground"
import Press from "@/components/PressSection"

import useMedia from "@/hooks/useMedia"

const background = (theme, isMobile) => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: ${isMobile ? "23rem" : "30.6rem"};
`

const shoutOutPadding = isMobile => css`
  padding-top: ${isMobile ? "8.8rem" : "26.3rem"};
  padding-left: ${isMobile ? "0" : "5.7rem"};
  text-align: left;
`

const PressPage = () => {
  const theme = useTheme()
  const isMobile = useMedia([true], false)
  return (
    <Layout headerMode="light">
      <SEO title="Press" />
      <SlopedSection
        css={background(theme, isMobile)}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <Press css={shoutOutPadding(isMobile)} />
      </SlopedSection>
    </Layout>
  )
}

export default PressPage
