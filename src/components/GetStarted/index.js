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
        <FormattedMessage
          id="readyToGetStarted"
          defaultMessage="Ready to <p>Get STARTED ?</p>"
          values={{
            p: str => <p css={theme => [fontStyle(theme), subTitle]}>{str}</p>,
          }}
        />
      </p>
      <PurpleRightArrow />
    </div>
  </div>
)

export default GetStarted
