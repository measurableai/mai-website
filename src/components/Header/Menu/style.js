import { css } from "@emotion/core"

export const menu = css`
  margin-top: 5.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const menuItem = css`
  width: auto;
  text-align: left;
  padding: 2rem 0;
  /* border-bottom: solid 1px white; */
`

export const annualReportMenuItem = theme => css`
  width: auto;
  text-align: left;
  padding: 2rem 0;
  /* border-bottom: solid 1px white; */

  & > .label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 1.8rem;
    line-height: 1;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    background: #0a0a80;
    color: #00f9d8;
    box-shadow: inset 0 0 0 2px #00f9d8;
    padding: 0.8rem 1.3rem;
    margin: 0 -1.3rem 0.2rem;
    display: block;
    width: max-content;
  }
`
