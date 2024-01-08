import { css } from "@emotion/core"
import { mq } from "@/theme"

export const formSection = theme => css`
  width: 70%;
  margin: 8rem auto;
  box-sizing: border-box;
  color: #0a0a80;

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
    color: #0a0a80;
    margin-top: 10.8rem;
    margin-bottom: 2rem;
  }

  ${mq.tablet} {
    width: 100%;
    margin: 8rem 0;
    padding: 0 1.5rem;

    h3 {
      margin-top: 8rem;
      margin-bottom: 3.5rem;
    }
  }
`

export const signUpIntroContent = theme => css`
  h2 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 2.4px;
    color: #0a0a80;
    margin-bottom: 2rem;
  }

  .cyan-text {
    color: #00d2c8;
  }

  .uppercase {
    text-transform: uppercase;
  }

  p {
    color: #0a0a80;
    text-align: center;
    font-family: Barlow;
    font-size: 2.1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.42px;
  }

  ${mq.tablet} {
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`

export const formWrapper = theme => css`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 4rem;
  background: #fff;
  border: 2px solid #0a0a80;
  border-radius: 8px;

  p {
    line-height: 2;
  }

  input {
    border: 1px solid #00d2c8;
    color: #221852;
  }
  input:active {
    box-shadow: 0 0 0 1px #00d2c8;
  }
  input:hover {
    box-shadow: 0 0 0 1px #00d2c8;
  }

  button {
    background-color: #00f9d8;
    color: #fff;
  }
  button:disabled {
    opacity: 0.4;
  }
  button:hover {
    background-color: #0a0a80;
    color: #00f9d8;
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

export const errorText = theme => css`
  text-align: center;
  color: #fff;
  background-color: #ff3159;
`
