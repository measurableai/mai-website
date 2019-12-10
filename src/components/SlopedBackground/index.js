import React from "react"

import { Background } from "./style"

const SlopedSection = ({ children, ...props }) => (
  <Background {...props}>{children}</Background>
)

export default SlopedSection
