import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import { container, image, title } from "./style"
import fourLinesIcon from "@/images/who-4-lines.svg"

const WhoSectionIcon = ({ header, src, alt, ...props }) => (
  <div css={container} {...props}>
    <p css={theme => [title(theme)]}>
      <FormattedMessage id={header.id} defaultMessage={header.defaultMessage} />
    </p>
    <img css={image} src={fourLinesIcon} alt="fourLines" />
    <img css={image} src={src} alt={alt} />
  </div>
)

export default WhoSectionIcon
