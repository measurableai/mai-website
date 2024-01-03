import React from "react"
import {
  hero,
  logoWrapper,
  logo,
  contentWrap,
  titleSvgDesktop,
  titleSvgMobile,
} from "./style"
import maiLogo from "@/images/mai-logo-2.svg"
import titleLogoDesktop from "@/images/annual-report/digital-economy-annual-report-2024/the-2024-digital-economy-annual-report-emerging-markets_desktop.svg"
import titleLogoMobile from "@/images/annual-report/digital-economy-annual-report-2024/the-2024-digital-economy-annual-report-emerging-markets_mobile.svg"

const AnnualReportHero = props => {
  return (
    <section css={hero} {...props}>
      <div css={contentWrap}>
        <div css={logoWrapper}>
          <span>By</span>
          <img css={logo} src={maiLogo} alt="Measurable AI" />
        </div>

        <img css={titleSvgDesktop} src={titleLogoDesktop} alt="" />
        <img css={titleSvgMobile} src={titleLogoMobile} alt="" />
      </div>
    </section>
  )
}

export default AnnualReportHero
