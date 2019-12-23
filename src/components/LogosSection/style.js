import { css } from "@emotion/core"

export const container = css`
  position: relative;
  z-index: 1;
  padding: 4rem 1.2rem;
`
export const inlineContainer = css`
  display: inline-block;
  position: relative;
`

export const achievementsContainer = css`
  height: 46.3rem;
  width: 28.5rem;
  margin-right: 9.9rem;
`
export const backedByContainer = css`
  top: 6.6rem;
  height: 39.7rem;
  width: 30.5rem;
  margin-right: 9.9rem;
`
export const trustedByContainer = css`
  top: 13.1rem;
  height: 33.2rem;
  width: 17.3rem;
`

export const imageContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-between;
  height: 100%;
`

export const achievementsImage = css`
  width: fit-content;
  height: fit-content;
  min-width: 11.5rem;
  max-height: 6.8rem;
`
export const backedByImage = css`
  width: 100%;
  max-width: 13rem;
`
export const trustedByImage = css`
  width: 100%;
  max-width: 13rem;
  max-height: 3.6rem;
`

export const imageContainer1 = css``
export const imageContainer2 = css``
export const imageContainer3 = css`
  justify-content: center;
`

export const title = theme => css`
  margin: 0 0 3.3rem 0;
  font-size: 2.8rem;
  letter-spacing: 0.6px;
  color: ${theme.colors.purples.light};
`
export const andMoreContainer1 = css`
  width: 12.2rem;
`
export const andMoreContainer2 = css`
  width: 13.4rem;
`
export const andMoreContainer3 = css`
  width: 17.3rem;
`
export const andMore = theme => css`
  margin: 0 auto;
  font-size: 1.2rem;
  letter-spacing: 0.35px;
  color: ${theme.colors.purples.light};
  text-align: center;
`
