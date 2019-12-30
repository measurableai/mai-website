import { css } from "@emotion/core"

export const container = css`
  position: relative;
  height: 18rem;
  width: 18rem;
  text-align: center;
`
export const image = css`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
export const title = theme => css`
  margin: 0 auto;
  color: ${theme.colors.white};
  font-size: 1.6rem;
  letter-spacing: 0.8px;
  position: relative;
  top: 11.8rem;
  max-width: 10rem;
`
