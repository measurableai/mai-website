import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import TextButton from "@/components/TextButton"

const LoginButton = props => (
  <a
    href="https://beta.measurable.ai/login"
    target="_blank"
    rel="noopener noreferrer"
  >
    <TextButton {...props}>
      <FormattedMessage id="login" defaultMessage="Login" />
    </TextButton>
  </a>
)

export default LoginButton
