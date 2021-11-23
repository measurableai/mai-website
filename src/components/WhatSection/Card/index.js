import React, { forwardRef, Fragment } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  dotLineStyle,
  dotLineContent,
  dotLineContentTitle,
  dotLineMore,
  dotLineContainer,
  stockSymbol,
  moreAnchor,
} from "./style"
import DotLine from "@/components/DotLine"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import useMedia from "@/hooks/useMedia"

const Card = forwardRef(
  ({ src, alt, contentTitle, contents, innerRef, ...props }, ref) => {
    const width = useMedia([37.5, 37.5], 50)
    const height = useMedia([37.5, 37.5], 50)

    return (
      <div css={container} ref={ref || innerRef} {...props}>
        <img width={width} height={height} src={src} alt={alt} />
        <DotLine css={dotLineContainer} invert={true} />
        <p css={theme => [dotLineStyle(theme), dotLineContentTitle]}>
          {contentTitle}
        </p>
        {contents.map(({ id, defaultMessage, stockMsgId }, index) => (
          <Fragment key={id}>
            {id && (
              <p
                css={theme => [dotLineStyle(theme), dotLineContent]}
                key={index}
              >
                <FormattedMessage id={id} defaultMessage={defaultMessage} />
              </p>
            )}
            <p css={theme => [stockSymbol(theme)]}>
              {stockMsgId ? (
                <FormattedMessage id={stockMsgId} defaultMessage="" />
              ) : (
                " "
              )}
            </p>
          </Fragment>
        ))}
        <OutboundLink
          css={moreAnchor}
          href="https://file.measurable.ai/coverage.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p css={theme => [dotLineStyle(theme), dotLineMore]}>
            <FormattedMessage id="more" defaultMessage="more ..." />
          </p>
        </OutboundLink>
      </div>
    )
  }
)

export default Card
