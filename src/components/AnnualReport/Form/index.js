import React, { useMemo, useState } from "react"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { useTheme } from "emotion-theming"
import LabelTextInput from "@/components/TalkToUs/LabelTextInput/index.js"
import Button from "@/components/Button"
import ClipLoader from "react-spinners/ClipLoader"
import { checkboxLabel } from "./style"
import useForm, { SUBMITTED, SUBMITTING, FAILED } from "@/hooks/useForm"
import { REQUEST_ANNUAL_REPORT } from "@/api"
import { formSection, formWrapper } from "./style"

const initialFormState = {
  customer_name: "",
  email_address: "",
  company_name: "",
}

const AnnualReportForm = ({ onSubmit, ...props }) => {
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
    <section css={formSection}>
      <h3>Download Free Report</h3>
      <div css={formWrapper}>
        <p>
          Download the Measurable AI 2019-2022 Asia Food Delivery Report to
          understand the market share dynamics and drivers underpinning the
          major players in the heated food delivery sector across Asia.
        </p>
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
            Thank you for submission. We have sent you the annual report
            already. Please check you inbox!
          </p>
        )}
        {formStatus !== SUBMITTED && formStatus === FAILED && (
          <p>Something went wrong. Please try again later. </p>
        )}
      </div>
    </section>
  )
}

export default AnnualReportForm
