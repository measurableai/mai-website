import React, { useCallback, useContext, useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { TalkToUsContext } from "@/context/talkToUs"
import { SUBMITTED } from "@/hooks/useForm"

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
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormStateChange = useCallback(_formState => {
    setIsFormSubmitted(_formState === SUBMITTED)
  }, [])

  return (
    <div>
      <button onClick={() => open()} css={theme => helpButton(theme, isOpen)}>
        <span css={helpSymbol}>?</span>
        <FormattedMessage id="requestADemo" defaultMessage="REQUEST A DEMO" />
      </button>
      <div css={theme => container(theme, !isOpen)}>
        <div css={popoverHeader}>
          {isFormSubmitted ? (
            <FormattedMessage
              id="weWillBeInTouch"
              defaultMessage="WE WILL BE IN TOUCH"
            />
          ) : (
            <FormattedMessage
              id="requestADemo"
              defaultMessage="REQUEST A DEMO"
            />
          )}
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
        <div css={popoverBody}>
          {state && <LeaveMessage onFormStateChange={handleFormStateChange} />}
        </div>
      </div>
    </div>
  )
}

export default TalkToUs
