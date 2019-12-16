// import React from "react"
import { css } from "@emotion/core"

export const dotArrowContainer = (margin, padding) => css`
  display: flex;
  width: 50px;
  margin: ${margin};
  padding: ${padding};
  align-items: center;
  flex-direction: column;
`
export const dot1 = theme => css`
  position: relative;
  height: 5px;
  width: 5px;
  background-color: ${theme.colors.purples.normal};
  border-radius: 50%;
  top: -5px;
`
export const dot2 = theme => css`
  position: relative;
  height: 5px;
  width: 5px;
  background-color: ${theme.colors.purples.normal};
  border-radius: 50%;
  /* display: inline-block; */
  top: 5px;
`
export const rightArrow = theme => css`
  border: solid ${theme.colors.purples.normal};
  border-width: 0 2px 2px 0;
  display: flex;
  padding: 20px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`
