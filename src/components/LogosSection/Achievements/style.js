import { css } from "@emotion/core"

export const container = css`
  position: relative;
  z-index: 1;
  padding: 4rem 1.2rem;
`

export const imageContainer = css`
  display: flex;
  flex-wrap: wrap;
`

export const achievementsImage = css`
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  min-width: 11.5rem;
  margin-bottom: 6.3rem;
`

export const lastImage = css`
  margin-bottom: 0;
`

export const inlineContainer = css`
  display: inline-block;
`

export const inlineContainer1 = css`
  margin-right: 4rem;
`

export const andMore = theme => css`
  margin: 0 auto;
  width: 13rem;
  height: fit-content;
  font-size: 1.2rem;
  letter-spacing: 0.35px;
  color: ${theme.colors.purples.light};
  text-align: center;
`
