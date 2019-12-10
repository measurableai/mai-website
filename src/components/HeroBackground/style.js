import React from "react"
import { css } from "@emotion/core"

const background = css`
  background-image: linear-gradient(
    90deg,
    rgba(0, 3, 29, 100),
    rgba(0, 3, 28, 53) 50%,
    rgba(0, 3, 24, 0)
  );
  background-color: #18113b;
  min-height: 742px;
  width: 100%;
`

export const Background = ({ children }) => (
  <div css={background}>{children}</div>
)
