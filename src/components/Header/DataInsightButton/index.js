import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import TextButton from "@/components/TextButton"

const LoginButton = props => (
  <a
    href="https://blog.measurable.ai/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <TextButton {...props}>
      <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
    </TextButton>
  </a>
)

export default LoginButton
