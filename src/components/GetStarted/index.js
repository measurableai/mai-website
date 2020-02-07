import React, { forwardRef } from "react"
import { useTheme } from "emotion-theming"
import { FormattedMessage } from "gatsby-plugin-intl"
import Fade from "react-reveal/Fade"

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

const PurpleRightArrow = ({ isHover }) => {
  const theme = useTheme()
  const width = useMedia([26, 26], 39)
  const height = useMedia([39, 39], 50)
  return (
    <RightArrowIcon
      css={arrowContainer}
      fill={!!isHover ? theme.colors.greens.light : theme.colors.purples.normal}
      width={width}
      height={height}
    />
  )
}

const Container = forwardRef(({ children, innerRef, ...props }, ref) => (
  <div css={container} ref={ref || innerRef} {...props}>
    {children}
  </div>
))

const GetStarted = ({ isHover }) => (
  <Fade refProp="innerRef" bottom>
    <Container>
      <PurpleRightArrow isHover={isHover} />
      <div css={titleContainer}>
        <p css={theme => [fontStyle(theme, isHover), title]}>
          <FormattedMessage id="readyTo" defaultMessage="Ready to" />
        </p>
        <p css={theme => [fontStyle(theme, isHover), subTitle]}>
          <FormattedMessage id="getStarted" defaultMessage="Get STARTED ?" />
        </p>
      </div>
      <PurpleRightArrow isHover={isHover} />
    </Container>
  </Fade>
)

export default GetStarted
