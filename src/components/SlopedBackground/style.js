import React from "react"
import { css } from "@emotion/core"

const background = css`
  min-height: 450px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transform: skewY(-21.5deg);
    width: 100%;
  }

  > * {
    position: relative;
  }
`

export const Background = ({
  children,
  className,
  slopedBackgroundColor,
  slopedBackgroundImage,
}) => (
  <div
    css={css`
      ${background}
      &::before {
        ${slopedBackgroundImage &&
          `background-image: ${slopedBackgroundImage};`}
        ${slopedBackgroundColor &&
          `background-color: ${slopedBackgroundColor};`}
      }
    `}
    className={className}
  >
    {children}
  </div>
)
