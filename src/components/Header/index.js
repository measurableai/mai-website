import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import FreeTrialButton from "@/components/FreeTrialButton"
import TextButton from "@/components/TextButton"
import LanguageDropdown from "@/components/LanguageDropdown"

import logo from "@/images/mai-logo.svg"

import {
  container,
  content,
  textButtonMargin,
  buttonsContainter,
} from "./style"

const Header = () => (
  <div css={container}>
    <div css={content}>
      <img width={218} height={30} src={logo} alt="Measurable AI" />
      <div css={buttonsContainter}>
        <FreeTrialButton />
        <TextButton css={textButtonMargin}>
          <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
        </TextButton>
        <LanguageDropdown css={textButtonMargin} />
        <TextButton css={textButtonMargin}>
          <FormattedMessage id="login" defaultMessage="Login" />
        </TextButton>
      </div>
    </div>
  </div>
)

export default Header
