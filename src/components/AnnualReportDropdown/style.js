import { css } from "@emotion/core"

export const dropdown = () => css`
  position: relative;

  & > button {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 13px;
    background: #3c008c;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #fe8199;
    box-shadow: inset 0 0 0 2px #ff3159;
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
    box-shadow: inset 0 0 0 100px #ff3159;
    color: #200050;
    background-position: 0px;
  }

  & > button + div {
    background: #3c008c;
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
  background: #3c008c;
  color: #fe8199;
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
    background: #ff3159;
    color: #3c008c;
  }
`
