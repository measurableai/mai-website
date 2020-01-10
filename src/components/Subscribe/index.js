import React, { useMemo } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import {
  form,
  errorMessage,
  fontStyle,
  subscribeContainer,
  subscribe,
  subscribeTitle,
  emailAddressContainer,
  emailInput,
  arrowButton,
} from "./style"

import RightArrowIcon from "@/assets/green-right-arrow.svg"
import useForm from "@/hooks/useForm"
import { SUBSCRIBE } from "@/api"

const initialFormState = {
  email_address: "",
}

const EmailSubscribe = () => {
  const intl = useIntl()

  const formOptions = useMemo(
    () => ({
      uri: SUBSCRIBE,
      additionalFormBody: {
        locale: String(intl.locale).toLowerCase(),
      },
    }),
    [intl.locale]
  )

  const { formFields, formStatus, handleSubmit, disabled } = useForm(
    initialFormState,
    formOptions
  )

  return (
    <div>
      <form css={form} onSubmit={handleSubmit}>
        <input
          css={emailInput}
          type="email"
          name="email"
          id="email"
          // TODO: use intl to handle
          placeholder="Email Address"
          value={formFields.email_address.value}
          onChange={event =>
            formFields.email_address.onChange(event.target.value)
          }
        />
        <label>
          <button css={arrowButton} type="submit" disabled={disabled}>
            <RightArrowIcon width={21} height={29} />
          </button>
        </label>
      </form>
      {formStatus === "submitted" ? (
        <p>
          <FormattedMessage
            id="formSubmitSuccess"
            defaultMessage="Your request has been sent!"
          />
        </p>
      ) : formStatus === "failed" ? (
        <p css={errorMessage}>
          <FormattedMessage
            id="formSubmitFailed"
            defaultMessage="We failed to send your request. Please try again later!"
          />
        </p>
      ) : null}
    </div>
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
