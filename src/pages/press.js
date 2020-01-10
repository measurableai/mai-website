import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import SlopedSection from "@/components/SlopedBackground"
import Press from "@/components/PressSection"

const background = theme => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 30.6rem;
`

const shoutOutPadding = css`
  padding-top: 26.3rem;
  padding-left: 5.7rem;
  text-align: left;
`

const PressPage = () => {
  const theme = useTheme()
  return (
    <Layout headerMode="light">
      <SEO title="Press" />
      <SlopedSection
        css={background}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <Press css={shoutOutPadding} />
      </SlopedSection>
    </Layout>
  )
}

export default PressPage
