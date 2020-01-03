import React from "react"

import { title, header, item } from "./style"

const Header = ({ children }) => <p css={header}>{children}</p>
const Item = ({ children }) => <li css={item}>{children}</li>

const Job = ({ jobDetails, description, requirement, plus, ...props }) => (
  <div {...props}>
    <h2 css={title}>{jobDetails.jobTitle}</h2>
    <Header css={header}>{description}</Header>
    <ul>
      {jobDetails.jobDescriptions.map((jobDescription, index) => (
        <Item key={index}>{jobDescription}</Item>
      ))}
    </ul>
    <Header css={header}>{requirement}</Header>
    <ul>
      {jobDetails.jobRequirements.map((jobRequirement, index) => (
        <Item key={index}>{jobRequirement}</Item>
      ))}
    </ul>
    <Header css={header}>{plus}</Header>
    <ul>
      {jobDetails.jobPluses.map((jobPlus, index) => (
        <Item key={index}>{jobPlus}</Item>
      ))}
    </ul>
  </div>
)

export default Job
