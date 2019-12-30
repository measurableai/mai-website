import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  dotLineInvert,
  dotLineStyle,
  dotLineContent,
  dotLineContentTitle,
  dotLineTitle,
  dotLineSubTitle,
  dotLineMore,
} from "./style"
import DotLine from "@/components/DotLine"

const ImageDotLine = ({
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
        css={() => dotLineInvert(invert)}
        height={height}
        width={width}
        src={src}
        alt={alt}
      />
      <DotLine margin={margin} invert={invert} />
      <div css={() => dotLineInvert(invert)}>
        {!!title && (
          <p css={theme => [dotLineStyle(theme), dotLineTitle]}>
            <FormattedMessage
              id={title.id}
              defaultMessage={title.defaultMessage}
            />
            {!!subTitle && (
              <span css={theme => [dotLineStyle(theme), dotLineSubTitle]}>
                {" "}
                <FormattedMessage
                  id={subTitle.id}
                  defaultMessage={subTitle.defaultMessage}
                />
              </span>
            )}
          </p>
        )}
        {!!contentTitle && (
          <p css={theme => [dotLineStyle(theme), dotLineContentTitle]}>
            <FormattedMessage
              id={contentTitle.id}
              defaultMessage={contentTitle.defaultMessage}
            />
          </p>
        )}
        <div>
          {!!contents > 0 &&
            contents.map(content => (
              <p css={theme => [dotLineStyle(theme), dotLineContent]}>
                <FormattedMessage
                  id={content.id}
                  defaultMessage={content.defaultMessage}
                />
              </p>
            ))}
          {!!contents > 0 && (
            <p css={theme => [dotLineStyle(theme), dotLineMore]}>
              <FormattedMessage id="more" defaultMessage="more ..." />
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageDotLine
