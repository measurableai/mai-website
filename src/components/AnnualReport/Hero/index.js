import React from "react"
import { hero, svg, title, logoWrapper, logo } from "./style"
import maiLogo from "@/images/mai-logo-2.svg"

const AnnualReportHero = props => {
  return (
    <section css={hero} {...props}>
      <svg
        css={svg}
        width="525"
        height="210"
        viewBox="0 0 525 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.15625 42.1717V33.7004C9.15625 2.63887 49.7563 1.22701 49.7563 33.7004C49.7563 52.0549 36.4563 67.5856 30.1563 76.7629L9.15625 107.118V113.472H58.1563"
          stroke="#A75EFF"
          stroke-width="16.8"
        />
        <path
          d="M9.15625 39.0998V33.7004C9.15625 2.63887 49.7562 1.22701 49.7562 33.7004C49.7562 52.0549 36.4562 67.5856 30.1562 76.7629L9.15625 107.118V113.472H55.3562"
          stroke="white"
          stroke-width="11.2"
        />
        <path
          d="M79.1514 29.9999C79.1514 18.4019 88.5534 8.99988 100.151 8.99988C111.749 8.99988 121.151 18.4019 121.151 29.9999V94.3998C121.151 105.998 111.749 115.4 100.151 115.4C88.5534 115.4 79.1514 105.998 79.1514 94.3999V29.9999Z"
          stroke="#A75EFF"
          stroke-width="16.8"
        />
        <path
          d="M79.1514 29.9999C79.1514 18.4019 88.5534 8.99988 100.151 8.99988C111.749 8.99988 121.151 18.4019 121.151 29.9999V94.3998C121.151 105.998 111.749 115.4 100.151 115.4C88.5534 115.4 79.1514 105.998 79.1514 94.3999V29.9999Z"
          stroke="white"
          stroke-width="11.2"
        />
        <path
          d="M141.455 21.5998L160.355 11.7998H166.655V122.4"
          stroke="#A75EFF"
          stroke-width="15.4"
        />
        <path
          d="M237.35 37.6999V29.9999C237.35 18.4019 227.948 8.99991 216.35 8.99991C204.752 8.99991 195.35 18.4019 195.35 29.9999V50.4348C195.35 61.9583 204.691 71.2999 216.215 71.2999C227.569 71.2999 236.839 62.2211 237.075 50.8694L237.35 37.6999ZM237.35 37.6999V94.3999C237.35 105.998 227.948 115.4 216.35 115.4C204.752 115.4 195.35 105.998 195.35 94.3999V89.4999"
          stroke="#A75EFF"
          stroke-width="16.8"
        />
        <path
          d="M338.4 116C338.4 104.402 347.802 95 359.4 95C370.998 95 380.4 104.402 380.4 116V180.4C380.4 191.998 370.998 201.4 359.4 201.4C347.802 201.4 338.4 191.998 338.4 180.4V116Z"
          stroke="#A75EFF"
          stroke-width="16.8"
        />
        <path
          d="M268.4 128.172V119.701C268.4 88.6391 309 87.2272 309 119.701C309 138.055 295.7 153.586 289.4 162.763L268.4 193.119V199.472H317.4"
          stroke="#A75EFF"
          stroke-width="16.8"
        />
        <path
          d="M338.4 116C338.4 104.402 347.802 95 359.4 95C370.998 95 380.4 104.402 380.4 116V180.4C380.4 191.998 370.998 201.4 359.4 201.4C347.802 201.4 338.4 191.998 338.4 180.4V116Z"
          stroke="white"
          stroke-width="11.2"
        />
        <path
          d="M268.4 125.1V119.701C268.4 88.6391 309 87.2272 309 119.701C309 138.055 295.7 153.586 289.4 162.763L268.4 193.119V199.472H313.9"
          stroke="white"
          stroke-width="11.2"
        />
        <path
          d="M408.4 128.172V119.701C408.4 88.6391 449 87.2272 449 119.701C449 138.055 435.7 153.586 429.4 162.763L408.4 193.119V199.472H457.4"
          stroke="#A75EFF"
          stroke-width="16.8"
        />
        <path
          d="M475.6 128.172V119.701C475.6 88.6391 516.2 87.2273 516.2 119.701C516.2 138.055 502.9 153.586 496.6 162.763L475.6 193.119V199.472H524.6"
          stroke="#A75EFF"
          stroke-width="16.8"
        />
        <g>
          <circle cx="260" cy="106" r="53" fill="#4AFF88" id="green-circle" />
        </g>
      </svg>
      <h1 css={title}>
        Asia <br /> Food Delivery <br /> <span>Report</span>
      </h1>
      <div css={logoWrapper}>
        <span>By</span>
        <img css={logo} src={maiLogo} alt="Measurable AI" />
      </div>
    </section>
  )
}

export default AnnualReportHero
