import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  margin: 0 auto;
  margin-top: 26.1rem;
  padding-left: 13.3rem;
  padding-right: 13.3rem;
  text-align: center;

  ${mq.tablet} {
    margin-top: 11.1rem;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 3.7rem;
    text-align: left;
  }
`
export const titleStyle = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  line-height: 9.33rem;

  ${mq.tablet} {
    line-height: 6.4rem;
  }
`
export const title1 = theme => css`
  font-size: 8rem;
  color: ${theme.colors.white};
  letter-spacing: 0.33rem;
  font-weight: 500;

  ${mq.tablet} {
    font-size: 4.8rem;
    letter-spacing: 0.1rem;
    line-height: 4.73rem;
  }
`
export const title2 = theme => css`
  font-size: inherit;
  font-weight: 600;
  color: ${theme.colors.greens.light};
  letter-spacing: 0.4rem;
  text-transform: uppercase;

  ${mq.tablet} {
    font-size: 6.4rem;
    letter-spacing: 0.31rem;
  }
`
export const subTitleStyle = css`
  margin: 0;
  line-height: 3.2rem;
  letter-spacing: 0.3rem;

  ${mq.tablet} {
    line-height: 2.4rem;
  }
`
export const subTitle1 = theme => css`
  color: ${theme.colors.white};
  font-size: 1.7rem;
  font-weight: 400;

  ${mq.tablet} {
    font-size: 1.7rem;
    letter-spacing: 0.4rem;
  }
`
export const subTitle2 = theme => css`
  color: ${theme.colors.greens.light};
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;

  ${mq.tablet} {
    font-size: 1.9rem;
    line-height: 2.8rem;
  }
`

export const titleContainer = css`
  margin-bottom: 3rem;

  ${mq.tablet} {
    margin-bottom: 2.6rem;
  }
`
export const subTitleContainer = css`
  margin-bottom: 3rem;

  ${mq.tablet} {
    margin-bottom: 2.6rem;
  }
`

export const button = css`
  font-size: 3rem;
  padding: 1.5rem 6rem;

  ${mq.tablet} {
    height: auto;
    width: auto;
    padding: 1.1rem 3rem;
    font-size: 1.86rem;
  }
`

export const wordBreak = css`
  display: block;

  ${mq.tablet} {
    display: inline;
  }
`
