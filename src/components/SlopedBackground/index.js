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
  dotBackground,
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
      css={theme => css`
        ${background}
        &::before {
          ${slopedBackgroundImage &&
            `background-image: ${slopedBackgroundImage};`}
          ${slopedBackgroundColor &&
            `background-color: ${slopedBackgroundColor};`}
          ${isHover &&
            hoverBackgroundColor &&
            `background-color: ${hoverBackgroundColor};`}
          z-index: ${
            dotBackground
              ? theme.zIndices.dotBackground
              : theme.zIndices.background
          }  
        }
        &::after {
          ${dotBackground &&
            `
            content: "";
            position: absolute;
            top: -50%;
            width: 100%;
            height: 200%;
            background-image: radial-gradient(#A564ff 4%, transparent 5%);
            background-size: 21px 22px;
            opacity: 0.5;
            z-index: ${theme.zIndices.dotBackground};
          `}
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
