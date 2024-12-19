import { css } from "@emotion/core"

export const BodyLayout = css`
  position: relative;
`

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

export const CoverageSection = css`
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
  > div {
    margin: 4rem 0;
  }
`

export const MarketListItem = css`
  font-size: 2.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 3rem;
`

export const MetricListItem = css`
  font-size: 2.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 3rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.6rem 0;

    span {
      margin-left: 1.6rem;
    }
  }
`

export const ReportScreenshot = css`
  --width: 80%;
  position: relative;
  margin: 8rem 0;
  width: var(--width);
  height: 0;
  padding-top: calc(var(--width) * 0.5625);
  border: 2px solid #0a0a80;
  border-radius: 0.8rem;
  background: rgb(244, 242, 246);
  background: linear-gradient(
    180deg,
    rgba(244, 242, 246, 1) 0%,
    rgba(230, 222, 238, 1) 100%
  );
`
