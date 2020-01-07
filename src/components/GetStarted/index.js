import React from "react"
import { useTheme } from "emotion-theming"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleContainer,
  arrowContainer,
  fontStyle,
  title,
  subTitle,
} from "./style"

import useMedia from "@/hooks/useMedia"

import RightArrowIcon from "@/assets/right-arrow.svg"

const PurpleRightArrow = () => {
  const theme = useTheme()
  const width = useMedia([26], 39)
  const height = useMedia([39], 50)

  return (
    <RightArrowIcon
      css={arrowContainer}
      fill={theme.colors.purples.normal}
      width={width}
      height={height}
    />
  )
}

const GetStarted = () => (
  <div css={container}>
    <PurpleRightArrow />
    <div css={titleContainer}>
      <p css={theme => [fontStyle(theme), title]}>
        <FormattedMessage id="readyTo" defaultMessage="Ready to" />
      </p>
      <p css={theme => [fontStyle(theme), subTitle]}>
        <FormattedMessage id="getStarted" defaultMessage="Get STARTED ?" />
      </p>
    </div>
    <PurpleRightArrow />
  </div>
)

export default GetStarted
