import React from "react"
import { DashboardWrapper, Dashboard, UnlockBtn, Disclaimer } from "./style"
import IconLock from "@/images/annual-report/digital-economy-annual-report-2024/icon_lock.svg"

const AnnualReportDashboardIframe = () => {
  return (
    <section css={DashboardWrapper}>
      <iframe
        css={Dashboard}
        id="maiAnnualReportDashboard"
        title="MAI Annual Report"
        width={"100%"}
        src="https://hub.upsolve.ai/share/dashboard/4c67e41b-1ee4-413a-a8ec-776dc4917bb7?theme=light"
        frameBorder={0}
      ></iframe>
      <p css={Disclaimer}>
        *The Content is for informational purposes only, you should not construe
        any such information or other material as investment advice. Prior
        written consent is needed for any form of republication, modification,
        repost or distribution of the contents.
      </p>
      <a href="#signup-form" css={UnlockBtn}>
        <img src={IconLock} alt="Locked"></img>
        <span>Sign Up to Unlock</span>
      </a>
    </section>
  )
}

export default AnnualReportDashboardIframe
