import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { mq } from "@/theme"
import { useTheme } from "emotion-theming"
import AnnualReportForm from "@/components/AllReports/Form"
import SlopedSection from "@/components/SlopedBackground"

import "@/fonts/barlow.css"

import ogImageJpg from "@/images/annual-report/digital-economy-annual-report-2024/og-image.jpg"

const layout = css`
  width: 100rem;
  margin: 0 auto;
  padding-top: 12rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: "main main main main main main main main aside aside aside aside";
  gap: 4rem;

  & > main {
    grid-area: main;
    text-align: left;
  }
  & > aside {
    grid-area: aside;
  }
`

const background = theme => css`
  padding: 0;
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 0rem;

  ${mq.tablet} {
    margin-bottom: 23rem;
  }
`

const AllReportsPage = () => {
  const theme = useTheme()

  return (
    <Layout headerMode="light">
      <SEO
        title="Get Free Reports"
        description="Check out Measurable AI’s reports capturing key insights covering food delivery, ride-hailing and e-commerce."
        meta={[
          {
            property: `og:image`,
            content: `https://www.measurable.ai${ogImageJpg}`,
          },
        ]}
      />
      <SlopedSection
        css={background}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <div css={layout}>
          <main>This is main content</main>
          <aside>
            <AnnualReportForm />
          </aside>
        </div>
      </SlopedSection>
    </Layout>
  )
}

export default AllReportsPage
