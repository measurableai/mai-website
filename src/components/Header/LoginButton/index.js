import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import TextButton from "@/components/TextButton"

const LoginButton = props => (
  <TextButton {...props}>
    <FormattedMessage id="login" defaultMessage="Login" />
  </TextButton>
)

export default LoginButton
