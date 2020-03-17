import React, { useState, useReducer, useCallback } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import LeaveMessage from "./LeaveMessage"

import {
  helpButton,
  helpSymbol,
  popoverHeader,
  closeButton,
  closeSymbol,
  popoverBody,
  container,
} from "./style"

const PAGE_MESSAGE = "message"
const initialState = {
  open: false,
  closeCount: 0,
  openCallback: false,
  page: PAGE_MESSAGE,
}

const OPEN = "open"
const CLOSE = "close"

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
        <div css={popoverBody}>{state && <LeaveMessage />}</div>
      </div>
    </div>
  )
}

export default TalkToUs
