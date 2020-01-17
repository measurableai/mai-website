import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import TextButton from "@/components/TextButton"

const LoginButton = props => (
  <OutboundLink
    href="https://beta.measurable.ai/login"
    target="_blank"
    rel="noopener noreferrer"
  >
    <TextButton {...props}>
      <FormattedMessage id="login" defaultMessage="Login" />
    </TextButton>
  </OutboundLink>
)

export default LoginButton
