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
  line-height: 1.5rem;
  letter-spacing: 1.12px;
`
export const dotLineContentTitle = css`
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 2.3rem;

  ${mq.tablet} {
    font-size: 1.7rem;
    letter-spacing: 0.4px;
  }
`
export const dotLineContent = css`
  font-size: 1.6rem;
  letter-spacing: 0.8px;
  margin-bottom: 1rem;

  ${mq.tablet} {
    font-size: 1.4rem;
  }
`
export const dotLineMore = css`
  font-size: 1.2rem;
  font-style: italic;
  margin-top: 3rem;
  letter-spacing: 0.6px;

  ${mq.tablet} {
    margin-top: 1.5rem;
  }
`
export const dotLineContainer = css`
  margin: 2.3rem 0;
`
