import { css } from "@emotion/core"
import { mq } from "@/theme"

export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 8.4rem;
  font-weight: 600;
  letter-spacing: 0.01px;
  color: ${theme.colors.purples.normal};

  ${mq.mobile} {
    font-size: 4.8rem;
  }
`

export const contentFontStyle = theme => css`
  margin: 0;
  color: ${theme.colors.purples.normal};
  font-size: 2rem;
  line-height: 3.6rem;

  ${mq.mobile} {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`

export const content1 = css`
  margin-top: 3.9rem;

  ${mq.mobile} {
    margin-top: 2.6rem;
  }
`
