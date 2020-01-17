import React, { forwardRef } from "react"

import { button } from "./style"

const FreeTrialButton = forwardRef(({ innerRef, ...props }, ref) => (
  <a
    href="https://beta.measurable.ai/register"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button ref={ref || innerRef} css={button} {...props}>
      Start Free Trial
    </button>
  </a>
))

export default FreeTrialButton
