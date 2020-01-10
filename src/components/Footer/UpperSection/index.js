import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import {
  upperFooterContainer,
  fontStyle,
  contentContainer,
  contentLeftContainer,
  contentRightContainer,
  maiImage,
  socialIcon,
  poweredByContainer,
  poweredBy,
  otherPages,
  mdtImage,
  logosContainer,
  allRightsReserved,
  pageAnchor,
} from "./style"

import mailogo from "@/images/mai-logo-2.svg"
import mdtLogo from "@/images/mdt-logo.svg"
import facebookIcon from "@/images/btn-facebook.svg"
import linkedinIcon from "@/images/btn-linkedin.svg"
import mediumIcon from "@/images/btn-medium.svg"
import twitterIcon from "@/images/btn-twitter.svg"
import wechatIcon from "@/images/btn-wechat.svg"
import weiboIcon from "@/images/btn-weibo.svg"

const SocialIcon = ({ last, src, alt }) => (
  <img css={socialIcon(last)} src={src} alt={alt} />
)

const OtherPages = props => (
  <p css={theme => [fontStyle(theme), otherPages]} {...props}></p>
)

const Page = ({ children, ...props }) => (
  <Link css={pageAnchor} {...props}>
    {children}
  </Link>
)

const UpperFooter = () => (
  <div css={upperFooterContainer}>
    <div css={contentContainer}>
      <div css={contentLeftContainer}>
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
          <SocialIcon src={weiboIcon} alt="weibo" last={true} />
        </div>
      </div>
      <div css={contentRightContainer}>
        <Page to="/jobs">
          <OtherPages>
            <FormattedMessage id="jobs" defaultMessage="JOBS" />
          </OtherPages>
        </Page>
        <Page to="/press">
          <OtherPages>
            <FormattedMessage id="press" defaultMessage="PRESS" />
          </OtherPages>
        </Page>
        <Page to="/privacyPolicy">
          <OtherPages>
            <FormattedMessage
              id="privacyPolicy"
              defaultMessage="PRIVACY  POLICY"
            />
          </OtherPages>
        </Page>
        <Page to="/termsofuse">
          <OtherPages>
            <FormattedMessage id="termsOfUse" defaultMessage="TERMS OF USE" />
          </OtherPages>
        </Page>
      </div>
    </div>
    <p css={theme => [fontStyle(theme), allRightsReserved]}>
      <FormattedMessage
        id="AllRightsReserved"
        defaultMessage="ALL RIGHTS RESERVED © 2019 Measurable AI"
      />
    </p>
  </div>
)

export default UpperFooter
