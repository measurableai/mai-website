import { css } from "@emotion/core"

export const container = css`
  margin-top: 13.1rem;
`
export const titleContainer = css`
  margin: 0 15.2rem;
`
export const fontStyle = theme => css`
  margin: 0;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.purples.normal};
  line-height: 1.2;
`
export const title = css`
  font-size: 9.6rem;
  letter-spacing: 2.06px;
  margin-top: 4.2rem;
`
export const subTitle = css`
  font-size: 13.2rem;
  margin-bottom: 4.2rem;
`
