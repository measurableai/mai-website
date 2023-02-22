import React, { useCallback } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import TextButton from "@/components/TextButton"

const LoginButton = ({ location, ...props }) => {
  const gtag_report_conversion = useCallback(() => {
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : ""

    if (pathname.includes("asia-food-delivery-report")) {
      if (typeof window.gtag !== "undefined") {
        window.gtag("event", "conversion", {
          send_to: "AW-11082494271/DdFtCIv3z4wYEL_ixaQp",
        })
      }
    }
  }, [])

  return (
    <OutboundLink
      href="https://blog.measurable.ai/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => gtag_report_conversion()}
    >
      <TextButton {...props}>
        <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
      </TextButton>
    </OutboundLink>
  )
}

export default LoginButton
