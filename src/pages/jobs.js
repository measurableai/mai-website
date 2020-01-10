import React, { useMemo } from "react"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import SlopedSection from "@/components/SlopedBackground"
import Hiring from "@/components/HiringSection"
import Job from "@/components/JobSection"

import rawData from "@/data/jobs.json"

import useMedia from "@/hooks/useMedia"

const background = theme => css`
  background-image: ${theme.linearGradients.greenDarkToLight};
  margin-bottom: 26.5rem;
`

const hiringPadding = isMobile => css`
  padding-top: ${isMobile ? "8.8rem" : "26.3rem"};
  padding-left: ${isMobile ? "0" : "5.7rem"};
  text-align: left;
`

const jobsSection = isMobile => css`
  margin: 0 auto;
  width: ${isMobile ? "100%" : "102.4rem"};
  padding-left: ${isMobile ? "2rem" : "6.9rem"};
  padding-right: ${isMobile ? "2rem" : "1.2rem"};
  box-sizing: border-box;
`

const JobPage = () => {
  const theme = useTheme()
  const intl = useIntl()
  const isMobile = useMedia([true], false)

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
        <Hiring css={hiringPadding(isMobile)} openingJobs={openingJobs} />
      </SlopedSection>
      <div css={jobsSection(isMobile)}>
        {data.map((job, index) => (
          <Job key={index} jobDetails={job} />
        ))}
      </div>
    </Layout>
  )
}

export default JobPage
