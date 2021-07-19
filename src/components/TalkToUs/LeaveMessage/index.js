import React, { useMemo, useState } from "react"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { useTheme } from "emotion-theming"

import Button from "@/components/Button"
import LabelTextInput from "../LabelTextInput"
import CheckBox from "../CheckBox"
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
  const [checkedTermsOfUse, setCheckedTermsOfUse] = useState(false)
  const [checkedReceiveUpdates, setReceiveUpdates] = useState(false)
  // should these two states include in the form?

  const formOptions = useMemo(
    () => ({
      uri: CONTACT_US,
      additionalFormBody: {
        request_phone_callback: false,
        locale: String(intl.locale).toLowerCase(),
        should_subscribe: checkedReceiveUpdates,
      },
      optionalStates: ["phone"],
    }),
    [intl.locale, checkedReceiveUpdates]
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
        <CheckBox
          checked={checkedTermsOfUse}
          onClick={() => setCheckedTermsOfUse(checked => !checked)}
          detail={
            <FormattedMessage
              id="leaveMessageForm.termsOfUse"
              defaultMessage="I agree to the <span1>Terms of Service</span1> and to the processing of my contact details in accordance with the <span2>Privacy Policy</span2>."
              values={{
                span1: str => <Link to="/termsOfUse">{str}</Link>,
                span2: str => <Link to="/privacyPolicy">{str}</Link>,
              }}
            />
          }
        />
        <CheckBox
          checked={checkedReceiveUpdates}
          onClick={() => setReceiveUpdates(checked => !checked)}
          detail={
            <FormattedMessage
              id="leaveMessageForm.receiveUpdates"
              defaultMessage="I would like to receive updates about Measurable AI. You can unsubscribe any time."
            />
          }
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
        <Button
          type="submit"
          css={submitButton}
          disabled={disabled || !checkedTermsOfUse}
        >
          {formStatus === SUBMITTING ? (
            <ClipLoader size={14} color={theme.colors.purples.normal} />
          ) : (
            "SUBMIT"
          )}
        </Button>
      </div>
    </form>
  )
}

export default Callback
