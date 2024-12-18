import React from "react"
import { Header, FontWeight400, MarketSection, MarketListText } from "./style"

const ReportBody = () => {
  const markets = [
    "🇸🇦 Saudi Arabia",
    "🇦🇪 United Arab Emirates",
    "🇶🇦 Qatar",
    "🇹🇷 Türkiye",
    "🇪🇬 Egypt",
    "🇰🇼 Kuwait",
  ]

  return (
    <section css={Header}>
      <h2 css={FontWeight400}>Free Report</h2>
      <h1>
        2020-2024
        <br />
        MIDDLE EAST
        <br />
        ONLINE DELIVERY REPORT:
        <br />
        <span css={FontWeight400}>FOOD + GROCERY</span>
      </h1>

      <h3>Five Years Rising over the Golden Dune</h3>

      <div css={MarketSection}>
        <h4>
          Across <span>6</span> Markets
        </h4>
        <div css={MarketListText}>
          {markets.map(market => (
            <div>{market}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReportBody
