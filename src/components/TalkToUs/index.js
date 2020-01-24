import React, { useState, useReducer, useCallback, forwardRef } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import Callback from "./Callback"
import LeaveMessage from "./LeaveMessage"

import {
  helpButton,
  helpSymbol,
  popoverHeader,
  closeButton,
  closeSymbol,
  popoverBody,
  menuItem,
  menuItemImage,
  container,
} from "./style"

import CallbackIconSrc from "@/images/ico-help-01.svg"
import MessageIconSrc from "@/images/ico-help-02.svg"

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

const TalkToUs = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onClose = useCallback(() => {
    dispatch({ type: CLOSE })
  }, [])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        css={theme => helpButton(theme, isOpen)}
      >
        <span css={helpSymbol}>?</span>
        <FormattedMessage id="talkToUs" defaultMessage="TALK TO US" />
      </button>

      <div css={theme => container(theme, !isOpen)}>
        <div css={popoverHeader}>
          <FormattedMessage id="talkToUs" defaultMessage="TALK TO US" />
          <button
            css={closeButton}
            onClick={() => {
              setIsOpen(false)
              onClose()
            }}
          >
            <div css={closeSymbol} />
          </button>
        </div>
        <div css={popoverBody}>
          {state.page === PAGE_CALLBACK && <Callback />}
          {state.page === PAGE_MESSAGE && <LeaveMessage />}
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
                onClick={() => dispatch({ type: GO_TO_MESSAGE })}
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
      </div>
    </div>
  )
}

export default TalkToUs
