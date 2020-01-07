import React from "react"

import { container, title, header, list, item, targetAnchor } from "./style"

const Header = ({ children }) => <p css={header}>{children}</p>
const Item = ({ children }) => <li css={item}>{children}</li>
const List = ({ children }) => <ul css={list}>{children}</ul>

const Job = ({ jobDetails, description, requirement, plus, ...props }) => (
  <div css={container} {...props}>
    <a
      css={targetAnchor}
      id={jobDetails.jobTitle}
      href={`#${jobDetails.jobTitle}`}
    >
      &nbsp;
    </a>
    <h2 css={title}>{jobDetails.jobTitle}</h2>
    <Header css={header}>{description}</Header>
    <List>
      {jobDetails.jobDescriptions.map((jobDescription, index) => (
        <Item key={index}>{jobDescription}</Item>
      ))}
    </List>
    <Header css={header}>{requirement}</Header>
    <List>
      {jobDetails.jobRequirements.map((jobRequirement, index) => (
        <Item key={index}>{jobRequirement}</Item>
      ))}
    </List>
    <Header css={header}>{plus}</Header>
    <List>
      {jobDetails.jobPluses.map((jobPlus, index) => (
        <Item key={index}>{jobPlus}</Item>
      ))}
    </List>
  </div>
)

export default Job
