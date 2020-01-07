import React, { useReducer, useCallback, forwardRef } from "react"
import Popup from "reactjs-popup"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import Callback from "./Callback"

import {
  container,
  content,
  helpButton,
  helpSymbol,
  popoverContainer,
  popoverHeader,
  closeButton,
  closeSymbol,
  popoverBody,
  menuItem,
  menuItemImage,
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
import CallbackIconSrc from "@/images/ico-help-01.svg"
import MessageIconSrc from "@/images/ico-help-02.svg"

import mailogo from "@/images/mai-logo-2.svg"
import mdtLogo from "@/images/mdt-logo.svg"
import facebookIcon from "@/images/btn-facebook.svg"
import linkedinIcon from "@/images/btn-linkedin.svg"
import mediumIcon from "@/images/btn-medium.svg"
import twitterIcon from "@/images/btn-twitter.svg"
import wechatIcon from "@/images/btn-wechat.svg"
import weiboIcon from "@/images/btn-weibo.svg"

const MenuItem = forwardRef(({ src, text, alt, ...props }, ref) => (
  <button css={menuItem} ref={ref} {...props}>
    <img
      css={menuItemImage}
      src={CallbackIconSrc}
      width={32}
      height={32}
      alt={alt}
    />
    {text}
  </button>
))

const PAGE_CALLBACK = "callback"
const PAGE_MESSAGE = "message"
const initialState = {
  open: false,
  closeCount: 0,
  openCallback: false,
  page: "",
}

const OPEN = "open"
const CLOSE = "close"
const GO_TO_CALLBACK = "goToCallback"
const GO_TO_MESSAGE = "goToMessage"

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN: {
      return {
        ...state,
        open: true,
      }
    }
    case CLOSE: {
      return {
        ...state,
        closeCount: state.closeCount + 1,
        open: false,
        page: "",
      }
    }
    case GO_TO_CALLBACK: {
      return {
        ...state,
        page: PAGE_CALLBACK,
      }
    }
    case GO_TO_MESSAGE: {
      return {
        ...state,
        page: PAGE_MESSAGE,
      }
    }
    default:
      throw new Error()
  }
}

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

const Footer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onClose = useCallback(() => {
    dispatch({ type: CLOSE })
  }, [])

  return (
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
            defaultMessage="ALL RIGHTS RESERVED © 2019 Measurable AI"
          />
        </p>
      </div>
      <div css={container}>
        <div css={content}>
          <Popup
            key={state.closeCount}
            trigger={
              <button css={helpButton}>
                <span css={helpSymbol}>?</span>HELP
              </button>
            }
            closeOnDocumentClick
            contentStyle={popoverContainer}
            position="top center"
            onClose={onClose}
          >
            <>
              <div css={popoverHeader}>
                HELP
                <button css={closeButton} onClick={onClose}>
                  <div css={closeSymbol} />
                </button>
              </div>
              <div css={popoverBody}>
                {state.page === PAGE_CALLBACK && <Callback />}
                {!state.page && (
                  <>
                    <MenuItem
                      onClick={() => dispatch({ type: GO_TO_CALLBACK })}
                      src={CallbackIconSrc}
                      text={
                        <FormattedMessage
                          id="requestCallback"
                          defaultMessage="Request a callback"
                        />
                      }
                    />
                    <MenuItem
                      src={MessageIconSrc}
                      text={
                        <FormattedMessage
                          id="leaveMessage"
                          defaultMessage="Leave a message"
                        />
                      }
                    />
                  </>
                )}
              </div>
            </>
          </Popup>
        </div>
      </div>
    </footer>
  )
}

export default Footer
