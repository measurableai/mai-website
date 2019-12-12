import React from "react"

import { container, dotLineContainer, dot, line } from "./style"

const ImageDotLineTitle = ({ children, src, alt, ...props }) => (
  <div css={container} {...props}>
    <DotLineContainer {...props}>
      <div css={dot} />
      <div css={line} />
    </DotLineContainer>
    <p {...props}>{children}</p>
  </div>
)

const DotLineContainer = ({ children, invert }) => (
  <>
    <div css={() => dotLineContainer(invert)}>{children}</div>
  </>
)

export default ImageDotLineTitle
