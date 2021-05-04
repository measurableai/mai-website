import React, { useContext } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { TalkToUsContext } from "@/context/talkToUs"

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

const TalkToUs = () => {
  const { state, isOpen, open, close, onClose } = useContext(TalkToUsContext)

  return (
    <div>
      <button onClick={() => open()} css={theme => helpButton(theme, isOpen)}>
        <span css={helpSymbol}>?</span>
        <FormattedMessage id="talkToUs" defaultMessage="TALK TO US" />
      </button>
      <div css={theme => container(theme, !isOpen)}>
        <div css={popoverHeader}>
          <FormattedMessage id="talkToUs" defaultMessage="TALK TO US" />
          <button
            css={closeButton}
            onClick={() => {
              close()
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
