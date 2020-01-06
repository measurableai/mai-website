import { css } from "@emotion/core"

export const fontStyle = theme => css`
  margin: 0;
  font-weight: 600;
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
export const socialIcon = last => css`
  width: 4.2rem;
  height: 4.2rem;
  background-size: cover;
  background-position: center;
  margin-right: ${last ? "0" : "2.2rem"};
`
export const subscribeContainer = css`
  margin: 22.8rem 0 3.1rem 0;
`
export const subscribeTitle = css`
  font-size: 6rem;
  letter-spacing: 1.79px;
  text-align: left;
  margin-bottom: 3.1rem;
`
export const emailAddressContainer = css`
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #1f014f;
`
export const subscribe = theme => css`
  font-size: 7.2rem;
  font-family: ${theme.fonts.heading};
  letter-spacing: 2.14px;
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
  margin: 5.2rem 0;
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.5px;
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
export const logosContainer = css`
  width: fit-content;
  margin-top: 3.2rem;
`
export const contentRightContainer = css`
  display: inline-block;
  text-align: right;
`
export const emailInput = theme => css`
  border: none;
  font-size: 3.2rem;
  ::placeholder {
    color: ${theme.colors.greens.dark};
    opacity: 0.3;
  }
`
