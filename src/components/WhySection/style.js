import { css } from "@emotion/core"

export const container = css`
  display: flex;
  flex-direction: column;
  margin: 4.4rem 0 0 0;
  text-align: right;
  display: block;
`
export const titleContainer = css`
  text-align: right;
  align-self: flex-end;
  position: relative;
  margin: 0;
`
export const titleStyle = theme => css`
  margin: 0;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
`
export const title = theme => css`
  font-size: 11.6rem;
  color: ${theme.colors.greens.light};
  letter-spacing: 0.4rem;
  line-height: 0.8;
  text-transform: uppercase;
`
export const subTitle = theme => css`
  font-size: 4.6rem;
  color: ${theme.colors.white};
  letter-spacing: 1.2px;
`
export const questionMark = theme => css`
  color: ${theme.colors.greens.light};
`
export const contentContainer = css`
  display: flex;
`
export const whySectionItemContainer = css`
  position: relative;
  display: inline-block;
  text-align: left;
  margin-right: 4.7rem;
  height: 100%;
`
export const whySectionItemContainer1 = css`
  top: 174px;
`
export const whySectionItemContainer2 = css`
  top: 55px;
`
export const whySectionItemContainer3 = css``
