import React from "react"
import { css } from "@emotion/core"

import BackgroundWithNavigator from "@/components/BackgroundWithNavigator"

import { background } from "./style"

const SlopedSection = ({
  children,
  slopedBackgroundColor,
  slopedBackgroundImage,
  ...props
}) => (
  <BackgroundWithNavigator
    css={css`
      ${background}
      &::before {
        ${slopedBackgroundImage &&
          `background-image: ${slopedBackgroundImage};`}
        ${slopedBackgroundColor &&
          `background-color: ${slopedBackgroundColor};`}
      }
    `}
    {...props}
  >
    {children}
  </BackgroundWithNavigator>
)

SlopedSection.defaultProps = {
  mode: "light",
}

export default SlopedSection
