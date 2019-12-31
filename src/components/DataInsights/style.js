import { css } from "@emotion/core"

export const container = css`
  min-height: 78.7rem;
`
export const contentContainer = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  z-index: 1;
`
export const title = theme => css`
  font-size: 7.2rem;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.purples.normal};
  text-overflow: nowrap;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: 0.26rem;
  text-align: right;
  text-transform: uppercase;
  position: relative;
  margin: 4.4rem 0px 3.3rem 0;
`
export const tagsContainer = css`
  display: flex;
  flex-direction: column;
  flex-wrap: "nowrap";
  position: relative;
  align-items: flex-end;
  justify-content: flex-start;
`

export const buttonContainer = css`
  margin-top: 13rem;
`

export const blogsContainer = css`
  display: flex;
  flex-direction: row-reverse;
`

export const blogContainer = css`
  position: relative;
  display: inline-block;
  text-align: left;
  margin-left: 3.4rem;
  margin-right: 2.6rem;
  height: fit-content;
`

export const blogContainer1 = css`
  top: 36px;
`

export const blogContainer2 = css`
  top: 109px;
`

export const blogContainer3 = css`
  top: 187px;
`

export const dataInsightsTag = css`
  margin-bottom: 1.2rem;
  font-size: 1.7rem;
  padding: 0.2rem 1.4rem;
`
