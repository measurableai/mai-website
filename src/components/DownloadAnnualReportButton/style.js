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

  color: #fe8199;
  background: #3c008c;

  transition: all 0.4s ease;

  &:hover {
    background: #ff3159;
    color: #3c008c;
  }
`
