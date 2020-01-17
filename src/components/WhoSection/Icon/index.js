import React, { forwardRef } from "react"

import { container, image, title } from "./style"
import fourLinesIcon from "@/images/who-4-lines.svg"

const Icon = forwardRef(({ header, src, alt, innerRef, ...props }, ref) => (
  <div css={container} ref={ref || innerRef} {...props}>
    <p css={theme => [title(theme)]}>{header}</p>
    <img css={image} src={fourLinesIcon} alt="fourLines" />
    <img css={image} src={src} alt={alt} />
  </div>
))

export default Icon
