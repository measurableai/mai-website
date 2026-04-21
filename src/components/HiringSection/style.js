import { css } from "@emotion/core"
import { mq } from "@/theme"

export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 8.4rem;
  font-weight: 500;
  letter-spacing: 0.01px;
  color: ${theme.colors.purples.normal};

  ${mq.tablet} {
    font-size: 4.8rem;
  }
`

export const contentFontStyle = theme => css`
  margin: 0;
  color: ${theme.colors.purples.normal};
  font-size: 2rem;
  line-height: 3.6rem;

  ${mq.tablet} {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`

export const content = css`
  margin-top: 3.9rem;

  ${mq.tablet} {
    margin-top: 2.6rem;
  }
`

export const emailMargin = css`
  margin-top: 3.9rem;
  margin-bottom: 5rem;

  ${mq.tablet} {
    margin-top: 2.6rem;
    margin-bottom: 2.6rem;
  }
`

export const currentOpeningsContainer = css`
  margin-top: 0.5rem;
`

export const jobTitle = theme => css`
  color: ${theme.colors.purples.normal};
  border-bottom: 0.1rem solid ${theme.colors.purples.normal};
  line-height: 2;

  ${mq.tablet} {
    font-size: 1.3rem;
  }
`

export const jumpAnchor = css`
  text-decoration: none;
`

export const jobContainer = css`
  display: inline-block;
`

export const emailStyle = theme => css`
  margin: 0;
  color: ${theme.colors.greens.dark};
  font-size: 2.8rem;
  font-weight: bold;

  ${mq.tablet} {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`
