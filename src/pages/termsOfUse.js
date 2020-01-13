import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { mq } from "@/theme"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import SlopedSection from "@/components/SlopedBackground"
import Terms from "@/components/TermsSection"

const background = theme => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 30.6rem;

  ${mq.mobile} {
    margin-bottom: 23rem;
  }
`

const termsPadding = css`
  padding-top: 26.3rem;
  padding-left: 5.7rem;
  text-align: left;

  ${mq.mobile} {
    padding-top: 8.8rem;
    padding-left: 0;
  }
`

const TermsPage = () => {
  const theme = useTheme()
  return (
    <Layout headerMode="light">
      <SEO title="Terms of Use" />
      <SlopedSection
        css={background(theme)}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <Terms css={termsPadding} />
      </SlopedSection>
    </Layout>
  )
}

export default TermsPage
