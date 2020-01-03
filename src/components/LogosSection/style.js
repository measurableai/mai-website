import { css } from "@emotion/core"

export const container = css`
  display: flex;
  position: relative;
  z-index: 1;
  padding: 4rem 1.2rem;
`
export const inlineContainer = css`
  display: inline-block;
  position: relative;
`

export const achievementsContainer = css`
  margin-right: 9.9rem;
`
export const backedByContainer = css`
  top: 6.6rem;
  margin-right: 9.9rem;
`
export const trustedByContainer = css`
  top: 13.1rem;
`

export const title = theme => css`
  margin: 0;
  margin-bottom: 3.3rem;
  font-size: 2.8rem;
  letter-spacing: 0.6px;
  color: ${theme.colors.purples.light};
`
