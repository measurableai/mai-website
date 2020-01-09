import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import TextButton from "@/components/TextButton"

const LoginButton = props => (
  <TextButton {...props}>
    <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
  </TextButton>
)

export default LoginButton
