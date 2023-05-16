import { css } from "@emotion/core"
import { mq } from "@/theme"
import backgroundImage from "@/images/annual-report/asia-americas-ride-hailing/hero-background.png"

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
      235.15deg,
      rgba(255, 49, 89, 0) 58.18%,
      rgba(255, 49, 89, 0.21) 119.35%
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
        235.15deg,
        rgba(255, 49, 89, 0) 58.18%,
        rgba(255, 49, 89, 0.21) 119.35%
      );
      clip-path: polygon(0% 0%, 0% 100%, 100% 71.51%, 100% 0%);
    }
  }

  ::after {
    content: "";
    display: block;
    width: 100vw;
    padding-top: calc(100vw * 0.5658);
    background-image: url(${backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
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

export const contentWrap = () => css`
  ${mq.tablet} {
    padding: 0 1.8rem;
  }
`

export const title = theme => css`
  margin-top: -2.7rem;
  margin-bottom: 2.4rem;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 800;
  font-size: calc(min(80vw, 100rem) / 19);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  white-space: nowrap;
  color: #3c008c;

  ${mq.tablet} {
    font-size: calc(100vw / 12);
    white-space: normal;
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 2px #3c008c;
  }

  .red-text {
    color: #ff3159;
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
  justify-content: right;
`

export const logo = theme => css`
  width: min(30vw, 40rem);

  ${mq.tablet} {
    width: 50vw;
  }
`
