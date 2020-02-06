import React, { forwardRef } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  dotLineStyle,
  dotLineContent,
  dotLineContentTitle,
  dotLineMore,
  dotLineContainer,
} from "./style"
import DotLine from "@/components/DotLine"

import useMedia from "@/hooks/useMedia"

const Card = forwardRef(
  ({ src, alt, contentTitle, contents, innerRef, ...props }, ref) => {
    const width = useMedia([37.5, 37.5], 50)
    const height = useMedia([37.5, 37.5], 50)

    return (
      <div css={container} ref={ref || innerRef} {...props}>
        <img width={width} height={height} src={src} alt={alt} />
        <DotLine css={dotLineContainer} invert={true} />
        <div>
          <p css={theme => [dotLineStyle(theme), dotLineContentTitle]}>
            {contentTitle}
          </p>
          {contents.map((content, index) => (
            <p css={theme => [dotLineStyle(theme), dotLineContent]} key={index}>
              {content}
            </p>
          ))}
          <p css={theme => [dotLineStyle(theme), dotLineMore]}>
            <FormattedMessage id="more" defaultMessage="more ..." />
          </p>
        </div>
      </div>
    )
  }
)

export default Card
