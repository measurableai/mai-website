import { css } from "@emotion/core"

export const layoutContainer = theme => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem;
`

export const logosLayout = theme => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 10%;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`
