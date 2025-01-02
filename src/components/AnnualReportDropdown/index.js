import React, { forwardRef } from "react"
import { Link } from "gatsby-plugin-intl"
import { dropdown, listItem } from "./style"

const ListItem = forwardRef(({ innerRef, to, children, ...props }, ref) => (
  <Link to={to} ref={ref || innerRef} css={listItem} {...props}>
    {children}
  </Link>
))

const AnnualReportDropdown = () => {
  return (
    <div css={dropdown}>
      <button>Get Annual Report</button>
      <div>
        <div>
          <ListItem to="/middle-east-online-delivery-report">
            Middle East Online Delivery Report 2020-2024: FOOD + GROCERY
            <span>New</span>
          </ListItem>
          <ListItem to="/digital-economy-annual-report-2024">
            The 2024 Digital Economy Annual Report
          </ListItem>
          <ListItem to="/asia-americas-ride-hailing-report">
            Asia & Americas Ride-Hailing 2019-2023
          </ListItem>
          <ListItem to="/asia-food-delivery-report">
            Asia Online Delivery 2019-2022: Food & Grocery
          </ListItem>
        </div>
      </div>
    </div>
  )
}

export default AnnualReportDropdown
