import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  display: flex;
  position: relative;
  z-index: 1;
  padding: 4rem 1.2rem;

  ${mq.mobile} {
    flex-direction: column;
    padding: 2.8rem 0rem;
  }
`

export const achievementsContainer = css`
  margin-right: 9.9rem;

  ${mq.mobile} {
    margin-right: 0;
  }
`
export const backedByContainer = css`
  margin-top: 6.6rem;
  margin-right: 9.9rem;

  ${mq.mobile} {
    margin-top: 0;
    margin-right: 0;
  }
`
export const trustedByContainer = css`
  margin-top: 13.1rem;

  ${mq.mobile} {
    margin-top: 0;
  }
`
