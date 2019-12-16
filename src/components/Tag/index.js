import React from "react"

import { tag } from "./style"

const Tag = ({ children, ...props }) => (
  <>
    <TagComponent {...props}>{children}</TagComponent>
  </>
)
const TagComponent = ({ children, theme, fontSize, margin, padding, href }) => (
  <>
    <a
      css={theme => tag(theme, fontSize, margin, padding)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </>
)

export default Tag
