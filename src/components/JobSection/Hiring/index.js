import React from "react"

import {
  title,
  content,
  currentOpeningsContainer,
  jobTitle,
  jumpAnchor,
  contentFontStyle,
  emailMargin,
} from "./style"

const Hiring = ({
  header,
  description,
  email,
  currentOpenings,
  openingJobs,
  ...props
}) => (
  <div {...props}>
    <h1 css={title}>{header}</h1>

    <p css={theme => [contentFontStyle(theme), content]}>{description}</p>
    <p css={theme => [contentFontStyle(theme), emailMargin]}>{email}</p>
    <p css={contentFontStyle}>{currentOpenings}</p>
    <div css={currentOpeningsContainer}>
      {openingJobs.map((openingJob, index) => (
        <>
          <span css={jobTitle} key={openingJob.toString()}>
            <a
              css={theme => [jobTitle(theme), jumpAnchor]}
              href={`#${openingJob}`}
            >
              {openingJob}
            </a>
          </span>
          {index !== openingJobs.length - 1 && <span>, </span>}
        </>
      ))}
    </div>
  </div>
)

export default Hiring
