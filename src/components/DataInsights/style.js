import { css } from "@emotion/core"

export const container = css`
  min-height: 787px;
`
export const contentContainer = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  z-index: 1;
`
export const title = theme => css`
  font-size: 72px;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.purples.normal};
  text-overflow: nowrap;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: 2.6px;
  text-align: right;
  text-transform: uppercase;
  position: relative;
  margin: 44px 0px 33px 0;
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
  margin-top: 130px;
`

export const buttonImage = css`
  max-width: 45px;
  max-height: 70px;
  background-size: cover;
  background-position: center;
`

export const blogsContainer = css`
  display: flex;
  flex-direction: row-reverse;
`

export const blogContainer = css`
  position: relative;
  display: inline-block;
  text-align: left;
  margin-left: 34px;
  margin-right: 26px;
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
  margin-bottom: 12px;
  font-size: 17px;
  padding: 2px 14px;
`
