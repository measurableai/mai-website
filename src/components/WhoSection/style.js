import { css } from "@emotion/core"

export const container = () => css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  z-index: 1;
  margin: 4rem 0 0 0;
`
export const titleContainer = () => css`
  text-align: right;
  width: 100%;
  margin-bottom: 1.5rem;
`
export const titleStyle = theme => css`
  margin: 0;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
`
export const title = theme => css`
  margin: 0;
  font-size: 11.6rem;
  color: ${theme.colors.greens.light};
  letter-spacing: 4px;
  line-height: 0.8;
  text-transform: uppercase;
`
export const subTitle = theme => css`
  margin: 0;
  font-size: 4.6rem;
  color: ${theme.colors.white};
  letter-spacing: 1.2px;
`
export const questionMark = theme => css`
  color: ${theme.colors.greens.light};
`
export const imageContainer = () => css`
  display: flex;
  flex-direction: row-reverse;
`
export const image = css`
  height: 18rem;
  width: 18rem;
  margin-right: 3rem;
  position: relative;
`
export const image1 = css``
export const image2 = css`
  top: 5.8rem;
`
export const image3 = css`
  top: 11.5rem;
`
export const image4 = css`
  top: 17.3rem;
`
export const empty = () => css`
  max-width: 16rem;
  flex-grow: 1;
`
