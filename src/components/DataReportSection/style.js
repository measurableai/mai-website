import { css } from "@emotion/core"
import { mq } from "@/theme"

export const section = css`
  margin-top: 22.5rem;
  margin-bottom: 12rem;

  ${mq.mobile} {
    margin-top: 7.7rem;
    margin-bottom: 2.8rem;
  }
`

export const header = css`
  margin-bottom: -2rem;

  ${mq.mobile} {
    margin-bottom: 2.8rem;
  }
`

export const heading = theme => css`
  font-family: ${theme.fonts.heading};
  font-size: 7.2rem;
  font-weight: 600;
  line-height: 0.75;
  letter-spacing: 2.6px;
  color: ${theme.colors.purples.normal};
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 1.9rem;

  ${mq.mobile} {
    font-size: 5.4rem;
    letter-spacing: 1.95px;
    margin-bottom: 0.8rem;
  }
`
