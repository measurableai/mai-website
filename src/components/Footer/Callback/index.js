import React, { useReducer, useCallback, useMemo } from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import PhoneInput from "./PhoneInput"
import InputBox from "@/components/InputBox"
import TextInput from "@/components/TextInput"
import Button from "@/components/Button"

import {
  form,
  message,
  inputContainer,
  textInput,
  footer,
  errorMessage,
  submitButton,
} from "./style"
import { CONTACT_US } from "@/api"

const LabelTextInput = ({ label, id, ...props }) => (
  <InputBox css={inputContainer} label={label} labelFor={id}>
    <TextInput css={textInput} id={id} {...props} />
  </InputBox>
)

const DRAFT = "draft"
const SUBMITTING = "submitting"
const SUBMITTED = "submitted"
const FAILED = "failed"
const initialState = {
  phoneNumber: "",
  name: "",
  companyName: "",
  formState: DRAFT,
}
const SET_PHONE_NUMBER = "setPhoneNumber"
const SET_NAME = "setName"
const SET_COMPANY_NAME = "setCompanyName"
const SET_FORM_STATE = "setFormState"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PHONE_NUMBER: {
      return {
        ...state,
        formState: DRAFT,
        phoneNumber: action.payload,
      }
    }
    case SET_NAME: {
      return {
        ...state,
        formState: DRAFT,
        name: action.payload,
      }
    }
    case SET_COMPANY_NAME: {
      return {
        ...state,
        formState: DRAFT,
        companyName: action.payload,
      }
    }
    case SET_FORM_STATE: {
      return {
        ...state,
        formState: action.payload,
      }
    }
    default:
      throw new Error()
  }
}

const Callback = () => {
  const intl = useIntl()
  const [state, dispatch] = useReducer(reducer, initialState)
  const disabled = useMemo(
    () =>
      !state.name ||
      !state.companyName ||
      !state.phoneNumber ||
      ![DRAFT, FAILED].includes(state.formState),
    [state.companyName, state.formState, state.name, state.phoneNumber]
  )
  const handleChangePhoneNumber = useCallback(
    value => dispatch({ type: SET_PHONE_NUMBER, payload: value }),
    []
  )
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()
      try {
        dispatch({ type: SET_FORM_STATE, payload: SUBMITTING })

        const response = await fetch(CONTACT_US, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request_phone_callback: true,
            phone_number: state.phoneNumber,
            customer_name: state.name,
            company_name: state.companyName,
            locale: String(intl.locale).toLowerCase(),
          }),
        })

        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status)
        }

        dispatch({ type: SET_FORM_STATE, payload: SUBMITTED })
      } catch (error) {
        dispatch({ type: SET_FORM_STATE, payload: FAILED })
      }
    },
    [intl.locale, state.companyName, state.name, state.phoneNumber]
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
          value={state.name}
          onChange={event =>
            dispatch({ type: SET_NAME, payload: event.target.value })
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
          value={state.companyName}
          onChange={event =>
            dispatch({ type: SET_COMPANY_NAME, payload: event.target.value })
          }
        />
      </div>
      <div css={footer}>
        {state.formState === SUBMITTED ? (
          <p>
            <FormattedMessage
              id="formSubmitSuccess"
              defaultMessage="Your request has been sent!"
            />
          </p>
        ) : state.formState === FAILED ? (
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
