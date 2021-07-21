import React, { useState, useMemo, useContext } from "react"
import { css } from "@emotion/core"

import BackgroundWithNavigator from "@/components/BackgroundWithNavigator"
import { TalkToUsContext } from "@/context/talkToUs"

import { background, anchor } from "./style"

const SlopedSection = ({
  children,
  slopedBackgroundColor,
  slopedBackgroundImage,
  hoverBackgroundColor,
  requestADemo,
  dotBackground,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false)
  const { open } = useContext(TalkToUsContext)

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
        requestADemo && (
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            css={anchor}
            onClick={open}
          />
        )
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
