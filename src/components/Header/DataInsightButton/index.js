import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import TextButton from "@/components/TextButton"

const gtag_report_conversion = url => {
  // window.gtag is undefined in development & do not track is true
  if (typeof window.gtag !== "undefined") {
    console.log("Send Gtag Event.")
    window.gtag("event", "conversion", {
      send_to: "AW-11082494271/DdFtCIv3z4wYEL_ixaQp",
    })
  }

  return false
}

const LoginButton = ({ location, ...props }) => {
  let isReportPage = false
  const pathname = typeof window !== "undefined" ? window.location.pathname : ""

  if (pathname.includes("asia-food-delivery-report")) {
    isReportPage = true
  } else {
    isReportPage = false
  }

  return (
    <OutboundLink
      href="https://blog.measurable.ai/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={isReportPage ? () => gtag_report_conversion() : null}
    >
      <TextButton {...props}>
        <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
      </TextButton>
    </OutboundLink>
  )
}

export default LoginButton
