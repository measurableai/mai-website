import React, { useCallback, useMemo } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import PhoneInput from "./PhoneInput"
import Button from "@/components/Button"
import LabelTextInput from "../LabelTextInput"

import {
  form,
  message,
  inputContainer,
  footer,
  errorMessage,
  submitButton,
} from "./style"
import useForm from "@/hooks/useForm"
import { CONTACT_US } from "@/api"

const SUBMITTED = "submitted"
const FAILED = "failed"

const initialFormState = {
  phone_number: "",
  customer_name: "",
  company_name: "",
}

const Callback = () => {
  const intl = useIntl()

  const formOptions = useMemo(
    () => ({
      uri: CONTACT_US,
      additionalFormBody: {
        request_phone_callback: true,
        locale: String(intl.locale).toLowerCase(),
      },
    }),
    [intl.locale]
  )

  const { formFields, formStatus, handleSubmit, disabled } = useForm(
    initialFormState,
    formOptions
  )

  const handleChangePhoneNumber = useCallback(
    value => formFields.phone_number.onChange(value),
    [formFields.phone_number]
  )

  return (
    <form css={form} onSubmit={handleSubmit}>
      <div>
        <p css={message}>
          <FormattedMessage
            id="callbackForm.description"
            defaultMessage="Enter your phone number and we’ll call you back asap."
          />
        </p>
        <PhoneInput css={inputContainer} onChange={handleChangePhoneNumber} />
        <LabelTextInput
          label={
            <FormattedMessage id="callbackForm.name" defaultMessage="Name" />
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
              id="callbackForm.companyName"
              defaultMessage="Name"
            />
          }
          id="companyName"
          value={formFields.company_name.value}
          onChange={event =>
            formFields.company_name.onChange(event.target.value)
          }
        />
      </div>
      <div css={footer}>
        {formStatus === SUBMITTED ? (
          <p>
            <FormattedMessage
              id="formSubmitSuccess"
              defaultMessage="Your request has been sent!"
            />
          </p>
        ) : formStatus === FAILED ? (
          <p css={errorMessage}>
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
