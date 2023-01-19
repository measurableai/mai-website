import { css } from "@emotion/core"
import { mq } from "@/theme"
import sneakpeekGif from "@/images/annual-report/sneakpeek.gif"

export const detailSection = theme => css`
  width: 70%;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  ${mq.tablet} {
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
    color: #00de58;
    margin: 12rem auto;
  }
  h2 span {
    background: #231155;
    padding: 0.4rem 1rem;
    background-blend-mode: multiply;
  }

  h3 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #a75eff;
    margin-bottom: 2rem;
    positive: relative;
    z-index: 2;
  }

  h3 span {
    color: #fff;
    position: relative;
    z-index: 4;
    mix-blend-mode: multiply;
  }
  h3 span::after {
    content: "";
    width: 8rem;
    height: 8rem;
    border-radius: 10000px;
    background: #00de58;
    position: absolute;
    display: block;
    top: 50%;
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
    items-align: center;
  }
  > div span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #231155;
    margin: 0 0 0 1.5rem;
  }
  > div span:nth-child(2n) {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #00de58;
  }
`

export const metricsWrapper = theme => css`
  margin: 8rem 0;
  ul {
    list-style-type: none;
  }
  li {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #231155;
    display: flex;
    align-items: center;
    width: max-content;
    margin: 1rem auto;
  }
  li img {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
  }
`

export const sneakpeekWrapper = theme => css`
  position: relative;
  margin: 12rem 0;

  div {
    width: 640px;
    aspect-ratio: 640 / 360;
    background: url(${sneakpeekGif});
    display: block;
    margin: 0 auto;
    border: 1px solid #a75eff;
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
    color: #00de58;
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
    color: #00de58;
    bottom: -20%;
    right: 0;
    z-index: -1;
    user-select: none;
  }
`
