import { css } from "@emotion/core"

export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 8.4rem;
  font-weight: 600;
  letter-spacing: 0.01px;
  color: ${theme.colors.purples.normal};
`

export const contentFontStyle = theme => css`
  margin: 0;
  color: ${theme.colors.purples.normal};
  font-size: 2rem;
  line-height: 3.6rem;
`

export const content1 = css`
  margin-top: 3.9rem;
`

export const content2 = css`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

export const emailMargin = css`
  margin-bottom: 5rem;
`

export const emailStyle = theme => css`
  margin: 0;
  color: ${theme.colors.greens.dark};
  font-size: 2.8rem;
`
export const button = theme => css`
  background: ${theme.colors.purples.normal};
  color: ${theme.colors.greens.light};
  padding: 1.1rem 2.6rem;
  font-size: 2.4rem;
  font-weight: bold;
`
