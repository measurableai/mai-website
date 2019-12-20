import { css } from "@emotion/core"

export const container = () => css`
  display: flex;
  flex-direction: column;
  z-index: 1;
  text-align: right;
  align-self: flex-start;
`
export const contentContainer = () => css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  z-index: 1;
  & > div {
    position: relative;
    text-align: left;

    :first-child {
      top: -180px;
    }

    :nth-child(2) {
      top: -150px;
    }

    :nth-child(3) {
      top: -50px;
    }

    :nth-child(4) {
      top: 50px;
    }
  }
`
export const title = theme => css`
  font-size: 50px;
  font-weight: 600;
  color: ${theme.colors.purples.normal};
  text-overflow: nowrap;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: 2.6px;
  text-align: right;
  text-transform: uppercase;
  position: relative;
`
export const titleContainer = theme => css`
  position: relative;
  top: -160px;
  flex: 1;
`
export const tagsContainer = () => css`
  position: relative;
  text-align: right;
  display: flex;
  flex-direction: column;
  flex-wrap: "nowrap";
  /* top: -200px; */
  align-items: flex-end;
  justify-content: space-between;
  & > a {
    margin-top: 12px;
    :first-child {
      margin-top: 0px;
    }
  }
`

export const buttonImage = () => css`
  max-width: 45px;
  max-height: 70px;
  background-size: cover;
  background-position: center;
  margin: 80px 0 0 0;
`
