import { css } from "@emotion/core"

export const container = css`
  display: flex;
  flex-direction: column;
  z-index: 1;
  text-align: right;
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
export const titleContainer = css`
  position: relative;
  flex: 1;
`
export const tagsContainer = css`
  display: flex;
  flex-direction: column;
  flex-wrap: "nowrap";
  position: relative;
  align-items: flex-end;
  justify-content: flex-start;
`

export const buttonImage = css`
  max-width: 45px;
  max-height: 70px;
  background-size: cover;
  background-position: center;
  margin: 120px 0 0 0;
`

export const blogsContainer = css`
  min-width: 750px;
`

export const blogContainer = css`
  width: 190px;
  position: relative;
  display: block;
  text-align: left;
  margin-left: 60px;
`

export const blogContainer1 = css`
  top: 36px;
  left: 500px;
`

export const blogContainer2 = css`
  top: -180px;
  left: 250px;
`

export const blogContainer3 = css`
  top: -360px;
  left: 0px;
`

export const dataInsightsTag = css`
  margin-top: 12px;
  font-size: 17px;
  padding: 2px 14px;
`
export const firstDataInsightsTag = css`
  margin-top: 0px;
`
