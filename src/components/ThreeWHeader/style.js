import { css } from "@emotion/core"

export const titleStyle = theme => css`
  margin: 0;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
`
export const title = theme => css`
  font-size: 11.6rem;
  color: ${theme.colors.greens.light};
  letter-spacing: 0.4rem;
  line-height: 0.8;
  text-transform: uppercase;
`
export const subTitle = theme => css`
  font-size: 4.6rem;
  color: ${theme.colors.white};
  letter-spacing: 1.2px;
`
