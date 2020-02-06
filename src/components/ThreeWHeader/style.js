import { css } from "@emotion/core"
import { mq } from "@/theme"

export const titleStyle = theme => css`
  margin: 0;
  font-weight: 500;
  font-family: ${theme.fonts.heading};
`
export const title = theme => css`
  font-size: 11.6rem;
  color: ${theme.colors.greens.light};
  letter-spacing: 4px;
  line-height: 0.8;
  text-transform: uppercase;

  ${mq.tablet} {
    font-size: 8.7rem;
    letter-spacing: 3px;
  }
`
export const subTitle = theme => css`
  font-size: 4.6rem;
  color: ${theme.colors.white};
  letter-spacing: 1.2px;

  ${mq.tablet} {
    font-size: 3.45rem;
    letter-spacing: 0.9px;
  }
`
export const questionMarkStyle = theme => css`
  color: ${theme.colors.greens.light};
`
