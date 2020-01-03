import React, { useMemo } from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import { container } from "./style"

import rawData from "./jobs.json"
import Job from "./Job"

const JobSection = () => {
  const intl = useIntl()
  const jobData = useMemo(
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
  return (
    <div>
      {jobData.map((job, index) => (
        <Job
          css={container}
          key={index}
          jobDetails={job}
          description={
            <FormattedMessage
              id="jobDescriptions"
              defaultMessage="Job Descriptions:"
            />
          }
          requirement={
            <FormattedMessage
              id="jobRequirement"
              defaultMessage="Requirement:"
            />
          }
          plus={<FormattedMessage id="jobPlus" defaultMessage="**Plus**" />}
        />
      ))}
    </div>
  )
}

export default JobSection
