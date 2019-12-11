import React from "react"
import { css } from "@emotion/core"

const background = theme => css`
  background-image: ${theme.linearGradients.purpleDarkToLight};
  background-color: ${theme.colors.purples.dark};
  min-height: 742px;
  width: 100%;
`

export const Background = ({ children }) => (
  <div css={background}>{children}</div>
)
