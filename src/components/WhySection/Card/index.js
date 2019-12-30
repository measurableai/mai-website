import React from "react"

import {
  container,
  dotLineInvert,
  dotLineStyle,
  dotLineTitle,
  dotLineSubTitle,
  dotLineContainer,
} from "./style"
import DotLine from "@/components/DotLine"

const Card = ({
  invert,
  margin,
  src,
  alt,
  height,
  width,
  title,
  subTitle,
  contentTitle,
  contents,
  ...props
}) => {
  return (
    <div css={container} {...props}>
      <img
        css={dotLineInvert}
        height={height}
        width={width}
        src={src}
        alt={alt}
      />
      <DotLine css={dotLineContainer} invert={invert} />
      <div css={dotLineInvert}>
        <p css={theme => [dotLineStyle(theme), dotLineTitle]}>
          {title}
          <span css={theme => [dotLineStyle(theme), dotLineSubTitle]}>
            {" "}
            {subTitle}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card
