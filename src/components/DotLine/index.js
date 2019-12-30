import React from "react"

import { container, dotLineContainer, dot, line } from "./style"

const DotLine = ({ invert, margin, ...props }) => (
  <div css={() => container(margin)}>
    <div css={() => dotLineContainer(invert)} {...props}>
      <div css={dot} />
      <div css={line} />
    </div>
  </div>
)

export default DotLine
