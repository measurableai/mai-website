import React from "react"

import {
  title,
  content,
  currentOpeningsContainer,
  jobTitle,
  jumpAnchor,
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

    <p css={content}>{description}</p>
    <p css={content}>{email}</p>
    <p css={content}>{currentOpenings}</p>
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
