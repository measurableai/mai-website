import React from "react"

import { dotArrowContainer, dot1, dot2, rightArrow } from "./style"

const Button = ({ children, ...props }) => (
  <>
    <DotArrowContainer {...props}>
      {children}
      <Dot1 />
      <RightArrow />
      <Dot2 />
    </DotArrowContainer>
  </>
)
const DotArrowContainer = ({ children, src, margin, padding }) => (
  <>
    <a
      css={() => dotArrowContainer(margin, padding)}
      href={src}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </>
)
const Dot1 = ({ children }) => (
  <>
    <div css={dot1}>{children}</div>
  </>
)
const Dot2 = ({ children }) => (
  <>
    <div css={dot2}>{children}</div>
  </>
)
const RightArrow = ({ children }) => (
  <>
    <div css={rightArrow}>{children}</div>
  </>
)

export default Button
