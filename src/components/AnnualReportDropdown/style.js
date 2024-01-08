import { css } from "@emotion/core"

export const dropdown = () => css`
  position: relative;

  & > button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 13px;
    background: #0a0a80;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #00f9d8;
    box-shadow: inset 0 0 0 2px #00f9d8;
    text-transform: uppercase;
    padding: 0.8rem 1.2rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    display: inline-block;
    transition: all 200ms ease;
  }

  & > button:hover,
  &:hover > button {
    box-shadow: inset 0 0 0 100px #00f9d8;
    color: #0a0a80;
    background-position: 0px;
  }

  & > button + div {
    background: #0a0a80;
    width: max-content;
    position: absolute;
    top: 100%;
    left: 0;

    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 200ms ease-in-out;

    & > div {
      overflow: hidden;
    }
  }

  & > button:hover + div,
  & > button + div:hover {
    grid-template-rows: 1fr;
  }
`

export const listItem = () => css`
  display: block;
  background: #00f9d8;
  color: #0a0a80;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.4rem;
  padding: 1.3rem;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  text-decoration: none;
  transition: background 100ms ease-in-out, color 100ms ease-in-out;

  &:hover {
    background: #0a0a80;
    color: #00f9d8;
  }

  & > span {
    background: #ff3159;
    color: #fff;
    padding: 0.1rem 0.4rem;
    border-radius: 1000px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }
`
