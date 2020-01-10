import React from "react"

import { button } from "./style"

const FreeTrialButton = props => (
  <a
    href="https://beta.measurable.ai/register"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button css={button} {...props}>
      Start Free Trial
    </button>
  </a>
)

export default FreeTrialButton
