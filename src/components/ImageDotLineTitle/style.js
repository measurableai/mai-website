// import React from "react"
import { css } from "@emotion/core"

export const container = css`
  max-width: 20.4rem;
`
export const dotLineContainer = invert => css`
  display: flex;
  width: 100%;
  margin: 10px auto;
  align-items: center;
  flex-direction: ${invert ? "row-reverse" : "row"};
  flex-wrap: nowrap;
  position: relative;
  left: ${invert ? "0" : "-5px"};
`
export const dot = theme => css`
  height: 5px;
  width: 5px;
  background-color: ${theme.colors.white};
  border-radius: 50%;
`
export const line = theme => css`
  flex-grow: 1;
  height: 1px;
  width: 100%;
  background-color: ${theme.colors.white};
  position: relative;
`
