import { css } from "@emotion/core"
import { mq } from "@/theme"
import sneakpeekGif from "@/images/annual-report/sneakpeek.gif"

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
    color: #ff3159;
    margin: 12rem auto;
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
    color: #3c008c;
    margin-bottom: 2rem;
    positive: relative;
    z-index: 2;
  }
  ${mq.tablet} {
    h3 {
      font-size: 2.2rem;
    }
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
    background: #ff3159;
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
    color: #3c008c;
    margin: 0 0 0 1rem;
  }
  > div > span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 1.5;
    text-align: center;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: #ff3159;
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
  ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
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
    color: #3c008c;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: max-content;
    margin: 1rem auto;
    padding: 0;
    box-sizing: border-box;
  }
  li img {
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
  }

  ${mq.tablet} {
    li {
      width: 100%;
      padding: 0 2rem;
      font-size: 1.6rem;
      flex-direction: column-reverse;
      margin: 4rem 0;
    }
    li span {
      word-wrap: break-word;
    }
    li img {
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
    border: 2px solid #ff3159;
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
    -webkit-text-stroke: 1px #3c008c;
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
    -webkit-text-stroke: 1px #3c008c;
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
      top: -15%;
      left: 0;
    }
    :after {
      font-size: 8rem;
      bottom: -10%;
    }
  }

  img {
    display: none;
  }
`
