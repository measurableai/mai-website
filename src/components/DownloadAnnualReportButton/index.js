import React, { forwardRef } from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import { button } from "./style"

const DownloadAnnualReportButton = forwardRef(({ innerRef, ...props }, ref) => (
  <Link
    to="/2022-annual-report-request"
    ref={ref || innerRef}
    css={button}
    {...props}
  >
    Download 2019-2022 Asia Food Delivery Report
  </Link>
))

export default DownloadAnnualReportButton
