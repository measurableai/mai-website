import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  text-align: left;
  z-index: 1;
  margin: 14.3rem 0 0 0;

  ${mq.tablet} {
    flex-direction: column;
    margin-top: 2.8rem;
    margin: 2.8rem auto 0 auto;
    max-width: 37.5rem;
    height: 90rem;
    overflow: visible;
  }
`
export const contentContainer = css`
  min-width: 65.9rem;
  text-align: left;
  z-index: 1;

  ${mq.tablet} {
    min-width: 12.8rem;
  }
`
export const whatSectionItemContainer = css`
  position: relative;
  display: inline-block;
  text-align: left;
  min-width: 16.9rem;
  margin-left: 7.6rem;
  vertical-align: top;

  ${mq.tablet} {
    display: block;
    margin: 0;
    min-width: calc(50% - 2.6rem);
  }
`
export const whatSectionItemContainer1 = css`
  margin-top: 8.1rem;
  margin-bottom: 13.6rem;
  margin-left: 0;

  ${mq.tablet} {
    top: -10rem;
    margin-top: 1.9rem;
    margin-left: auto;
  }
`
export const whatSectionItemContainer2 = css`
  margin-top: 10.9rem;

  ${mq.tablet} {
    margin-left: auto;
    top: -55rem;
    overflow: visible;
  }
`
export const whatSectionItemContainer3 = css`
  margin-top: 14.5rem;

  ${mq.tablet} {
    top: -32rem;
  }
`

export const flexContainer = css`
  display: flex;
`
