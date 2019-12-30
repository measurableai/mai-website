import { css } from "@emotion/core"

export const container = css`
  max-width: 20.4rem;
`
export const dotLineInvert = invert => css`
  padding-left: ${invert ? "0" : "0.73rem"};
`
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
export const dotLineStyle = theme => css`
  margin: 0;
  color: ${theme.colors.white};
  line-height: 1.5rem;
  letter-spacing: 1.12px;
`
export const dotLineTitle = css`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.12px;
  line-height: 2.6rem;
`
export const dotLineSubTitle = css`
  font-size: 1.2rem;
  text-transform: none;
  letter-spacing: 1.14px;
  line-height: 2.4rem;
`
export const dotLineContentTitle = css`
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 2.3rem;
`
export const dotLineContent = css`
  font-size: 1.6rem;
  letter-spacing: 0.8px;
  margin-bottom: 1rem;
`
export const dotLineMore = css`
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 3rem;
  letter-spacing: 0.6px;
`
