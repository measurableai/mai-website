import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  display: flex;
  justify-content: center;
  gap: 8rem;
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

  ${mq.tablet} {
    margin-top: 0;
  }
`

export const trustedByContainer = css`
  margin-top: 16rem;

  ${mq.tablet} {
    margin-top: 0;
  }
`
