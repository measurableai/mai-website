import React from "react"

import { tag } from "./style"

const Tag = ({ children, href, ...props }) => (
  <a
    css={theme => tag(theme)}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
)

export default Tag
