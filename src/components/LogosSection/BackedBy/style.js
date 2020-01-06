import { css } from "@emotion/core"

export const imageContainer = css`
  display: flex;
  flex-wrap: wrap;
`

export const backedByImage = css`
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  min-width: 12.8rem;
  margin-bottom: 6.3rem;
`

export const inlineContainer = css`
  display: inline-block;
`

export const inlineContainer1 = css`
  margin-right: 4rem;
`

export const andMore = theme => css`
  margin: 0 auto;
  width: 12.8rem;
  height: fit-content;
  font-size: 1.2rem;
  letter-spacing: 0.35px;
  color: ${theme.colors.purples.light};
  text-align: center;
`
