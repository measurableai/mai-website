import React, { useMemo } from "react"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { useTheme } from "emotion-theming"

import Button from "@/components/Button"
import LabelTextInput from "../LabelTextInput"
import ClipLoader from "react-spinners/ClipLoader"

import {
  form,
  message,
  textarea,
  footer,
  submittedMessage,
  errorMessage,
  submitButton,
} from "./style"

import useForm, { SUBMITTED, SUBMITTING, FAILED } from "@/hooks/useForm"
import { CONTACT_US } from "@/api"

const initialFormState = {
  customer_name: "",
  company_name: "",
  email_address: "",
  message: "",
  phone: "",
}

const Callback = () => {
  const theme = useTheme()
  const intl = useIntl()

  const formOptions = useMemo(
    () => ({
      uri: CONTACT_US,
      additionalFormBody: {
        request_phone_callback: false,
        locale: String(intl.locale).toLowerCase(),
        should_subscribe: true,
      },
      optionalStates: ["phone"],
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
            defaultMessage="Unlock the power of transactional e-mail data to discover new, actionable insights."
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
          label={
            <FormattedMessage
              id="leaveMessageForm.phone"
              defaultMessage="Phone Number"
            />
          }
          id="phone"
          value={formFields.phone.value}
          optional
          onChange={event => formFields.phone.onChange(event.target.value)}
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
        <p css={message}>
          <FormattedMessage
            id="leaveMessageForm.receiveUpdates"
            defaultMessage="By submitting the form, you agree to the <span1>privacy policy</span1>, <span2>terms of service</span2> and to receive updates about Measurable AI"
            values={{
              span1: str => <Link to="/privacyPolicy">{str}</Link>,
              span2: str => <Link to="/termsOfUse">{str}</Link>,
            }}
          />
        </p>
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
          {formStatus === SUBMITTING ? (
            <ClipLoader size={14} color={theme.colors.purples.normal} />
          ) : formStatus === SUBMITTED ? (
            <FormattedMessage id="done" defaultMessage="Done" />
          ) : (
            <FormattedMessage id="submit" defaultMessage="Submit" />
          )}
        </Button>
      </div>
    </form>
  )
}

export default Callback
