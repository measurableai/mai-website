import { css } from "@emotion/core"
import { mq } from "@/theme"

export const formSection = theme => css`
  --primary-color: #0a0a80;

  position: relative;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  color: var(--primary-color);
  font-family: "Barlow";

  * {
    box-sizing: border-box;
  }

  ${mq.tablet} {
    width: 100%;
    margin: 0 0 8rem;
    padding: 0 1.5rem;
  }
`

export const formWrapper = theme => css`
  width: 100%;
  height: max-content;
  overflow-y: auto;
  margin: 0 auto;
  padding: 2.4rem;
  background: #fff;
  border: 2px solid var(--primary-color);
  border-radius: 8px;

  label {
    color: #0a0a80;
    transition: all 0.3s;
  }
  label:has(~ input:focus) {
    color: #5900ff;
  }
  input {
    color: #0a0a80;
    background: #f4f2f6;
    font-weight: 500;
    border-radius: 4px 4px 0 0;
    border: none;
  }

  input:active,
  input:hover {
    background: #f2ebff;
    box-shadow: none;
  }

  input:focus {
    color: #5900ff;
    -webkit-box-shadow: inset 0px -2px 0px 0px #5900ff;
    -moz-box-shadow: inset 0px -2px 0px 0px #5900ff;
    box-shadow: inset 0px -2px 0px 0px #5900ff;
  }

  input[type="checkbox"] {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  button {
    display: block;
    width: 100%;
    background-color: #5900ff;
    color: #fff !important;
    border-radius: 4px;
  }
  button:hover {
    background-color: #c822ff !important;
    color: #fff;
  }
  button:disabled,
  button:disabled:hover {
    background-color: #0a0a80 !important;
    opacity: 0.4;
  }

  ${mq.tablet} {
    margin: 0;
    width: 100%;
  }
`

export const formIntro = css`
  margin-bottom: 2.4rem;

  h3 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 1;
    letter-spacing: 0.05ch;
    color: var(--primary-color);
    margin-top: 0;
  }

  p {
    color: #444;
    font-weight: normal;
    line-height: 1.4;
    letter-spacing: 0.06ch;
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
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 500;
  color: #5900ff;
`

export const errorText = theme => css`
  text-align: center;
  color: #fff;
  background-color: #ff3159;
  padding: 0.4rem 0.6rem;
  margin: 0.8rem 0 0;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: 400;
`

export const consent = css`
  appearance: reset;
  font-size: 1.2rem;
  color: #a1a1a1;
  line-height: 1.5;
  letter-spacing: 0;
  margin-bottom: 0;
`
