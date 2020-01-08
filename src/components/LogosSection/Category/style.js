import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  display: inline-block;
  position: relative;

  ${mq.mobile} {
    display: block;
    margin-bottom: 2.8rem;
  }
`

export const title = theme => css`
  margin: 0;
  margin-bottom: 3.3rem;
  font-size: 2.8rem;
  letter-spacing: 0.6px;
  color: ${theme.colors.purples.light};

  ${mq.mobile} {
    margin-bottom: 4rem;
    font-size: 2.4rem;
  }
`

export const imageContainer = css`
  display: flex;
  justify-content: center;

  & > :first-of-type {
    margin-left: 0;
  }

  & > :last-of-type {
    margin-right: 0;
  }
`

export const image = css`
  min-width: 11.5rem;
  margin-bottom: 6.3rem;

  ${mq.mobile} {
    min-width: 11rem;
  }
`

export const inlineContainer = css`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  & > div:last-child {
    margin-bottom: 0;
  }
`

export const andMore = theme => css`
  margin: 0 auto;
  width: 13rem;
  height: fit-content;
  font-size: 1.2rem;
  letter-spacing: 0.35px;
  color: ${theme.colors.purples.light};
  text-align: center;
`
