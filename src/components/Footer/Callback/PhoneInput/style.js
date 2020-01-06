import { css } from "@emotion/core"

export const phoneInput = css`
  display: flex;
`

export const numberInput = theme => css`
  border-left-width: 0;

  &:hover {
    box-shadow: 0 0 0 1px ${theme.colors.greens.dark},
      -1px 0 0 1px ${theme.colors.greens.dark};
  }
`
