import React, { useMemo } from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import { container, emailStyle } from "./style"

import rawData from "./jobs.json"
import Job from "./Job"
import Hiring from "./Hiring"

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
  const jobsOpenings = rawData.map(
    rawDataItem => rawDataItem.jobTitle[intl.locale]
  )

  return (
    <div css={container}>
      <Hiring
        header={
          <FormattedMessage id="weAreHiring" defaultMessage="We’re HIRING!" />
        }
        description={
          <FormattedMessage
            id="joinUs"
            defaultMessage="Join us in our quest to make communication friendly and efficient! We're looking for full-stack developers to our team in Hong Kong, and we're offering generous equity alongside competitive pay. Not to mention free meals, snacks and drinks, gym room and table tennis, and happy hours!"
          />
        }
        email={
          <FormattedMessage
            id="emailToApply"
            defaultMessage="Email <span>jobs@measurable.ai</span> to apply."
            values={{
              span: str => <span css={emailStyle}>{str}</span>,
            }}
          />
        }
        currentOpenings={
          <FormattedMessage
            id="currentOpenings"
            defaultMessage="Current openings:"
          />
        }
        openingJobs={jobsOpenings}
      />
      {jobData.map((job, index) => (
        <Job
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
