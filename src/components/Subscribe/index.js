import React, { useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  fontStyle,
  subscribeContainer,
  subscribe,
  subscribeTitle,
  emailAddressContainer,
  emailInput,
  arrowButton,
} from "./style"

import RightArrowIcon from "@/assets/green-right-arrow.svg"

import useMedia from "@/hooks/useMedia"

const EmailSubscribe = () => {
  const buttonWidth = useMedia([15.8], 21)
  const buttonHeight = useMedia([21.8], 29)
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
        <button css={arrowButton} type="button" onClick={handleSubmit}>
          <RightArrowIcon width={buttonWidth} height={buttonHeight} />
        </button>
      </label>
    </form>
  )
}

const Subscribe = ({ ...props }) => {
  const isMobile = useMedia([true], false)
  return (
    <div {...props}>
      <div css={subscribeContainer}>
        <p css={theme => [fontStyle(theme), subscribeTitle]}>
          <FormattedMessage
            id="subscribeToOurNewsLetter"
            defaultMessage={`<span>SUBSCRIBE</span> to our newsletter`}
            values={{
              span: str =>
                isMobile ? (
                  <span css={subscribe}>
                    {str}
                    <br />
                  </span>
                ) : (
                  <span css={subscribe}>{str}</span>
                ),
            }}
          />
        </p>
      </div>
      <div css={emailAddressContainer}>
        <EmailSubscribe />
      </div>
    </div>
  )
}

export default Subscribe
