import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  title,
  content,
  currentOpeningsContainer,
  jobTitle,
  jumpAnchor,
  contentFontStyle,
  emailMargin,
  emailStyle,
  jobContainer,
} from "./style"

const HiringSection = ({ openingJobs, ...props }) => (
  <div {...props}>
    <h1 css={title}>
      <FormattedMessage id="weAreHiring" defaultMessage="We’re HIRING!" />
    </h1>
    <p css={theme => [contentFontStyle(theme), content]}>
      <FormattedMessage
        id="joinUs"
        defaultMessage="Join us in our quest to connect the dots with data! We’re looking for full-stack developers, software engineers, and data scientists to our team in Hong Kong!"
      />
    </p>
    <p css={theme => [contentFontStyle(theme), emailMargin]}>
      <FormattedMessage
        id="emailToApply"
        defaultMessage="Email <span>jobs@measurable.ai</span> to apply."
        values={{
          span: str => <span css={emailStyle}>{str}</span>,
        }}
      />
    </p>
    <p css={contentFontStyle}>
      <FormattedMessage
        id="currentOpenings"
        defaultMessage="Current openings:"
      />
    </p>
    <div css={currentOpeningsContainer}>
      {openingJobs.map((openingJob, index) => (
        <div css={jobContainer} key={openingJob.toString()}>
          <span css={jobTitle}>
            <a
              css={theme => [jobTitle(theme), jumpAnchor]}
              href={`#${openingJob}`}
            >
              {openingJob}
            </a>
          </span>
          {index !== openingJobs.length - 1 && <span>, &nbsp;</span>}
        </div>
      ))}
    </div>
  </div>
)

export default HiringSection
