import React from "react"

import FreeTrialButton from "../../components/FreeTrialButton"
import TextButton from "../../components/TextButton"
import logo from "../../images/mai-logo.svg"

import { container, content, textButtonMargin } from "./style"

const Header = ({ children, mode, ...props }) => (
  <div css={container}>
    <div css={content}>
      <img width={218} height={30} src={logo} alt="Measurable AI" />
      <div>
        <FreeTrialButton />
        <TextButton css={textButtonMargin}>Data Insights</TextButton>
        <TextButton css={textButtonMargin}>Login</TextButton>
      </div>
    </div>
  </div>
)

export default Header
