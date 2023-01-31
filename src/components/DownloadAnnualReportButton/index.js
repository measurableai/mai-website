import React, { forwardRef } from "react"
import { Link } from "gatsby-plugin-intl"

import { button } from "./style"

const DownloadAnnualReportButton = forwardRef(({ innerRef, ...props }, ref) => (
  <Link
    to="/asia-food-delivery-report"
    ref={ref || innerRef}
    css={button}
    {...props}
  >
    Asia Online Delivery Report 2019-2022
  </Link>
))

export default DownloadAnnualReportButton
