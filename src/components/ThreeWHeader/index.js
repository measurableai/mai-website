import React from "react"

import { titleStyle, title, subTitle, questionMarkStyle } from "./style"
const ThreeWHeader = ({ header, subHeader, questionMark, ...props }) => (
  <div {...props}>
    <p css={theme => [titleStyle(theme), title(theme)]}>{header}</p>
    <p css={theme => [titleStyle(theme), subTitle(theme)]}>
      {subHeader}
      <span css={questionMarkStyle}>{questionMark}</span>
    </p>
  </div>
)

export default ThreeWHeader
