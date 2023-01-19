import { css } from "@emotion/core"
import { mq } from "@/theme"

export const formSection = theme => css`
  width: 70%;
  margin: 8rem auto;

  h3 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #231155;
    margin-bottom: 2rem;
  }
`

export const formWrapper = theme => css`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 4rem;
  background: #fff;
  border: 1px solid #a75eff;
  border-radius: 8px;

  p {
    line-height: 2;
  }
`

export const checkboxLabel = theme => css`
  font-size: 1.6rem;
  display: grid;
  grid-template-columns: 1.6rem auto;
  gap: 0.8rem;
  margin: 2.4rem 0;
`

export const centeredText = theme => css`
  text-align: center;
`
