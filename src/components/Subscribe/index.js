import React from "react"
import { useTheme } from "emotion-theming"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  fontStyle,
  mdtImage,
  maiImage,
  socialIcon,
  subscribeContainer,
  subscribeTitle,
  emailAddressContainer,
  emailAddress,
  newsletter,
  allRightsReserved,
  poweredBy,
  poweredByContainer,
  otherPages,
  contentContainer,
  contentLeftContainer,
  logosContainer,
  contentRightContainer,
  greenArrow,
} from "./style"

import RightArrowIcon from "@/assets/right-arrow.svg"
import mailogo from "@/images/mai-logo-2.svg"
import mdtLogo from "@/images/mdt-logo.svg"
import facebookIcon from "@/images/btn-facebook.svg"
import linkedinIcon from "@/images/btn-linkedin.svg"
import mediumIcon from "@/images/btn-medium.svg"
import twitterIcon from "@/images/btn-twitter.svg"
import wechatIcon from "@/images/btn-wechat.svg"
import weiboIcon from "@/images/btn-weibo.svg"

const SocialIcon = ({ src, alt }) => (
  <img css={socialIcon} src={src} alt={alt} />
)

const OtherPages = props => (
  <p css={theme => [fontStyle(theme), otherPages(theme)]} {...props}></p>
)
const GreenRightArrow = () => {
  const theme = useTheme()
  return (
    <RightArrowIcon
      css={greenArrow}
      fill={theme.colors.greens.dark}
      width={21}
      height={29}
    />
  )
}

const Subscribe = () => (
  <div>
    <div css={subscribeContainer}>
      <p css={theme => [fontStyle(theme), subscribeTitle]}>
        <FormattedMessage id="subscribe" defaultMessage="SUBSCRIBE" />{" "}
        <span css={theme => [fontStyle(theme), newsletter]}>
          <FormattedMessage
            id="toOurNewsLetter"
            defaultMessage="to our newsletter"
          />
        </span>
      </p>
    </div>
    <div css={contentContainer}>
      <div css={contentLeftContainer}>
        <div css={emailAddressContainer}>
          <p css={emailAddress}>
            <FormattedMessage
              id="emailAddress"
              defaultMessage="Email Address"
            />
          </p>
          <GreenRightArrow />
        </div>
        <div>
          <img css={maiImage} src={mailogo} alt="MAI" />
          <div css={poweredByContainer}>
            <p css={theme => [fontStyle(theme), poweredBy]}>
              <FormattedMessage id="poweredBy" defaultMessage="Powered by" />
            </p>
            <img css={mdtImage} src={mdtLogo} alt="MDT" />
          </div>
        </div>
        <div css={logosContainer}>
          <SocialIcon src={linkedinIcon} alt="linkedin" />
          <SocialIcon src={mediumIcon} alt="medium" />
          <SocialIcon src={twitterIcon} alt="twitter" />
          <SocialIcon src={facebookIcon} alt="facebook" />
          <SocialIcon src={wechatIcon} alt="wechat" />
          <SocialIcon src={weiboIcon} alt="weibo" />
        </div>
      </div>
      <div css={contentRightContainer}>
        <OtherPages>
          <FormattedMessage id="jobs" defaultMessage="JOBS" />
        </OtherPages>
        <OtherPages>
          <FormattedMessage id="press" defaultMessage="PRESS" />
        </OtherPages>
        <OtherPages>
          <FormattedMessage
            id="privacyPolicy"
            defaultMessage="PRIVACY  POLICY"
          />
        </OtherPages>
        <OtherPages>
          <FormattedMessage id="termsOfUse" defaultMessage="TERMS OF USE" />
        </OtherPages>
      </div>
    </div>
    <p css={theme => [fontStyle(theme), allRightsReserved]}>
      <OtherPages>
        <FormattedMessage
          id="AllRightsReserved"
          defaultMessage="ALL RIGHTS RESERVED © 2019 Measurable AI"
        />
      </OtherPages>
    </p>
  </div>
)

export default Subscribe
