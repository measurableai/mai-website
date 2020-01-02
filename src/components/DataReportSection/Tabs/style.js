import { css } from "@emotion/core"

export const tabsContainer = css`
  text-align: left;
`

export const character = (theme, isActive) => css`
  font-family: ${theme.fonts.heading};
  font-size: 4.8rem;
  letter-spacing: 2.33px;
  color: ${isActive ? theme.colors.greens.dark : theme.colors.purples.normal};
  margin: 0 0.15rem;
`

export const number = css`
  display: inline-block;
  cursor: pointer;
`

export const underline = theme => css`
  background-color: ${theme.colors.greens.dark};
  width: 100%;
  height: 0.2rem;
`
