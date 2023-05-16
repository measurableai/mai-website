import React, { useMemo } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useTheme } from "emotion-theming"
import LabelTextInput from "@/components/TalkToUs/LabelTextInput/index.js"
import Button from "@/components/Button"
import ClipLoader from "react-spinners/ClipLoader"
import useForm, { SUBMITTED, SUBMITTING, FAILED } from "@/hooks/useForm"
import { REQUEST_FOOD_DELIVERY_REPORT } from "@/api"
import { formSection, formWrapper, checkboxLabel, centeredText } from "./style"

const initialFormState = {
  customer_name: "",
  email_address: "",
  company_name: "",
  request_demo: true,
}

const AnnualReportForm = () => {
  const theme = useTheme()
  const intl = useIntl()

  const formOptions = useMemo(
    () => ({
      uri: REQUEST_FOOD_DELIVERY_REPORT,
      additionalFormBody: {
        locale: String(intl.locale).toLowerCase(),
        should_subscribe: true,
      },
    }),
    [intl.locale]
  )

  const { formFields, formStatus, handleSubmit, disabled } = useForm(
    initialFormState,
    formOptions,
    () => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("event", "conversion", {
          send_to: "AW-11082494271/jsEsCNb0uYwYEL_ixaQp",
        })
      }
    }
  )

  return (
    <section css={formSection}>
      <h3>Download Free Report</h3>
      <div css={formWrapper}>
        {formStatus !== SUBMITTED && (
          <>
            <p>
              Download the{" "}
              <i>Measurable AI 2019-2022 Asia Online Delivery Report</i> to
              understand the market share dynamics and drivers underpinning the
              major players in the heated online food and grocery delivery
              sector across Asia.
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

              <p>
                By submitting the form, you agree to the privacy policy and to
                learn more about offers and promotions from Measurable AI.
              </p>

              <Button type="submit" disabled={disabled}>
                {formStatus === SUBMITTING ? (
                  <ClipLoader size={14} color={theme.colors.purples.normal} />
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
          <p css={centeredText}>
            Something went wrong. Please try again later.{" "}
          </p>
        )}
      </div>
    </section>
  )
}

export default AnnualReportForm
