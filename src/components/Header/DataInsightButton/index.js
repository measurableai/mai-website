import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import TextButton from "@/components/TextButton"

const LoginButton = props => (
  <OutboundLink
    href="https://blog.measurable.ai/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <TextButton {...props}>
      <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
    </TextButton>
  </OutboundLink>
)

export default LoginButton
