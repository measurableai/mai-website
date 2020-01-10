import React from "react"

import { numberInput } from "./style"

const TextInput = ({ as: Component, ...props }) => (
  <Component css={numberInput} {...props} />
)

TextInput.defaultProps = {
  as: "input",
}

export default TextInput
