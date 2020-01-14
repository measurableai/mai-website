import { css } from "@emotion/core"
import { mq } from "@/theme"

export const container = () => css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  z-index: 1;
  margin: 0;

  ${mq.mobile} {
    margin: 2.8rem auto 0 auto;
    max-width: 37.5rem;
  }
`
export const titleContainer = () => css`
  margin: 4rem 0 1.5rem 0;
  text-align: right;
  width: 100%;

  ${mq.mobile} {
    margin: 0 0 1.9rem 0;
  }
`
export const imagesContainer = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  ${mq.mobile} {
    flex-direction: column;
  }
`
export const image = css`
  display: inline-block;
  margin-right: 3rem;

  ${mq.mobile} {
    margin-right: 0;
  }
`
export const image1 = css`
  margin-right: 16rem;

  ${mq.mobile} {
    order: 2;
    align-self: flex-end;
    margin-left: 1rem;
    top: -3rem;
  }
`
export const image2 = css`
  margin-top: 5.8rem;

  ${mq.mobile} {
    order: 4;
    margin-top: 0;
    align-self: flex-end;
    margin-left: 1rem;
    top: -6rem;
  }
`
export const image3 = css`
  margin-top: 11.5rem;

  ${mq.mobile} {
    order: 3;
    margin-top: 0;
    top: -3rem;
  }
`
export const image4 = css`
  margin-top: 17.3rem;

  ${mq.mobile} {
    order: 1;
    margin-top: 0;
    align-self: flex-start;
  }
`
