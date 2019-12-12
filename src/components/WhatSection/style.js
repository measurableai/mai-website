import { css } from "@emotion/core"

export const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  text-align: left;
  z-index: 1;
  margin: 14.3rem 0 0 0;
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
export const titleContainer = css`
  position: relative;
`
export const contentContainer = css`
  min-width: 65.9rem;
  text-align: left;
`
export const whatSectionItemContainer = css`
  position: relative;
  display: inline-block;
  text-align: left;
  min-width: 16.9rem;
  margin-left: 7.6rem;
  z-index: 1;
`
export const whatSectionItemContainer1 = css`
  top: 81px;
  margin-left: 0;
`
export const whatSectionItemContainer2 = css`
  top: 109px;
`
export const whatSectionItemContainer3 = css`
  top: 145px;
`
export const dotLineStyle = css`
  color: white;
  line-height: 1.5rem;
  letter-spacing: 1.12px;
`
export const dotLineTitle = css`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`
export const dotLineContent = css`
  font-size: 1.6rem;
  text-transform: uppercase;
`
export const dotLineMore = css`
  font-size: 1.2rem;
  margin-top: 3rem;
`
