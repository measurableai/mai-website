// import React from "react"
import { css } from "@emotion/core"

export const container = (
  theme,
  textAlign,
  margin,
  position,
  width,
  maxWidth,
  top,
  bottom,
  right,
  left,
  display,
  flexDirection,
  flexWrap,
  justifyContent
) => css`
  text-align: ${textAlign};
  margin: ${margin};
  position: ${position ? position : "relative"};
  width: ${width};
  max-width: ${maxWidth};
  top: ${top};
  bottom: ${bottom};
  left: ${left};
  right: ${right};
  display: ${display};
  flex-direction: ${flexDirection && flexDirection};
  flex-wrap: ${flexWrap && flexWrap};
  flex-grow: 1;
  justify-content: ${justifyContent};
`
