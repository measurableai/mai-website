import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  margin-bottom: 18rem;

  ${mq.mobile} {
    margin-bottom: 12rem;
  }
`
export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 2.9rem;
  letter-spacing: 0.5px;
  color: ${theme.colors.purples.normal};

  ${mq.mobile} {
    font-size: 2.1rem;
  }
`

export const header = theme => css`
  margin: 0;
  font-size: 1.6rem;
  color: ${theme.colors.greens.dark};
  margin-top: 4.7rem;
  margin-bottom: 3.4rem;

  ${mq.mobile} {
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

  ${mq.mobile} {
    font-size: 1.3rem;
  }
`

export const list = css`
  margin: 0;

  ${mq.mobile} {
    padding-left: 2rem;
  }
`

export const targetAnchor = css`
  position: relative;
  top: -12rem;
  text-decoration: none;
`
