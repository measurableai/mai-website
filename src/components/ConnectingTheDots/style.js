import { css } from "@emotion/core"

export const container = css`
  margin: 0 auto;
  padding-top: 25.9rem;
  text-align: center;
  max-width: 73.8rem;
`
export const titleStyle = theme => css`
  margin: 0;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  line-height: 7.6rem;
`
export const title1 = theme => css`
  font-size: 6rem;
  color: ${theme.colors.white};
  letter-spacing: 2.7px;
`
export const title2 = theme => css`
  font-size: 6.2rem;
  color: ${theme.colors.greens.light};
  letter-spacing: 0.4rem;
  text-transform: uppercase;
`
export const subTitleStyle = theme => css`
  margin: 0;
  font-family: ${theme.fonts.body};
  line-height: 2.6rem;
`
export const subTitle1 = theme => css`
  color: ${theme.colors.white};
  font-size: 1.7rem;
  letter-spacing: 1.2px;
  letter-spacing: 3.98px;
`
export const subTitle2 = theme => css`
  color: ${theme.colors.greens.light};
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 3.99px;
  text-transform: uppercase;
`

export const titleContainer = css`
  margin-bottom: 2.2rem;
`
export const subTitleContainer = css`
  margin-bottom: 2.8rem;
`

export const button = css`
  width: 27.7rem;
  height: 5.6rem;
  font-size: 2.81rem;
  letter-spacing: -0.68px;
  padding: 1.5rem 1.9rem;
`
