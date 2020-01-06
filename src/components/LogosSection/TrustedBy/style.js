import { css } from "@emotion/core"

export const trustedByImage = css`
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  min-width: 13.2rem;
  margin-bottom: 6.3rem;
`

export const andMore = theme => css`
  margin: 0 auto;
  width: 17.3rem;
  height: fit-content;
  font-size: 1.2rem;
  letter-spacing: 0.35px;
  color: ${theme.colors.purples.light};
  text-align: center;
`
