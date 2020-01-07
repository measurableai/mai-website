import React from "react"

import {
  title,
  content1,
  content2,
  contentFontStyle,
  emailMargin,
} from "./style"

const Press = ({
  header,
  description1,
  description2,
  email,
  downloadPressKit,
  ...props
}) => (
  <div {...props}>
    <h1 css={title}>{header}</h1>
    <p css={theme => [contentFontStyle(theme), content1]}>{description1}</p>
    <p css={theme => [contentFontStyle(theme), content2]}>{description2}</p>
    <p css={theme => [contentFontStyle(theme), emailMargin]}>{email}</p>
    {downloadPressKit}
  </div>
)

export default Press
