import React from "react"

import { labelStyle } from "./style"

const InputBox = ({ label, labelFor, optional, children, ...props }) => (
  <div {...props}>
    <label css={labelStyle} htmlFor={labelFor}>
      {label}
      {!optional && `*`}
    </label>
    {children}
  </div>
)

export default InputBox
