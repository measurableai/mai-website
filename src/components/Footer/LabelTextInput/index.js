import React from "react"

import InputBox from "@/components/InputBox"
import TextInput from "@/components/TextInput"

import { inputContainer, textInput } from "./style"

const LabelTextInput = ({ label, id, ...props }) => (
  <InputBox css={inputContainer} label={label} labelFor={id}>
    <TextInput css={textInput} id={id} {...props} />
  </InputBox>
)

export default LabelTextInput
