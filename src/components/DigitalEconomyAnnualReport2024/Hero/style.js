import { css, keyframes } from "@emotion/core"
import { mq } from "@/theme"
import backgroundImage from "@/images/annual-report/digital-economy-annual-report-2024/hero-background.png"

const fadeInSlideDown = keyframes`
  0% {
    top: -40%;
    opacity: 0;
  }
  100% {
    top: -30%;
    opacity: 1;
  }
`
const titleSvgFadeInSlideUp = keyframes`
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const maiLogoFadeInSlideUp = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const hero = theme => css`
  margin: 0 auto;
  width: 100rem;
  font-weight: 800;
  font-size: 6.4rem;
  position: relative;
  z-index: 1;

  ${mq.tablet} {
    width: 100%;
  }

  ::before {
    content: "";
    display: block;
    width: 100vw;
    height: 58vw;
    background-image: linear-gradient(
      235deg,
      rgba(0, 249, 216, 0) 58.18%,
      rgba(0, 249, 216, 0.24) 119.35%
    );
    clip-path: polygon(0% 0%, 0% 100%, 100% 32.5%, 100% 0%);
    position: absolute;
    z-index: -2;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  ${mq.tablet} {
    ::before {
      width: 100vw;
      height: 140vw;
      background-image: linear-gradient(
        235deg,
        rgba(0, 249, 216, 0) 58.18%,
        rgba(0, 249, 216, 0.24) 119.35%
      );
      clip-path: polygon(0% 0%, 0% 100%, 100% 71.51%, 100% 0%);
    }
  }

  ::after {
    content: "";
    display: block;
    width: 100vw;
    padding-top: 102.71vw;
    background-image: url(${backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    mix-blend-mode: multiply;
    animation: 800ms cubic-bezier(0.29, 0.88, 0.5, 1) 1200ms 1 both
      ${fadeInSlideDown};
  }

  ${mq.tablet} {
    ::after {
      width: 163vw;
      padding-top: calc(163vw * 1.0271);
      top: -10%;
      left: 40%;
    }
  }
`

export const svg = theme => css`
  width: min(45vw, 55.8rem);
  aspect-ratio: 558 / 204;

  ${mq.tablet} {
    width: 100%;
  }

  circle {
    mix-blend-mode: multiply;
  }

  g {
    mix-blend-mode: multiply;
  }
`

export const titleSvgDesktop = theme => css`
  width: 100%;
  animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 1500ms 1 both
    ${titleSvgFadeInSlideUp};

  ${mq.tablet} {
    display: none;
  }
`

export const titleSvgMobile = theme => css`
  display: none;

  ${mq.tablet} {
    display: inline;
    width: 100%;
    animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 1500ms 1 both
      ${titleSvgFadeInSlideUp};
  }
`

export const contentWrap = () => css`
  position: relative;

  ${mq.tablet} {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    padding: 0 1.8rem;

    > img {
      margin-bottom: 2.4rem;
    }
  }
`

export const logoWrapper = theme => css`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 800;
  font-size: 3.2rem;
  line-height: 100%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #200050;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: -4.8rem;
  animation: 1000ms cubic-bezier(0.29, 0.88, 0.5, 1) 2000ms 1 both
    ${maiLogoFadeInSlideUp};

  ${mq.tablet} {
    font-size: 1.8rem;
    align-items: baseline;
    margin-bottom: 0;
  }
`

export const logo = theme => css`
  width: min(30vw, 40rem);

  ${mq.tablet} {
    width: 50vw;
  }
`
