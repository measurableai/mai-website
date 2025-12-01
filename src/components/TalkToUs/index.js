import React, { useCallback, useContext, useState } from "react"
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
  popoverPadding,
  container,
} from "./style"

const TalkToUs = () => {
  const { state, isOpen, open, close, onClose } = useContext(TalkToUsContext)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  let newForm = true
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search)
    newForm = params.get("form") !== "n"
  }

  const handleSubmit = useCallback(() => {
    setIsFormSubmitted(true)
  }, [])

  const open_and_gtag = useCallback(() => {
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : ""

    if (pathname.includes("asia-food-delivery-report")) {
      if (typeof window.gtag !== "undefined" && !isOpen) {
        window.gtag("event", "conversion", {
          send_to: "AW-11082494271/KdnGCLL6z4wYEL_ixaQp",
        })
      }
    }

    open()
  }, [isOpen, open])

  return (
    <div>
      <button
        onClick={() => open_and_gtag()}
        css={theme => helpButton(theme, isOpen)}
      >
        <span css={helpSymbol}>?</span>
        <FormattedMessage id="requestADemo" defaultMessage="REQUEST A DEMO" />
      </button>
      <div css={theme => container(theme, !isOpen, newForm)}>
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
        <div css={[popoverBody, !newForm && popoverPadding]}>
          {state && <LeaveMessage onSubmit={handleSubmit} />}
        </div>
      </div>
    </div>
  )
}

export default TalkToUs
