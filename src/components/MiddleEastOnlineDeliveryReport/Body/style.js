import { css } from "@emotion/core"

export const Header = theme => css`
  font-family: "Barlow";

  h1 {
    font-size: 5.2rem;
    color: #0a0a80;
    span {
      color: #39d965;
    }
  }

  h2 {
    font-size: 3.2rem;
    color: rgba(0, 0, 0, 0.5);
  }

  h3 {
    font-size: 2.4rem;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
  }
`

export const FontWeight400 = css`
  font-weight: 400;
`

export const MarketSection = css`
  margin: 8rem 0;
  h4 {
    font-size: 3.6rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1ch;
    margin: 2.4rem 0;
  }
  h4 span {
    position: relative;
  }
  h4 span::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #eee;
    width: 8rem;
    height: 8rem;
    transform: translate(-50%, -50%);
    border-radius: 1000px;
    z-index: -10;
  }
`

export const MarketListText = css`
  font-size: 2.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 3rem;
`
