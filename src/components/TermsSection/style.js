import { css } from "@emotion/core"
import { mq } from "@/theme"

export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 8.4rem;
  font-weight: 500;
  letter-spacing: 0.01px;
  color: ${theme.colors.purples.normal};

  ${mq.mobile} {
    font-size: 4.8rem;
  }
`

export const contentFontStyle = theme => css`
  margin: 0;
  color: ${theme.colors.purples.normal};
`

export const content = css`
  font-size: 1.6rem;
  line-height: 3.2rem;

  ${mq.mobile} {
    font-size: 1.3rem;
  }
`

export const item = css`
  margin-left: 1rem;
`
