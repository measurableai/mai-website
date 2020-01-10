import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  position: relative;
  width: 18rem;
  height: 18rem;
  text-align: center;

  ${mq.mobile} {
    width: 13.5rem;
    height: 13.6rem;
  }
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

  ${mq.mobile} {
    font-size: 1.4rem;
    top: 9rem;
  }
`
