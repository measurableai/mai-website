import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  display: flex;
  position: relative;
  z-index: 1;
  padding: 4rem 1.2rem;

  ${mq.tablet} {
    flex-direction: column;
    padding: 2.8rem 0rem;
  }
`

export const achievementsContainer = css`
  margin-top: 6.6rem;
  margin-right: 13rem;

  ${mq.tablet} {
    margin-top: 0;
    margin-right: 0;
  }
`

export const trustedByContainer = css`
  margin-top: 16rem;
  margin-right: 13rem;

  ${mq.tablet} {
    margin-top: 0;
    margin-right: 0;
  }
`
