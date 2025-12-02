import React, { useMemo, useEffect, useRef } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useTheme } from "emotion-theming"
import LabelTextInput from "@/components/TalkToUs/LabelTextInput/index.js"
import Button from "@/components/Button"
import ClipLoader from "react-spinners/ClipLoader"
import useForm, { SUBMITTED, SUBMITTING, FAILED } from "@/hooks/useForm"
import { REQUEST_MIDDLE_EAST_ONLINE_DELIVERY_REPORT } from "@/api"
import {
  formSection,
  formWrapper,
  checkboxLabel,
  centeredText,
  errorText,
  consent,
  formIntro,
} from "./style"

const initialFormState = {
  customer_name: "",
  email_address: "",
  title: "",
  company_name: "",
  linkedin: "",
  request_demo: true,
}

const AnnualReportForm = () => {
  const theme = useTheme()
  const intl = useIntl()

  const formOptions = useMemo(
    () => ({
      uri: REQUEST_MIDDLE_EAST_ONLINE_DELIVERY_REPORT,
      additionalFormBody: {
        locale: String(intl.locale).toLowerCase(),
        should_subscribe: true,
      },
      optionalStates: ["request_demo"],
    }),
    [intl.locale]
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
      <div css={formWrapper}>
        <div css={formIntro}>
          <h3>Sign Up to Download</h3>
        </div>
        {formStatus !== SUBMITTED && (
          <>
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
                    defaultMessage="Work Email"
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
                    defaultMessage="Job Title"
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
                  checked={formFields.request_demo.value}
                  onChange={e =>
                    formFields.request_demo.onChange(e.target.checked)
                  }
                />
                <span>I would like a demo of Measurable AI.</span>
              </label>

              {formStatus !== SUBMITTED && (
                <>
                  <Button type="submit" disabled={disabled}>
                    {formStatus === SUBMITTING ? (
                      <ClipLoader size={14} color={theme.colors.white} />
                    ) : (
                      <FormattedMessage
                        id="Download Report"
                        defaultMessage="Download Report"
                      />
                    )}
                  </Button>

                  <p css={consent}>
                    By submitting your information, you agree to the privacy
                    policy and to learn more about offers and promotions from
                    Measurable AI.
                  </p>
                </>
              )}
            </form>
          </>
        )}
        {formStatus === SUBMITTED && (
          <p css={centeredText}>
            Thank you for your interest. We will be sending you the report
            shortly.
          </p>
        )}
        {formStatus !== SUBMITTED && formStatus === FAILED && (
          <p css={errorText}>{errorMessage.current}</p>
        )}
      </div>
    </section>
  )
}

export default AnnualReportForm
