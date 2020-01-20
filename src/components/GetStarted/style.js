import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  margin-top: 13.1rem;
  margin-bottom: 3.2rem;

  ${mq.mobile} {
    margin-top: 9rem;
  }
`
export const titleContainer = css`
  margin-top: 1rem;
  margin-bottom: 3rem;

  ${mq.mobile} {
    margin-top: 2.4rem;
    margin-bottom: 3.4rem;
  }
`

export const arrowContainer = css`
  margin: 1rem 0;
`

export const fontStyle = (theme, isHover) => css`
  margin: 0;
  font-weight: 500;
  font-family: ${theme.fonts.heading};
  color: ${isHover ? theme.colors.greens.light : theme.colors.purples.normal};
  line-height: 13.5rem;

  ${mq.mobile} {
    line-height: 1;
  }
`
export const title = css`
  font-size: 9.6rem;
  letter-spacing: 2.06px;

  ${mq.mobile} {
    font-size: 7.2rem;
  }
`
export const subTitle = css`
  font-size: 13.2rem;
  letter-spacing: 1px;

  ${mq.mobile} {
    font-size: 8.4rem;
  }
`
