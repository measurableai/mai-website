import { css } from "@emotion/core"

export const container = () => css`
  width: 70%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  justify-items: left;
  z-index: 1;
`
export const title = theme => css`
  font-size: 3rem;
  font-weight: bold;
  color: ${theme.colors.purples.normal};
  text-overflow: nowrap;
  line-height: 0;
`

export const tagsContainer = () => css`
  position: relative;
  text-align: right;
  display: flex;
  flex-direction: column;
  flex-wrap: "nowrap";
  top: -200px;
  align-items: flex-end;
  justify-content: space-between;
  & > a {
    margin: 5px 0;
  }
`
export const blogPostContainer1 = () => css`
  text-align: left;
  max-width: 20%;
  position: relative;
  top: 0px;
`
export const blogPostContainer2 = () => css`
  text-align: left;
  max-width: 20%;
  position: relative;
  top: 100px;
`
export const blogPostContainer3 = () => css`
  text-align: left;
  max-width: 20%;
  position: relative;
  top: 200px;
`
export const buttonImage = () => css`
  max-width: 45px;
  max-height: 70px;
  background-size: cover;
  background-position: center;
  margin: 100px 0 0 0;
`
