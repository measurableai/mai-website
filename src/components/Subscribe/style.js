import { css } from "@emotion/core"

export const fontStyle = theme => css`
  margin: 0;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.purples.normal};
  line-height: 1.2;
`
export const buttonImage = css`
  width: 3.4rem;
  height: 5rem;
  background-size: cover;
  background-position: center;
`
export const mdtImage = css`
  display: inline-block;
  width: 15.8rem;
  height: 2.7rem;
  background-size: cover;
  background-position: center;
`
export const maiImage = css`
  display: block;
  width: 18.5rem;
  height: 2.5rem;
  background-size: cover;
  background-position: center;
  margin-top: 8.6rem;
`
export const socialIcon = css`
  width: 4.2rem;
  height: 4.2rem;
  background-size: cover;
  background-position: center;
  margin-right: 2.2rem;
`
export const subscribeContainer = css`
  margin: 22.8rem 0 3.1rem 0;
`
export const subscribeTitle = css`
  font-size: 7.2rem;
  letter-spacing: 2.14px;
  text-align: left;
  margin-bottom: 3.1rem;
`
export const emailAddressContainer = css`
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #1f014f;
`
export const emailAddress = theme => css`
  margin-right: 13.4rem;
  margin: 0;
  font-size: 3.2rem;
  opacity: 0.3;
  display: inline-block;
  color: ${theme.colors.greens.dark};
`
export const greenArrow = css`
  float: right;
`
export const newsletter = css`
  font-size: 6rem;
  letter-spacing: 1.79px;
`
export const otherPages = theme => css`
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
export const poweredByContainer = css`
  display: flex;
  margin-top: 0.8rem;
`
export const allRightsReserved = css`
  font-size: 1.1rem;
  letter-spacing: 0.5px;
`
export const contentContainer = css`
  margin-bottom: 5.1rem;
  display: flex;
  align-items: flex-end;
`
export const contentLeftContainer = css`
  display: inline-block;
  text-align: left;
  margin-right: 50rem;
`
export const logosContainer = css`
  width: fit-content;
  margin-top: 3.2rem;
`
export const contentRightContainer = css`
  display: inline-block;
  text-align: right;
`
