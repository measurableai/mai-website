import React, { forwardRef } from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { button } from "./style"

const FreeTrialButton = forwardRef(({ innerRef, ...props }, ref) => (
  <OutboundLink
    href="https://beta.measurable.ai/register"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button ref={ref || innerRef} css={button} {...props}>
      Start Free Trial
    </button>
  </OutboundLink>
))

export default FreeTrialButton
