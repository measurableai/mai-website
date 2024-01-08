import { css } from "@emotion/core"

export const button = theme => css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.4rem;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  text-decoration: none;

  display: block;
  padding: 1.3rem;
  margin: 0.2rem -1.3rem;

  color: #0a0a80;
  background: #00f9d8;

  transition: all 0.4s ease;

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
    vertical-align: top;
  }
`
