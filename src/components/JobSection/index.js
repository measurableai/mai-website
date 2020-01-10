import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { container, title, header, list, item, targetAnchor } from "./style"

const Header = ({ children }) => <p css={header}>{children}</p>
const Item = ({ children }) => <li css={item}>{children}</li>
const List = ({ children }) => <ul css={list}>{children}</ul>

const Job = ({ jobDetails, ...props }) => (
  <div css={container} {...props}>
    <a
      css={targetAnchor}
      id={jobDetails.jobTitle}
      href={`#${jobDetails.jobTitle}`}
    >
      &nbsp;
    </a>
    <h2 css={title}>{jobDetails.jobTitle}</h2>
    <Header css={header}>
      <FormattedMessage
        id="jobDescriptions"
        defaultMessage="Job Descriptions:"
      />
    </Header>
    <List>
      {jobDetails.jobDescriptions.map((jobDescription, index) => (
        <Item key={index}>{jobDescription}</Item>
      ))}
    </List>
    <Header css={header}>
      <FormattedMessage id="jobRequirement" defaultMessage="Requirement:" />
    </Header>
    <List>
      {jobDetails.jobRequirements.map((jobRequirement, index) => (
        <Item key={index}>{jobRequirement}</Item>
      ))}
    </List>
    <Header css={header}>
      <FormattedMessage id="jobPlus" defaultMessage="**Plus**" />
    </Header>
    <List>
      {jobDetails.jobPluses.map((jobPlus, index) => (
        <Item key={index}>{jobPlus}</Item>
      ))}
    </List>
  </div>
)

export default Job
