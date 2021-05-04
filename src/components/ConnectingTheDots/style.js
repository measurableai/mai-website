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
  line-height: 7.6rem;

  ${mq.tablet} {
    line-height: 1;
  }
`
export const title1 = theme => css`
  font-size: 6rem;
  color: ${theme.colors.white};
  letter-spacing: 0.27rem;

  ${mq.tablet} {
    font-size: 3.6rem;
    letter-spacing: 0.1rem;
  }
`
export const title2 = theme => css`
  font-size: 6.2rem;
  font-weight: 500;
  color: ${theme.colors.greens.light};
  letter-spacing: 0.4rem;
  text-transform: uppercase;

  ${mq.tablet} {
    font-size: 4.8rem;
    letter-spacing: 0.31rem;
  }
`
export const subTitleStyle = css`
  margin: 0;
  line-height: 2.6rem;

  ${mq.tablet} {
    line-height: 1.38;
  }
`
export const subTitle1 = theme => css`
  color: ${theme.colors.white};
  font-size: 1.7rem;
  letter-spacing: 0.398rem;

  ${mq.tablet} {
    font-size: 1.3rem;
    letter-spacing: 0.228rem;
  }
`
export const subTitle2 = theme => css`
  color: ${theme.colors.greens.light};
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 3.99px;
  text-transform: uppercase;

  ${mq.tablet} {
    font-size: 1.4rem;
    letter-spacing: 0.235rem;
  }
`

export const titleContainer = css`
  margin-bottom: 2.2rem;

  ${mq.tablet} {
    margin-bottom: 2.6rem;
  }
`
export const subTitleContainer = css`
  margin-bottom: 2.8rem;

  ${mq.tablet} {
    margin-bottom: 2rem;
  }
`

export const button = css`
  font-size: 2.81rem;
  padding: 1.5rem 6rem;

  ${mq.tablet} {
    height: auto;
    width: auto;
    padding: 1.1rem 1.3rem;
    font-size: 1.86rem;
  }
`

export const wordBreak = css`
  ${mq.tablet} {
    display: block;
  }
`
