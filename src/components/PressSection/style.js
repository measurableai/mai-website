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

export const content1 = css`
  margin-top: 3.9rem;

  ${mq.tablet} {
    margin-top: 2.6rem;
  }
`

export const content2 = css`
  margin-top: 5rem;
  margin-bottom: 5rem;

  ${mq.tablet} {
    margin-top: 2.6rem;
  }
`

export const emailMargin = css`
  margin-bottom: 5rem;
`

export const emailStyle = theme => css`
  margin: 0;
  color: ${theme.colors.greens.dark};
  font-size: 2.8rem;
  font-weight: bold;

  ${mq.tablet} {
    font-size: 2.1rem;
    line-height: 3.6rem;
  }
`
export const button = theme => css`
  background: ${theme.colors.purples.normal};
  color: ${theme.colors.greens.light};
  padding: 1.1rem 2.6rem;
  font-size: 2.4rem;
  font-weight: bold;

  ${mq.tablet} {
    font-size: 2.1rem;
    padding: 0.9rem 1.95rem;
  }
`
