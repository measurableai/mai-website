import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  margin-bottom: 30.6rem;

  ${mq.tablet} {
    margin-bottom: 12rem;
  }
`
export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 2.9rem;
  letter-spacing: 0.5px;
  color: ${theme.colors.purples.normal};

  ${mq.tablet} {
    font-size: 2.1rem;
  }
`

export const header = theme => css`
  margin: 0;
  font-size: 1.6rem;
  color: ${theme.colors.greens.dark};
  margin-top: 4.7rem;
  margin-bottom: 3.4rem;

  ${mq.tablet} {
    margin-top: 4.8rem;
    margin-bottom: 2.4rem;
  }
`

export const item = theme => css`
  margin: 0;
  font-size: 1.6rem;
  color: ${theme.colors.purples.normal};
  line-height: 3.2rem;
  margin-left: 1rem;

  ${mq.tablet} {
    font-size: 1.3rem;
    line-height: 1.95rem;
    margin-bottom: 1.5rem;
  }
`

export const list = css`
  margin: 0;

  ${mq.tablet} {
    padding-left: 2rem;
  }
`

export const targetAnchor = css`
  position: relative;
  top: -4rem;
  text-decoration: none;

  ${mq.tablet} {
    top: -2rem;
  }
`

export const greenLine = theme => css`
  background-color: ${theme.colors.greens.dark};
  height: 0.1rem;
  width: 80rem;
  margin: 0 10rem 10rem 3.2rem;

  ${mq.tablet} {
    width: 70%;
    margin: 0 15% 6rem 15%;
  }
`
