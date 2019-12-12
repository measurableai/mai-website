import React from "react"
import { css } from "@emotion/core"

import { container } from "./style"

const CommonContainer = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)

const Container = ({
  children,
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
  justifyContent,
}) => (
  <div
    css={theme =>
      container(
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
      )
    }
  >
    {children}
  </div>
)

export default CommonContainer
