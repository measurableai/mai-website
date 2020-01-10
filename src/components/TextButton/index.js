import React from "react"

import { button } from "./style.js"

const TextButton = ({ children, lightModeOn, ...props }) => (
  <button css={theme => button(theme, lightModeOn)} {...props}>
    {children}
  </button>
)

export default TextButton
