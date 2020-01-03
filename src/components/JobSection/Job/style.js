import { css } from "@emotion/core"

export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 2.9rem;
  letter-spacing: 0.5px;
  color: ${theme.colors.purples.normal};
`

export const header = theme => css`
  margin: 0;
  font-size: 1.6rem;
  color: ${theme.colors.greens.dark};
  margin-top: 4.7rem;
  margin-bottom: 3.4rem;
`

export const item = theme => css`
  margin: 0;
  font-size: 1.6rem;
  color: ${theme.colors.purples.normal};
  line-height: 3.2rem;
  margin-left: 1rem;
`
