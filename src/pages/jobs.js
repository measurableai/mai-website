import React, { useMemo } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { useIntl } from "gatsby-plugin-intl"
import { mq } from "@/theme"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import SlopedSection from "@/components/SlopedBackground"
import Hiring from "@/components/HiringSection"
import Job from "@/components/JobSection"

import rawData from "@/data/jobs.json"

const background = theme => css`
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 26.5rem;
`

const hiringPadding = css`
  padding-top: 26.3rem;
  padding-left: 5.7rem;
  text-align: left;

  ${mq.mobile} {
    padding-top: 8.8rem;
    padding-left: 0;
  }
`

const jobsSection = css`
  margin: 0 auto;
  width: 102.4rem;
  padding-left: 6.9rem;
  padding-right: 1.2rem;
  box-sizing: border-box;

  ${mq.mobile} {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const JobPage = () => {
  const theme = useTheme()
  const intl = useIntl()

  const data = useMemo(
    () =>
      rawData.map(rawDataItem => {
        const dataItem = {}
        Object.keys(rawDataItem).forEach(key => {
          if (rawDataItem[key].length !== undefined) {
            dataItem[key] = []
            Object.keys(rawDataItem[key]).forEach(sKey => {
              dataItem[key].push(rawDataItem[key][sKey][intl.locale])
            })
          } else {
            dataItem[key] = rawDataItem[key][intl.locale] || rawDataItem[key]
          }
        })
        return dataItem
      }),
    [intl.locale]
  )
  const openingJobs = useMemo(() => data.map(dataItem => dataItem.jobTitle), [
    data,
  ])

  return (
    <Layout headerMode="light">
      <SEO title="Jobs" />
      <SlopedSection
        css={background}
        slopedBackgroundImage={theme.linearGradients.greenDarkToLight}
      >
        <Hiring css={hiringPadding} openingJobs={openingJobs} />
      </SlopedSection>
      <div css={jobsSection}>
        {data.map((job, index) => (
          <Job key={index} jobDetails={job} />
        ))}
      </div>
    </Layout>
  )
}

export default JobPage
