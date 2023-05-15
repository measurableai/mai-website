import React, { useMemo, useState, useEffect, useRef } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useTheme } from "emotion-theming"
import LabelTextInput from "@/components/TalkToUs/LabelTextInput/index.js"
import Button from "@/components/Button"
import ClipLoader from "react-spinners/ClipLoader"
import useForm, { SUBMITTED, SUBMITTING, FAILED } from "@/hooks/useForm"
import { REQUEST_RIDE_HAILING_REPORT } from "@/api"
import { formSection, formWrapper, checkboxLabel, centeredText } from "./style"

const initialFormState = {
  customer_name: "",
  email_address: "",
  title: "",
  company_name: "",
  linkedin: "",
}

const AnnualReportForm = () => {
  const theme = useTheme()
  const intl = useIntl()

  const [isDemoRequested, setIsDemoRequested] = useState(true)

  const formOptions = useMemo(
    () => ({
      uri: REQUEST_RIDE_HAILING_REPORT,
      additionalFormBody: {
        locale: String(intl.locale).toLowerCase(),
        request_demo: isDemoRequested,
        should_subscribe: true,
      },
    }),
    [intl.locale, isDemoRequested]
  )

  const { formFields, formStatus, handleSubmit, disabled, errorCode } = useForm(
    initialFormState,
    formOptions,
    () => {
      // TODO: add gtag
      // if (typeof window.gtag !== "undefined") {
      //   window.gtag("event", "conversion", {
      //     send_to: "AW-11082494271/jsEsCNb0uYwYEL_ixaQp",
      //   })
      // }
    }
  )

  let errorMessage = useRef(
    "Oops! Something went wrong. Please try again later. If the issue persists, please contact us for further assistance."
  )
  useEffect(() => {
    if (errorCode === 102) {
      errorMessage.current =
        "The request body is invalid. Please contact us for further assistance."
    }
    if (errorCode === 200) {
      errorMessage.current =
        "The request form is temporarily closed. Please get in touch with us for assistance."
    }
    if (errorCode === 201) {
      errorMessage.current = "You have already signed up to request the report."
    }
  }, [errorCode])

  return (
    <section css={formSection}>
      <h3>Download Free Report</h3>
      <div css={formWrapper}>
        {formStatus !== SUBMITTED && (
          <>
            <p>
              Sign Up for the{" "}
              <i>
                Measurable AI 2019-2023 Asia and Americas Ride-hailing Annual
                Report
              </i>{" "}
              to understand the market share dynamics and drivers underpinning
              the major players in the ride-hailing industry.
            </p>
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
                    id="annualReportForm.companyEmail"
                    defaultMessage="Company Email"
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
                    id="annualReportForm.title"
                    defaultMessage="Title"
                  />
                }
                id="title"
                value={formFields.title.value}
                onChange={event =>
                  formFields.title.onChange(event.target.value)
                }
              />
              <LabelTextInput
                label={
                  <FormattedMessage
                    id="annualReportForm.company"
                    defaultMessage="Company"
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
                    id="annualReportForm.linkedin"
                    defaultMessage="LinkedIn"
                  />
                }
                id="linkedin"
                value={formFields.linkedin.value}
                onChange={event =>
                  formFields.linkedin.onChange(event.target.value)
                }
              />
              <label htmlFor="demo" css={checkboxLabel}>
                <input
                  type="checkbox"
                  id="demo"
                  name="demo"
                  checked={isDemoRequested}
                  onChange={e => setIsDemoRequested(e.target.checked)}
                />
                <span>I would like a demo of Measurable AI.</span>
              </label>

              <p>
                By submitting your information, you agree to the privacy policy
                and to learn more about offers and promotions from Measurable
                AI.
              </p>

              <Button type="submit" disabled={disabled}>
                {formStatus === SUBMITTING ? (
                  <ClipLoader size={14} color={theme.colors.white} />
                ) : (
                  <FormattedMessage id="submit" defaultMessage="Submit" />
                )}
              </Button>
            </form>
          </>
        )}
        {formStatus === SUBMITTED && (
          <p css={centeredText}>
            Thank you for submission. We have sent the annual report to your
            email inbox.
          </p>
        )}

        {formStatus !== SUBMITTED && formStatus === FAILED && (
          <p css={centeredText}>{errorMessage.current}</p>
        )}
      </div>
    </section>
  )
}

export default AnnualReportForm
