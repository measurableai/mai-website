import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  display: flex;
  flex-direction: column;
  margin: 4.4rem 0 0 0;
  text-align: right;
  display: block;

  ${mq.mobile} {
    margin: 2.8rem auto 0 auto;
    max-width: 37.5rem;
  }
`
export const contentContainer = css`
  display: flex;
  width: 100%;
  ${mq.mobile} {
    flex-direction: column;
    margin: 0 auto;
  }
`
export const whySectionItemContainer = css`
  position: relative;
  display: inline-block;
  text-align: left;
  margin-right: 4.7rem;
  height: 100%;
  ${mq.mobile} {
    margin-right: 0;
  }
`
export const whySectionItemContainer1 = css`
  margin-top: 17.4rem;
  ${mq.mobile} {
    margin-top: 2.2rem;
  }
`
export const whySectionItemContainer2 = css`
  margin-top: 5.5rem;
  ${mq.mobile} {
    margin-left: auto;
    margin-top: -2rem;
  }
`
export const whySectionItemContainer3 = css`
  ${mq.mobile} {
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
`
