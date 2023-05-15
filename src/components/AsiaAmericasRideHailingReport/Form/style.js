import { css } from "@emotion/core"
import { mq } from "@/theme"

export const formSection = theme => css`
  width: 70%;
  margin: 8rem auto;
  box-sizing: border-box;
  color: #3c008c;

  * {
    box-sizing: border-box;
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
    color: #3c008c;
    margin-bottom: 2rem;
  }

  ${mq.tablet} {
    width: 100%;
    margin: 8rem 0;
    padding: 0 1.5rem;
  }
`

export const formWrapper = theme => css`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 4rem;
  background: #fff;
  border: 2px solid #3c008c;
  border-radius: 8px;

  p {
    line-height: 2;
  }

  input {
    border: 1px solid #ff3159;
    color: #221852;
  }
  input:active {
    box-shadow: 0 0 0 1px #ff3159;
  }
  input:hover {
    box-shadow: 0 0 0 1px #ff3159;
  }

  button {
    background-color: #ff3159;
    color: #fff;
  }
  button:disabled {
    opacity: 0.4;
  }
  button:hover {
    background-color: #3c008c;
    color: #ff3159;
  }

  ${mq.tablet} {
    margin: 0;
    width: 100%;
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
