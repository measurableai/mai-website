import React from "react"

import DataInsightButton from "../DataInsightButton"
import LanguageItemList from "../LanguageItemList"

import { menu, menuItem, annualReportMenuItem } from "./style"
import DownloadAnnualReportButton from "@/components/DownloadAnnualReportButton"

const Menu = ({ lightModeOn }) => {
  return (
    <div css={menu}>
      {/* <LoginButton lightModeOn={lightModeOn} css={menuItem} /> */}
      <DataInsightButton lightModeOn={lightModeOn} css={menuItem} />
      {process.env.GATSBY_MULTI_LANG === "true" && (
        <div css={menuItem}>
          <LanguageItemList />
        </div>
      )}
      <div css={theme => annualReportMenuItem(theme)}>
        <div className="label">Get Annual Report</div>
        <DownloadAnnualReportButton to="/middle-east-online-delivery-report">
          Middle East Online Delivery Report 2020-2024: FOOD + GROCERY
          <span>New</span>
        </DownloadAnnualReportButton>
        <DownloadAnnualReportButton to="/digital-economy-annual-report-2024">
          The 2024 Digital Economy Annual Report
        </DownloadAnnualReportButton>
        <DownloadAnnualReportButton to="/asia-americas-ride-hailing-report">
          Asia & Americas Ride-Hailing 2019-2023
        </DownloadAnnualReportButton>
        <DownloadAnnualReportButton to="/asia-food-delivery-report">
          Asia Online Delivery 2019-2022: Food & Grocery
        </DownloadAnnualReportButton>
      </div>
      {/* <div css={menuItem}>
        <TalkToUsButton onClick={() => open()} />
      </div> */}
    </div>
  )
}

export default Menu
