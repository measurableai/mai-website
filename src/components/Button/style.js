import { css } from "@emotion/core"

export const button = theme => css`
  background-color: ${theme.colors.greens.light};
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.44px;
  text-align: center;
  padding: 1.1rem 2.9rem;
  transition: all 0.3s;

  &:not([disabled]) {
    color: ${theme.colors.purples.normal};
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover:not([disabled]) {
    background-color: ${theme.colors.purples.normal};
    color: ${theme.colors.greens.light};
  }
`
