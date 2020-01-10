import React, { useMemo } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import Button from "@/components/Button"
import LabelTextInput from "../LabelTextInput"

import {
  form,
  message,
  textarea,
  footer,
  submittedMessage,
  errorMessage,
  submitButton,
} from "./style"

import useForm from "@/hooks/useForm"
import { CONTACT_US } from "@/api"

const SUBMITTED = "submitted"
const FAILED = "failed"

const initialFormState = {
  customer_name: "",
  company_name: "",
  email_address: "",
  message: "",
}

const Callback = () => {
  const intl = useIntl()

  const formOptions = useMemo(
    () => ({
      uri: CONTACT_US,
      additionalFormBody: {
        request_phone_callback: false,
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
    // TODO: merge component with Callback
    <form css={form} onSubmit={handleSubmit}>
      <div>
        <p css={message}>
          <FormattedMessage
            id="leaveMessageForm.description"
            defaultMessage="Leave us a message and we’ll get back to you asap."
          />
        </p>
        <LabelTextInput
          label={
            <FormattedMessage
              id="leaveMessageForm.name"
              defaultMessage="Name"
            />
          }
          id="name"
          value={formFields.customer_name.value}
          onChange={event =>
            formFields.customer_name.onChange(event.target.value)
          }
        />
        <LabelTextInput
          label={
            <FormattedMessage
              id="leaveMessageForm.companyName"
              defaultMessage="Company Name"
            />
          }
          id="companyName"
          value={formFields.company_name.value}
          onChange={event =>
            formFields.company_name.onChange(event.target.value)
          }
        />
        <LabelTextInput
          label={
            <FormattedMessage
              id="leaveMessageForm.email"
              defaultMessage="Email"
            />
          }
          id="email"
          value={formFields.email_address.value}
          onChange={event =>
            formFields.email_address.onChange(event.target.value)
          }
        />
        <LabelTextInput
          css={textarea}
          label={
            <FormattedMessage
              id="leaveMessageForm.message"
              defaultMessage="Message"
            />
          }
          as="textarea"
          rows={3}
          id="message"
          value={formFields.message.value}
          onChange={event => formFields.message.onChange(event.target.value)}
        />
      </div>
      <div css={footer}>
        {formStatus === SUBMITTED ? (
          <p css={submittedMessage}>
            <FormattedMessage
              id="formSubmitSuccess"
              defaultMessage="Your request has been sent!"
            />
          </p>
        ) : formStatus === FAILED ? (
          <p css={theme => [submittedMessage, errorMessage(theme)]}>
            <FormattedMessage
              id="formSubmitFailed"
              defaultMessage="We failed to send your request. Please try again later!"
            />
          </p>
        ) : null}
        <Button type="submit" css={submitButton} disabled={disabled}>
          SUBMIT
        </Button>
      </div>
    </form>
  )
}

export default Callback
