import { css } from "@emotion/core"

export const button = theme => css`
  background-color: transparent;
  color: #ffffff;
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  letter-spacing: 2px;

  &:hover {
    color: ${theme.colors.greens.light};
  }
`
