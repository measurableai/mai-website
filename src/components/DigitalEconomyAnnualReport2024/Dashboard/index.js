import React from "react"
import { iframeWrapper, dashboard } from "./style"

const AnnualReportDashboardIframe = () => {
  return (
    <section css={iframeWrapper}>
      <iframe
        css={dashboard}
        id="maiAnnualReportDashboard"
        title="MAI Annual Report"
        width={"100%"}
        height={"768"}
        src="https://hub.upsolve.ai/share/dashboard/4c67e41b-1ee4-413a-a8ec-776dc4917bb7?theme=light"
        frameBorder={0}
      ></iframe>
    </section>
  )
}

export default AnnualReportDashboardIframe
