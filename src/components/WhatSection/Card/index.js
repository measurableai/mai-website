import React from "react"
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

const Card = ({ invert, src, alt, contentTitle, contents, ...props }) => {
  return (
    <div css={container} {...props}>
      <img height={50} width={50} src={src} alt={alt} />
      <DotLine css={dotLineContainer} invert={true} />
      <div>
        <p css={theme => [dotLineStyle(theme), dotLineContentTitle]}>
          {contentTitle}
        </p>
        {contents.map(content => (
          <p css={theme => [dotLineStyle(theme), dotLineContent]}>{content}</p>
        ))}
        <p css={theme => [dotLineStyle(theme), dotLineMore]}>
          <FormattedMessage id="more" defaultMessage="more ..." />
        </p>
      </div>
    </div>
  )
}

export default Card
