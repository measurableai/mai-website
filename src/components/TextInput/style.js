import { css } from "@emotion/core"

export const numberInput = theme => css`
  padding-left: 1.2rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  border: 1px solid ${theme.colors.greens.dark};
  color: ${theme.colors.purples.light};
  font-size: 1.8rem;
  min-width: 0;
  transition: all 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 0 0 1px ${theme.colors.greens.dark};
  }
`
