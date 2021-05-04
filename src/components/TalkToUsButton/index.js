import React, { forwardRef } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { button } from "./style"

const TalkToUsButton = forwardRef(({ innerRef, ...props }, ref) => (
  <button ref={ref || innerRef} css={button} {...props}>
    <FormattedMessage id="talkToUs" defaultMessage="TALK TO US" />
  </button>
))

export default TalkToUsButton
