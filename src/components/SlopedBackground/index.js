import React, { useCallback, useState } from "react"
import { useWindowScroll } from "react-use"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import { background, navigation, line, cirlce } from "./style"

const Background = ({
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

const Navigator = ({ mode }) => {
  const [position, setPosition] = useState(null)
  const { y } = useWindowScroll()
  const theme = useTheme()

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setPosition(node.getBoundingClientRect())
    }
  }, [])

  // TODO: fine-tune the interpolation logic
  let height = 0
  if (!!position) {
    const diff = y - position.top + 200

    if (diff > 0) {
      if (diff < 70) {
        height = diff
      } else {
        height = 70
      }
    }
  }

  const color = mode === "dark" ? theme.colors.purples.normal : "white"

  return (
    <div ref={measuredRef} css={navigation}>
      <div
        css={line(color)}
        style={{
          height,
        }}
      ></div>
      <div css={cirlce(color)}></div>
      <div
        css={css`
          ${line(color)}
          flex: 1;
        `}
      ></div>
    </div>
  )
}

const SlopedSection = ({ children, mode, ...props }) => (
  <Background {...props}>
    <Navigator mode={mode} />
    {children}
  </Background>
)

SlopedSection.defaultProps = {
  mode: "light",
}

export default SlopedSection
