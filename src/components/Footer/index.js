import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
  separator,
  purpleBar,
  address,
} from "./style"

import mailogo from "@/images/mai-logo-2.svg"
import mdtLogo from "@/images/mdt-logo.svg"
import facebookIcon from "@/images/btn-facebook.svg"
import linkedinIcon from "@/images/btn-linkedin.svg"
import mediumIcon from "@/images/btn-medium.svg"
import twitterIcon from "@/images/btn-twitter.svg"
// import wechatIcon from "@/images/btn-wechat.svg"
import weiboIcon from "@/images/btn-weibo.svg"

import useMedia from "@/hooks/useMedia"

const SocialIcon = ({ last, src, alt, href }) => (
  <OutboundLink href={href} target="_blank" rel="noreferrer noopener">
    <img css={socialIcon(last)} src={src} alt={alt} />
  </OutboundLink>
)

const OtherPages = props => (
  <p css={theme => [fontStyle(theme), otherPages]} {...props} />
)

const Page = ({ children, ...props }) => (
  <Link css={pageAnchor} {...props}>
    {children}
  </Link>
)

const Footer = () => {
  const isDesktop = useMedia([false, false], true)
  return (
    // TODO: check why fragement does not work here
    <footer>
      <div css={upperFooterContainer}>
        <div css={contentContainer}>
          <div css={contentLeftContainer}>
            <div>
              <img css={maiImage} src={mailogo} alt="MAI" />
              <div css={poweredByContainer}>
                <p css={theme => [fontStyle(theme), poweredBy]}>
                  <FormattedMessage
                    id="poweredBy"
                    defaultMessage="Powered by"
                  />
                </p>
                <OutboundLink
                  href="https://mdt.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img css={mdtImage} src={mdtLogo} alt="MDT" />
                </OutboundLink>
              </div>
            </div>
            <div css={logosContainer}>
              <SocialIcon
                src={linkedinIcon}
                alt="linkedin"
                href="https://linkedin.com/company/measurable-ai"
              />
              <SocialIcon
                src={mediumIcon}
                alt="medium"
                href="https://medium.com/measurable-ai"
              />
              <SocialIcon
                src={twitterIcon}
                alt="twitter"
                href="https://twitter.com/MeasurableAI"
              />
              <SocialIcon
                src={facebookIcon}
                alt="facebook"
                href="https://fb.me/measurableai"
              />
              {/* <SocialIcon src={wechatIcon} alt="wechat" /> */}
              <SocialIcon
                src={weiboIcon}
                alt="weibo"
                href="https://weibo.com/measurableai"
                last={true}
              />
            </div>
          </div>
          <div css={contentRightContainer}>
            <Page to="/jobs">
              <OtherPages>
                <FormattedMessage id="jobs" defaultMessage="JOBS" />
              </OtherPages>
            </Page>
            {!isDesktop ? <span css={separator}> | </span> : ""}
            <Page to="/press">
              <OtherPages>
                <FormattedMessage id="press" defaultMessage="PRESS" />
              </OtherPages>
            </Page>
            {!isDesktop ? <span css={separator}> | </span> : ""}
            <Page to="/privacyPolicy">
              <OtherPages>
                <FormattedMessage
                  id="privacyPolicy"
                  defaultMessage="PRIVACY  POLICY"
                />
              </OtherPages>
            </Page>
            {!isDesktop ? <span css={separator}> | </span> : ""}
            <Page to="/termsOfUse">
              <OtherPages>
                <FormattedMessage
                  id="termsOfUse"
                  defaultMessage="TERMS OF USE"
                />
              </OtherPages>
            </Page>
          </div>
        </div>
        <p css={theme => [fontStyle(theme), allRightsReserved]}>
          <FormattedMessage
            id="AllRightsReserved"
            defaultMessage="ALL RIGHTS RESERVED © {year} Measurable AI"
            values={{
              year: new Date().getFullYear(),
            }}
          />
        </p>
      </div>
      <div css={purpleBar}>
        <p css={address}>
          <FormattedMessage
            id="address"
            defaultMessage="9/F, 118 Wai Yip St, Kwun Tong, Kowloon, Hong Kong"
          />
        </p>
      </div>
    </footer>
  )
}

export default Footer
