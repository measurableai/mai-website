import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { mq } from "@/theme"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import SlopedSection from "@/components/SlopedBackground"
import PrivacyPolicy from "@/components/PrivacyPolicySection"

const background = theme => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 30.6rem;

  ${mq.tablet} {
    margin-bottom: 23rem;
  }
`

const privacyPolicyPadding = css`
  padding-top: 26.3rem;
  padding-left: 5.7rem;
  text-align: left;

  ${mq.tablet} {
    padding-top: 8.8rem;
    padding-left: 0;
  }
`

const PrivacyPolicyPage = () => {
  const theme = useTheme()
  return (
    <Layout headerMode="light">
      <SEO title="Privacy Policy" />
      <SlopedSection
        css={background(theme)}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <PrivacyPolicy css={privacyPolicyPadding} />
      </SlopedSection>
    </Layout>
  )
}

export default PrivacyPolicyPage
