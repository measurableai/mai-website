import { css } from "@emotion/core"

export const slideContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const textContainer = css`
  flex: 1;
  margin-top: 6rem;
  margin-right: 11rem;
  text-align: left;
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

export const chart = css`
  width: 48.5rem;
`

export const tag = css`
  display: inline-block;
  padding: 0.3rem 1.4rem;
  font-size: 2.2rem;
  letter-spacing: 0.79px;
`

export const title = theme => css`
  font-size: 3.8rem;
  font-weight: bold;
  color: ${theme.colors.purples.normal};
  margin-top: 1.5rem;
  margin-bottom: 1.9rem;
`

export const description = theme => css`
  font-size: 1.6rem;
  line-height: 1.31;
  color: ${theme.colors.purples.normal};
  margin: 0;
`
