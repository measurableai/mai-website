import { css } from "@emotion/core"

export const upperFooterContainer = theme => css`
  margin: 0 auto;
  background-color: ${theme.colors.white};
  height: 100%;
  width: 102.4rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  box-sizing: border-box;
`

export const fontStyle = theme => css`
  margin: 0;
  font-weight: 600;
  color: ${theme.colors.purples.normal};
  line-height: 1.2;
`

export const contentContainer = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const contentLeftContainer = css`
  display: inline-block;
  text-align: left;
`

export const contentRightContainer = css`
  display: inline-block;
  text-align: right;
`

export const maiImage = css`
  display: block;
  width: 18.5rem;
  height: 2.5rem;
  background-size: cover;
  background-position: center;
`

export const socialIcon = last => css`
  width: 4.2rem;
  height: 4.2rem;
  background-size: cover;
  background-position: center;
  margin-right: ${last ? "0" : "2.2rem"};
`

export const poweredByContainer = css`
  display: flex;
  margin-top: 0.8rem;
`

export const otherPages = css`
  font-weight: normal;
  font-size: 1.4rem;
  letter-spacing: 0.51px;
  margin-top: 1.8rem;
`

export const poweredBy = css`
  display: inline-block;
  font-weight: normal;
  font-size: 1.1rem;
  margin: auto 0.8rem auto 0;
`

export const mdtImage = css`
  display: inline-block;
  width: 15.8rem;
  height: 2.7rem;
  background-size: cover;
  background-position: center;
`

export const logosContainer = css`
  width: fit-content;
  margin-top: 3.2rem;
`

export const allRightsReserved = css`
  margin: 5.2rem 0;
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.5px;
`

export const pageAnchor = css`
  text-decoration: none;
`
