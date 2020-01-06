import React, { useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  fontStyle,
  mdtImage,
  maiImage,
  socialIcon,
  subscribeContainer,
  subscribe,
  subscribeTitle,
  emailAddressContainer,
  allRightsReserved,
  poweredBy,
  poweredByContainer,
  otherPages,
  contentContainer,
  contentLeftContainer,
  logosContainer,
  contentRightContainer,
  emailInput,
} from "./style"

import RightArrowIcon from "@/assets/green-right-arrow.svg"
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
  <p css={theme => [fontStyle(theme), otherPages(theme)]} {...props}></p>
)

const GreenRightArrow = () => <RightArrowIcon width={21} height={29} />

const EmailSubscribe = () => {
  const [email, setEmail] = useState("")
  const placeholder = (
    <FormattedMessage id="emailAddress" defaultMessage="Email Address" />
  )

  const handleSubmit = () => {
    alert(email + " success to subscribe!")
  }

  const onChange = e => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        css={emailInput}
        type="text"
        name="email"
        id="email"
        placeholder={placeholder.props.defaultMessage}
        value={email}
        onChange={onChange}
      />
      <label>
        <button type="button" onClick={handleSubmit}>
          <GreenRightArrow />
        </button>
      </label>
    </form>
  )
}

const Subscribe = ({ ...props }) => (
  <div {...props}>
    <div css={subscribeContainer}>
      <p css={theme => [fontStyle(theme), subscribeTitle]}>
        <FormattedMessage
          id="subscribeToOurNewsLetter"
          defaultMessage={`<span>SUBSCRIBE</span> to our newsletter`}
          values={{
            span: str => <span css={subscribe}>{str}</span>,
          }}
        />
      </p>
    </div>
    <div css={contentContainer}>
      <div css={contentLeftContainer}>
        <div css={emailAddressContainer}>
          <EmailSubscribe />
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
          <SocialIcon src={weiboIcon} alt="weibo" last={true} />
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
      <FormattedMessage
        id="AllRightsReserved"
        defaultMessage="ALL RIGHTS RESERVED © 2019 Measurable AI"
      />
    </p>
  </div>
)

export default Subscribe
