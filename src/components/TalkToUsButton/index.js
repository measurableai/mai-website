import React, { forwardRef } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { button } from "./style"

const TalkToUsButton = forwardRef(({ innerRef, ...props }, ref) => (
  <button ref={ref || innerRef} css={button} {...props}>
    <FormattedMessage id="requestADemo" defaultMessage="REQUEST A DEMO" />
  </button>
))

export default TalkToUsButton
