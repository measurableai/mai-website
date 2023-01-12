import React, { useMemo, useState } from "react"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { useTheme } from "emotion-theming"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import LabelTextInput from "@/components/TalkToUs/LabelTextInput/index.js"
import Button from "@/components/Button"
import ClipLoader from "react-spinners/ClipLoader"
import {
  title,
  content1,
  content2,
  contentFontStyle,
  emailMargin,
  emailStyle,
  button,
  checkboxLabel,
} from "./style"
import useForm, { SUBMITTED, SUBMITTING, FAILED } from "@/hooks/useForm"
import { REQUEST_ANNUAL_REPORT } from "@/api"

const initialFormState = {
  customer_name: "",
  email_address: "",
  company_name: "",
}

const AnnualReportSection = ({ onSubmit, ...props }) => {
  const theme = useTheme()
  const intl = useIntl()

  const [isAgreementAccepted, setIsAgreementAccepted] = useState(false)

  const formOptions = useMemo(
    () => ({
      uri: REQUEST_ANNUAL_REPORT,
      additionalFormBody: {
        locale: String(intl.locale).toLowerCase(),
      },
    }),
    [intl.locale]
  )

  const { formFields, formStatus, handleSubmit, disabled } = useForm(
    initialFormState,
    formOptions,
    onSubmit
  )

  return (
    <div {...props}>
      <h1 css={title}>2022 Annual Report</h1>
      {formStatus !== SUBMITTED && (
        <form onSubmit={handleSubmit}>
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
                id="leaveMessageForm.email"
                defaultMessage="Email"
              />
            }
            id="email"
            type="email"
            name="email"
            value={formFields.email_address.value}
            onChange={event =>
              formFields.email_address.onChange(event.target.value)
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
          <label for="agreement" css={checkboxLabel}>
            <input
              type="checkbox"
              id="agreement"
              name="agreement"
              value={isAgreementAccepted}
              onClick={() => setIsAgreementAccepted(!isAgreementAccepted)}
            />
            <span>
              By submitting the form, you agree to the{" "}
              <Link to="/privacyPolicy">privacy policy</Link>,{" "}
              <Link to="/termsOfUse">terms of service</Link> of Measurable AI
            </span>
          </label>

          <Button type="submit" disabled={disabled || !isAgreementAccepted}>
            {formStatus === SUBMITTING ? (
              <ClipLoader size={14} color={theme.colors.purples.normal} />
            ) : (
              <FormattedMessage id="submit" defaultMessage="Submit" />
            )}
          </Button>
        </form>
      )}
      {formStatus === SUBMITTED && (
        <p>
          Thank you for submission. We have sent you the annual report already.
          Please check you inbox!
        </p>
      )}
      {formStatus !== SUBMITTED && formStatus === FAILED && (
        <p>Something went wrong. Please try again later. </p>
      )}
    </div>
  )
}

export default AnnualReportSection
