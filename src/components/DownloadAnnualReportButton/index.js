import React, { forwardRef } from "react"
import { Link } from "gatsby-plugin-intl"

import { button } from "./style"

const DownloadAnnualReportButton = forwardRef(
  ({ innerRef, children, to, ...props }, ref) => (
    <Link to={to} ref={ref || innerRef} css={button} {...props}>
      {children}
    </Link>
  )
)

export default DownloadAnnualReportButton
