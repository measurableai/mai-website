import { css } from "@emotion/core"
import { mq } from "@/theme"
import backgroundImage from "@/images/annual-report/east-southern-asia.png"

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

  ::after {
    content: "";
    display: block;
    width: 80vw;
    padding-top: calc(70vw * 0.9232);
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
  width: 60%;
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

export const title = theme => css`
  margin-top: -4.5rem;
  margin-bottom: 2.4rem;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 800;
  font-size: 6.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  white-space: nowrap;
  color: #3c008c;

  ${mq.tablet} {
    font-size: 4.6rem;
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
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #200050;
  display: flex;
  align-items: center;
  justify-content: right;
`

export const logo = theme => css`
  width: 50%;
`
