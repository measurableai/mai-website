import React from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { FormattedMessage } from "gatsby-plugin-intl"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import SlopedSection from "@/components/SlopedBackground"
import Press from "@/components/PressSection"

const emailStyle = theme => css`
  margin: 0;
  color: ${theme.colors.greens.dark};
  font-size: 2.8rem;
`

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

const button = theme => css`
  background: ${theme.colors.purples.normal};
  color: ${theme.colors.greens.light};
  padding: 1.1rem 2.6rem;
  font-size: 2.4rem;
  font-weight: bold;
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
        <Press
          css={shoutOutPadding}
          header={
            <FormattedMessage
              id="shoutOutToJournalists"
              defaultMessage="Shout out to Journalists"
            />
          }
          description1={
            <FormattedMessage
              id="maiProvidesJournalists"
              defaultMessage="Measurable AI provides journalists with an exclusive database of source for consumer insights and the business world. You can either track consumer trends through our data dashboard, or we can email the data you might need."
            />
          }
          description2={
            <FormattedMessage
              id="letUsknowYourPublication"
              defaultMessage="Let us know your publication, story and companies you are looking at, and we'll help !"
            />
          }
          email={
            <FormattedMessage
              id="emailToPress"
              defaultMessage="Please contact <span>press@measurable.ai</span>"
              values={{
                span: str => (
                  <span css={emailStyle}>
                    <br />
                    {str}
                  </span>
                ),
              }}
            />
          }
          downloadPressKit={
            <button css={button}>
              <FormattedMessage
                id="downloadPressKit"
                defaultMessage="Download Press Kit"
              />
            </button>
          }
        />
      </SlopedSection>
    </Layout>
  )
}

export default PressPage
