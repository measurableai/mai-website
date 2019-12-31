import React from "react"

import { container, dotLineContainer, dot, line } from "./style"

const DotLine = ({ invert, ...props }) => (
  <div css={container} {...props}>
    <div css={() => dotLineContainer(invert)}>
      <div css={dot} />
      <div css={line} />
    </div>
  </div>
)

export default DotLine
