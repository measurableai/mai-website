import { css, keyframes } from "@emotion/core"
import { mq } from "@/theme"

const fadeInSlideDown = keyframes`
  0% {
    top: -40%;
    opacity: 0;
  }
  100% {
    top: -20%;
    opacity: 0.4;
  }
`
const titleSvgFadeInSlideUp = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const BodyLayout = css`
  position: relative;
`

export const Header = theme => css`
  font-family: "Barlow";

  h1 {
    font-size: 5.2rem;
    color: #0a0a80;
    text-transform: uppercase;
    margin: 0;
    animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 400ms 1 both
      ${titleSvgFadeInSlideUp};
  }

  h2 {
    font-size: 5.2rem;
    color: #00d2c8;
    text-transform: uppercase;
    margin: 0;
    animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 600ms 1 both
      ${titleSvgFadeInSlideUp};
  }

  h3 {
    font-size: 2.4rem;
    font-style: italic;
    font-weight: 600;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    color: #6c6cb3;
    animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 800ms 1 both
      ${titleSvgFadeInSlideUp};
  }

  div {
    position: relative;
    > img {
      position: absolute;
      width: 160%;
      min-width: 600px;
      top: -20%;
      left: -20%;
      z-index: -1;
      opacity: 0.4;
      animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 900ms 1 both
        ${fadeInSlideDown};

      ${mq.tablet} {
        width: 120%;
        top: 0%;
        left: 0%;
      }
    }
  }
`

export const YearStyling = css`
  font-family: "Barlow Condensed";
  font-weight: 300;
  font-size: 200%;
  > span {
    -webkit-text-stroke: 2px #0a0a80;
    color: transparent;
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
  animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 1000ms 1 both
    ${titleSvgFadeInSlideUp};

  ${mq.tablet} {
    margin: 8rem auto;
    display: block;
  }
`
