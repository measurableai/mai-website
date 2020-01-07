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
        <button css={arrowButton} type="button" onClick={handleSubmit}>
          <RightArrowIcon width={21} height={29} />
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
    <div css={emailAddressContainer}>
      <EmailSubscribe />
    </div>
  </div>
)

export default Subscribe
