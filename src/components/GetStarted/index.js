import React from "react"
import { useTheme } from "emotion-theming"
import { FormattedMessage } from "gatsby-plugin-intl"

import { container, titleContainer, fontStyle, title, subTitle } from "./style"

import RightArrowIcon from "@/assets/right-arrow.svg"

const PurpleRightArrow = () => {
  const theme = useTheme()
  return (
    <RightArrowIcon fill={theme.colors.purples.normal} width={34} height={50} />
  )
}

const GetStarted = () => (
  <div css={container}>
    <div css={titleContainer}>
      <PurpleRightArrow />
      <p css={theme => [fontStyle(theme), title]}>
        <FormattedMessage id="readyTo" defaultMessage="Ready to" />
      </p>
      <p css={theme => [fontStyle(theme), subTitle]}>
        <FormattedMessage id="getStarted" defaultMessage="Get STARTED ?" />
      </p>
      <PurpleRightArrow />
    </div>
  </div>
)

export default GetStarted
