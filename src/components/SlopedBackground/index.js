import React, { useState, useMemo } from "react"
import { css } from "@emotion/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import BackgroundWithNavigator from "@/components/BackgroundWithNavigator"

import { background, anchor } from "./style"

const SlopedSection = ({
  children,
  slopedBackgroundColor,
  slopedBackgroundImage,
  hoverBackgroundColor,
  href,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false)

  const childWithProp = useMemo(
    () =>
      React.Children.map(children, child => {
        return isHover
          ? React.cloneElement(child, { isHover: isHover })
          : children
      }),
    [children, isHover]
  )

  return (
    <BackgroundWithNavigator
      css={css`
        ${background}
        &::before {
          ${slopedBackgroundImage &&
            `background-image: ${slopedBackgroundImage};`}
          ${slopedBackgroundColor &&
            `background-color: ${slopedBackgroundColor};`}
          ${isHover &&
            hoverBackgroundColor &&
            `background-color: ${hoverBackgroundColor};`}
        }
      `}
      backgroundComponent={
        href ? (
          <OutboundLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            css={anchor}
          />
        ) : null
      }
      {...props}
    >
      {childWithProp}
    </BackgroundWithNavigator>
  )
}

SlopedSection.defaultProps = {
  mode: "light",
}

export default SlopedSection
