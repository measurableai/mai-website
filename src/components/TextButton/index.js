import React from "react"

import { button } from "./style.js"

const TextButton = ({ children, ...props }) => (
  <button css={button} {...props}>
    {children}
  </button>
)

export default TextButton
