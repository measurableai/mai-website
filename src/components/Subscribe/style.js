import { css } from "@emotion/core"

export const fontStyle = theme => css`
  margin: 0;
  font-weight: 600;
  color: ${theme.colors.purples.normal};
  line-height: 1.2;
`
export const subscribeContainer = css`
  margin: 22.8rem 0 3.1rem 0;
`
export const subscribeTitle = css`
  font-size: 6rem;
  letter-spacing: 1.79px;
  text-align: left;
  margin-bottom: 3.1rem;
`
export const emailAddressContainer = css`
  text-align: left;
  width: 38rem;
  border-bottom: 1px solid #1f014f;
  margin-bottom: 8.61rem;
`
export const subscribe = theme => css`
  font-size: 7.2rem;
  font-family: ${theme.fonts.heading};
  letter-spacing: 2.14px;
`
export const emailInput = theme => css`
  border: none;
  font-size: 3.2rem;
  ::placeholder {
    color: ${theme.colors.greens.dark};
    opacity: 0.3;
  }
`

export const arrowButton = css`
  float: right;
`
