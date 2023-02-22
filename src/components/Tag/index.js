import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import { tag } from "./style"

const Tag = ({ children, href, ...props }) => (
  <OutboundLink
    css={theme => tag(theme)}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </OutboundLink>
)

export default Tag
