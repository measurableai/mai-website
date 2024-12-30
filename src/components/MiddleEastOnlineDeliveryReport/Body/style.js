import { css } from "@emotion/core"
import { mq } from "@/theme"

export const BodyLayout = css`
  position: relative;
`

export const Header = theme => css`
  font-family: "Barlow";

  h1 {
    font-size: 5.2rem;
    color: #0a0a80;
    span {
      color: #00d2c8;
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
    color: #0a0a80;
    span {
      color: #00d2c8;
    }
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
    color: #0a0a80;
  }
  h4 span {
    position: relative;
    color: #fff;
  }
  h4 span::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 6rem solid #00d2c8;
    border-left: 4rem solid transparent;
    border-right: 4rem solid transparent;
    display: block;
    position: absolute;
    top: 62%;
    left: 45%;
    transform: translate(-50%, -50%);
    z-index: -10;
    mix-blend-mode: multiply;
  }
  > div {
    margin: 4rem 0;
  }

  ${mq.tablet} {
    h4 {
      text-align: center;
    }
    > div {
      margin: 6rem 0;
      :last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

export const MarketListItem = css`
  font-size: 2.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #0a0a80;
  div {
    display: flex;
    margin: 1.6rem 0;
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
    span {
      display: block;
      margin-left: 0.8rem;
    }
  }
  > span {
    position: relative;
    margin: 1.2rem;
  }
  > span::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 0.5rem solid #00d2c8;
    border-left: 0.3rem solid transparent;
    border-right: 0.3rem solid transparent;
    position: absolute;
    display: block;
    top: 70%;
    left: calc(50% - 0.1em);
    transform: translate(-50%, -50%);
    z-index: -10;
    mix-blend-mode: multiply;
  }

  ${mq.tablet} {
    justify-content: center;
  }
`

export const MetricListItem = css`
  font-size: 2.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
  line-height: 3rem;
  color: #0a0a80;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.6rem 0;

    span {
      margin-left: 1.6rem;
    }
  }

  ${mq.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
      margin: 0.8rem auto;
    }
  }
`

export const ReportScreenshot = css`
  --width: 80%;
  position: relative;
  margin: 8rem 0;
  width: var(--width);
  border: 2px solid #0a0a80;
  border-radius: 0.8rem;

  ${mq.tablet} {
    margin: 8rem auto;
    display: block;
  }
`
