import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { mq } from "@/theme"
import SlopedSection from "@/components/SlopedBackground"
import AnnualReportSection from "@/components/AnnualReportSection"

const background = theme => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 30.6rem;

  ${mq.tablet} {
    margin-bottom: 23rem;
  }
`

const shoutOutPadding = css`
  padding-top: 26.3rem;
  padding-left: 5.7rem;
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
      <SEO title="2022 Annual Report" />
      <SlopedSection
        css={background}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <AnnualReportSection css={shoutOutPadding} />
      </SlopedSection>
    </Layout>
  )
}

export default AnnualReportRequestPage
