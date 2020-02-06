import { css } from "@emotion/core"
import { mq } from "@/theme"

export const slideContainer = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  ${mq.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

export const textContainer = css`
  flex: 1;
  margin-top: 6rem;
  margin-right: 11rem;
  text-align: left;

  ${mq.tablet} {
    margin: 0 0 2.8rem 0;
  }
`

export const chart = css`
  width: 48.5rem;

  ${mq.tablet} {
    width: 100%;
  }
`

export const tag = css`
  display: inline-block;
  padding: 0.3rem 1.4rem;
  font-size: 2.2rem;
  letter-spacing: 0.79px;
  text-transform: uppercase;

  ${mq.tablet} {
    font-size: 1.65rem;
    padding: 0.3rem 1rem;
  }
`

export const title = theme => css`
  font-size: 3.8rem;
  font-weight: bold;
  color: ${theme.colors.purples.normal};
  margin-top: 1.5rem;
  margin-bottom: 1.9rem;

  ${mq.tablet} {
    font-size: 2.85rem;
    margin-top: 1.1rem;
    margin-bottom: 1.1rem;
  }
`

export const description = theme => css`
  font-size: 1.6rem;
  line-height: 1.31;
  color: ${theme.colors.purples.normal};
  margin: 0;

  ${mq.tablet} {
    font-size: 1.3rem;
  }
`
