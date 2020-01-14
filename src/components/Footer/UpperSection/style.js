import { css } from "@emotion/core"
import { mq } from "@/theme"

export const upperFooterContainer = theme => css`
  margin: 0 auto;
  background-color: ${theme.colors.white};
  height: 100%;
  width: 102.4rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  box-sizing: border-box;

  ${mq.mobile} {
    width: 100%;
  }
`

export const fontStyle = theme => css`
  margin: 0;
  color: ${theme.colors.purples.normal};
  line-height: 1.2;
`

export const contentContainer = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  ${mq.mobile} {
    display: block;
  }
`

export const contentLeftContainer = css`
  display: inline-block;
  text-align: left;

  ${mq.mobile} {
    display: block;
  }
`

export const contentRightContainer = css`
  display: inline-block;
  text-align: right;

  ${mq.mobile} {
    display: inline;
    text-align: left;
  }
`

export const maiImage = css`
  display: block;
  width: 18.5rem;
  height: 2.5rem;
  background-size: cover;
  background-position: center;

  ${mq.mobile} {
    width: 13.84rem;
    height: 1.87rem;
  }
`

export const socialIcon = last => css`
  width: 4.2rem;
  height: 4.2rem;
  background-size: cover;
  background-position: center;
  margin-right: ${last ? "0" : "2.2rem"};

  ${mq.mobile} {
    width: 3.2rem;
    height: 3.2rem;
    margin-right: ${last ? "0" : "1.6rem"};
  }
`

export const poweredByContainer = css`
  display: flex;
  margin-top: 0.8rem;
`

export const otherPages = css`
  font-size: 1.4rem;
  letter-spacing: 0.51px;
  margin-top: 1.8rem;

  ${mq.mobile} {
    display: inline;
    font-size: 1.2rem;
  }
`

export const poweredBy = css`
  display: inline-block;
  font-size: 1.1rem;
  margin: auto 0.8rem auto 0;

  ${mq.mobile} {
    font-size: 8.2px;
  }
`

export const mdtImage = css`
  display: inline-block;
  width: 15.8rem;
  height: 2.7rem;
  background-size: cover;
  background-position: center;

  ${mq.mobile} {
    width: 11.9rem;
    height: 2rem;
  }
`

export const logosContainer = css`
  width: fit-content;
  margin-top: 3.2rem;

  ${mq.mobile} {
    margin-top: 2.3rem;
    margin-bottom: 2.3rem;
  }
`

export const allRightsReserved = css`
  margin: 5.2rem 0;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 0.5px;

  ${mq.mobile} {
    margin: 2.3rem 0;
    font-size: 8.2px;
    -webkit-text-size-adjust: none;
  }
`

export const pageAnchor = css`
  text-decoration: none;
`

export const separator = theme => css`
  color: ${theme.colors.purples.normal};
`
