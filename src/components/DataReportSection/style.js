import { css } from "@emotion/core"

export const section = css`
  margin-top: 22.5rem;
  margin-bottom: 12rem;
`

export const header = css`
  margin-bottom: -2rem;
`

export const heading = theme => css`
  font-family: ${theme.fonts.heading};
  font-size: 7.2rem;
  font-weight: 600;
  line-height: 0.75;
  letter-spacing: 2.6px;
  color: ${theme.colors.purples.normal};
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 1.9rem;
`
