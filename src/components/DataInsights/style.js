import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = css`
  margin-top: 4.4rem;
  margin-bottom: 4rem;

  ${mq.tablet} {
    margin-top: 6.8rem;
    margin-bottom: 2.8rem;
  }

  ${mq.mobile} {
    margin-top: 2.8rem;
    margin-bottom: 2.8rem;
  }
`
export const contentContainer = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  z-index: 1;

  ${mq.tablet} {
    flex-direction: column;
  }
`
export const title = theme => css`
  font-size: 7.2rem;
  font-weight: 500;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.purples.normal};
  text-overflow: nowrap;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: 0.26rem;
  text-align: right;
  text-transform: uppercase;
  position: relative;
  margin: 0 0 3.3rem 0;

  ${mq.tablet} {
    font-size: 6.4rem;
    letter-spacing: 0;
    margin-bottom: 5.8rem;
    text-align: center;
  }

  ${mq.mobile} {
    font-size: 5.4rem;
    letter-spacing: 0;
    margin-bottom: 2.8rem;
    text-align: center;
  }
`

export const tagsAndButtonContainer = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-start;

  ${mq.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.3rem;
  }
`

export const tagsContainer = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-end;
  justify-content: flex-start;
`

export const buttonContainer = css`
  margin-top: 13rem;
  margin-bottom: 13rem;

  ${mq.tablet} {
    margin-top: 4.6rem;
    margin-bottom: 4.6rem;
  }
`

export const blogsContainer = css`
  display: flex;
  flex-direction: row-reverse;

  ${mq.tablet} {
    flex-direction: column;
  }
`

export const blogContainer = css`
  position: relative;
  display: inline-block;
  text-align: left;
  margin-left: 3.4rem;
  margin-right: 2.6rem;
  height: fit-content;

  ${mq.tablet} {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 2.8rem;
  }
`

export const blogContainer1 = css`
  margin-top: 3.6rem;

  ${mq.tablet} {
    margin-top: 0;
  }
`

export const blogContainer2 = css`
  margin-top: 10.9rem;

  ${mq.tablet} {
    margin-top: 0;
  }
`

export const blogContainer3 = css`
  margin-top: 18.7rem;

  ${mq.tablet} {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const dataInsightsTag = css`
  margin-bottom: 1.2rem;
  font-size: 1.7rem;
  padding: 0.2rem 1.4rem;

  ${mq.tablet} {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    padding: 0.25rem 1rem;
  }
`
