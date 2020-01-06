import React from "react"

import { labelStyle } from "./style"

const InputBox = ({ label, labelFor, children, ...props }) => (
  <div {...props}>
    <label css={labelStyle} htmlFor={labelFor}>
      {label}
    </label>
    {children}
  </div>
)

export default InputBox
