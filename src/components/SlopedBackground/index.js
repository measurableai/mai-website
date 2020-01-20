import React, { useState } from "react"
import { css } from "@emotion/core"

import BackgroundWithNavigator from "@/components/BackgroundWithNavigator"

import { background } from "./style"

const SlopedSection = ({
  children,
  slopedBackgroundColor,
  slopedBackgroundImage,
  hoverBackgroundColor,
  href,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <BackgroundWithNavigator
      css={css`
        ${background}
        &::before {
          ${slopedBackgroundImage &&
            `background-image: ${slopedBackgroundImage};`}
          ${slopedBackgroundColor &&
            `background-color: ${slopedBackgroundColor};`}
        }
        &:hover::before {
          ${hoverBackgroundColor &&
            `background-color: ${hoverBackgroundColor};`}
        }
      `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isHover={isHover}
      href={href}
      {...props}
    >
      {children}
    </BackgroundWithNavigator>
  )
}

SlopedSection.defaultProps = {
  mode: "light",
}

export default SlopedSection
