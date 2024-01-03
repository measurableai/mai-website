import { css } from "@emotion/core"
import { mq } from "@/theme"
import sneakpeekGif from "@/images/annual-report/digital-economy-annual-report-2024/mai-annual-report-2024-maps-preview.png"

export const detailSection = theme => css`
  width: 70%;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  ${mq.tablet} {
    width: 100%;
  }

  h2 {
    width: 46ch;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0a0a80;
    margin: 12rem auto;
  }
  h2 span {
    color: #00d2c8;
  }
  ${mq.tablet} {
    h2 {
      width: unset;
      font-size: 2.1rem;
      padding: 0 2rem;
    }
  }

  h3 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    font-size: 3.6rem;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #0a0a80;
    margin-bottom: 2rem;
    positive: relative;
    z-index: 2;
  }
  ${mq.tablet} {
    h3 {
      font-size: 2.2rem;
    }
  }

  h3 span.triangle {
    color: #fff;
    position: relative;
    z-index: 4;
    mix-blend-mode: multiply;
  }
  h3 span.triangle::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 8rem solid #00d2c8;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    position: absolute;
    display: block;
    top: 70%;
    left: calc(50% - 0.1em);
    transform: translate(-50%, -50%);
    z-index: -10;
    mix-blend-mode: multiply;
  }
`

export const regionsWrapper = theme => css`
  margin: 8rem 0;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }
  > div > div {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 1.5rem;
  }
  > div > div > img {
    width: 2.1rem;
    height: 2.1rem;
  }
  > div > div > span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0a0a80;
    margin: 0 0 0 1rem;
  }
  > div > span {
    position: relative;
  }
  > div > span::after {
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
    div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      items-align: center;
    }

    > div > div > img {
      width: 1.8rem;
      height: 1.8rem;
    }
    > div > div > span {
      font-size: 1.8rem;
      margin: 0 0 0 0.5rem;
    }
    > div > span {
      font-size: 1.2rem;
    }
  }
`

export const metricsWrapper = theme => css`
  margin: 8rem 0;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }
  > div > div {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 1.5rem;
  }
  > div > div > img {
    width: auto;
    height: 3.5rem;
    margin-left: 1rem;
  }
  > div > div > span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0a0a80;
    margin: 0 0 0 1rem;
  }
  > div > span {
    position: relative;
  }
  > div > span::after {
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
    div div {
      width: 100%;
      padding: 0 2rem;
      font-size: 1.6rem;
      flex-direction: column-reverse;
      margin: 4rem 0;
    }
    div div span {
      word-wrap: break-word;
    }
    div div img {
      width: 4.5rem;
      height: 4.5rem;
      margin-left: 0;
      margin-bottom: 1rem;
    }
  }
`

export const industriesWrapper = theme => css`
  margin: 8rem 0;
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }
  > div > div {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem 1.5rem;
  }
  > div > div > img {
    width: auto;
    height: 3.5rem;
    margin-left: 1rem;
  }
  > div > div > span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #0a0a80;
    margin: 0 0 0 1rem;
  }
  > div > span {
    position: relative;
  }
  > div > span::after {
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
    div div {
      width: 100%;
      padding: 0 2rem;
      font-size: 1.6rem;
      flex-direction: column-reverse;
      margin: 4rem 0;
    }
    div div span {
      word-wrap: break-word;
    }
    div div img {
      width: 4.5rem;
      height: 4.5rem;
      margin-left: 0;
      margin-bottom: 1rem;
    }
  }
`

export const sneakpeekWrapper = theme => css`
  position: relative;
  margin: 12rem 0;

  div {
    width: 640px;
    aspect-ratio: 640 / 360;
    background: url(${sneakpeekGif});
    background-size: cover;
    display: block;
    margin: 0 auto;
    border: 2px solid #00f9d8;
    border-radius: 8px;
    position: relative;
    z-index: 2;
  }
  :before {
    content: "SNEAK";
    display: block;
    position: absolute;
    font-size: 18rem;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px #00d2c8;
    top: -30%;
    left: -5%;
    z-index: -1;
    user-select: none;
  }
  :after {
    content: "PEEK";
    display: block;
    position: absolute;
    font-size: 18rem;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1px #00d2c8;
    bottom: -20%;
    right: 0;
    z-index: -1;
    user-select: none;
  }
  ${mq.tablet} {
    div {
      width: 90%;
    }
    :before {
      font-size: 8rem;
      top: -26%;
      left: 0;
    }
    :after {
      font-size: 8rem;
      bottom: -23%;
    }
  }

  img {
    display: none;
  }
`
export const ctaMessage = () => css`
  & > h3 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    font-size: 6rem;
    line-height: 6.4rem;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: #0a0a80;
    margin-bottom: 0.5rem;
    & > br {
      display: none;
    }

    & .red {
      color: #ff3159;
    }

    & .uppercase {
      text-transform: uppercase;
    }
  }

  & > h4 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.4rem;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #0a0a80;
    margin: 0 0 2.8rem;
  }

  ${mq.tablet} {
    & > h3 {
      font-size: 3rem;
      line-height: 3.2rem;
      & > br {
        display: unset;
      }
    }

    & > h4 {
      font-size: 1.7rem;
      line-height: 3.1rem;
      margin: 0 0 0.5rem;
    }
  }
`
