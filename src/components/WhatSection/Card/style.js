import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  max-width: 20.4rem;
  ${mq.tablet} {
    max-width: 25.4%;
  }
`
export const dotLineStyle = theme => css`
  margin: 0;
  color: ${theme.colors.white};
`
export const dotLineContentTitle = css`
  font-size: 2.4rem;
  letter-spacing: 1px;
  line-height: 1.9rem;
  font-weight: bold;
  margin-bottom: 2.6rem;
  text-transform: uppercase;

  ${mq.tablet} {
    font-size: 2rem;
    letter-spacing: 0.4px;
  }
`
export const dotLineContent = css`
  font-size: 2rem;
  letter-spacing: 1px;
  line-height: 2.4rem;
  margin-bottom: 1.6rem;
  
  ${mq.tablet} {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 1px;
  }
`
export const dotLineMore = css`
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 5rem;
  letter-spacing: 0.6px;

  ${mq.tablet} {
    margin-top: 1.5rem;
  }
`
export const dotLineContainer = css`
  margin: 2.3rem 0;
`

export const stockSymbol = theme => css`
  margin: 0;
  font-size: 10px;
  letter-spacing: 0.55px;
  color: ${theme.colors.greens.light};
  margin-bottom: 1.3rem;

  ${mq.tablet} {
    letter-spacing: 1px;
  }
`

export const moreAnchor = css`
  text-decoration: none;
`
