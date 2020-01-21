import React, { useEffect, useRef, useReducer, useMemo } from "react"
import Select, { components } from "react-select"
import { useTheme } from "emotion-theming"

import InputBox from "@/components/InputBox"
import TextInput from "@/components/TextInput"

import countryData from "./countryData.json"
import { phoneInput, numberInput } from "./style"
import { getCountryFlagEmoji } from "@/utils"

const options = countryData.map(dataItem => ({
  value: dataItem.dial_code,
  label: `${getCountryFlagEmoji(dataItem.code)} ${dataItem.dial_code}`,
}))

const DropdownIndicator = props => (
  <components.DropdownIndicator width={8} {...props}>
    <svg
      height={14}
      width={14}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      css={{
        display: "inline-block",
        fill: "currentColor",
        lineHeight: 1,
        stroke: "currentColor",
        strokeWidth: 0,
      }}
    >
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
    </svg>
  </components.DropdownIndicator>
)

const initialState = {
  selectedOption: options[0],
  countryCodeNumber: options[0].value,
  phoneNumber: "",
  formattedNumber: "",
}
const SET_SELECTED_OPTION = "setSelectedOption"
const SET_PHONE_NUMBER = "setPhoneNumber"
const reducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_OPTION: {
      return {
        ...state,
        selectedOption: action.payload,
        countryCodeNumber: action.payload.value,
        formattedNumber:
          action.payload.value && state.phoneNumber
            ? `${action.payload.value}${state.phoneNumber}`
            : "",
      }
    }
    case SET_PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.payload,
        formattedNumber:
          state.countryCodeNumber && action.payload
            ? `${state.countryCodeNumber}${action.payload}`
            : "",
      }
    }
    default:
      throw new Error()
  }
}

const PhoneInput = ({ onChange, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      if (typeof onChange === "function") {
        onChange(state.formattedNumber)
      }
    } else {
      didMountRef.current = true
    }
  }, [onChange, state.formattedNumber])

  const theme = useTheme()
  const styles = useMemo(
    () => ({
      container: provided => ({
        ...provided,
        display: "inline-block",
        width: "10.5rem",
      }),
      control: provided => ({
        ...provided,
        backgroundColor: "transparent",
        border: `solid 1px ${theme.colors.greens.dark}`,
        boxShadow: "none",
        borderRadius: 0,
        padding: "0.8rem 0.9rem",
        ":hover": {
          border: `solid 1px ${theme.colors.greens.dark}`,
          boxShadow: `0 0 0 1px ${theme.colors.greens.dark}`,
        },
        cursor: "pointer",
        minHeight: "auto",
      }),
      valueContainer: provided => ({
        ...provided,
        padding: 0,
        lineHeight: 1,
      }),
      input: provided => ({
        ...provided,
        padding: 0,
        margin: 0,
      }),
      singleValue: () => ({
        fontSize: "1.4rem",
        lineHeight: 1,
      }),
      indicatorSeparator: () => ({}),
      dropdownIndicator: () => ({
        display: "flex",
        justifyContent: "center",
        color: theme.colors.greens.dark,
      }),
      menu: provided => ({
        ...provided,
        border: `solid 1px ${theme.colors.greens.dark}`,
        boxShadow: "none",
        borderRadius: 0,
      }),
      option: (provided, state) => ({
        ...provided,
        ":active": null,
        backgroundColor: "transparent",
        ...(state.isSelected && { color: theme.colors.greens.dark }),
        fontSize: "1.4rem",
        paddingTop: "0.6rem",
        paddingBottom: "0.6rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }),
    }),
    [theme.colors.greens.dark]
  )

  return (
    <InputBox label="Phone Number" labelFor="countryCodeNumber" {...props}>
      <div css={phoneInput}>
        <Select
          inputId="countryCodeNumber"
          styles={styles}
          components={{ DropdownIndicator }}
          value={state.selectedOption}
          onChange={newOption =>
            dispatch({ type: SET_SELECTED_OPTION, payload: newOption })
          }
          options={options}
        />
        <TextInput
          type="tel"
          id="phone"
          css={numberInput}
          value={state.phoneNumber}
          onChange={event =>
            dispatch({ type: SET_PHONE_NUMBER, payload: event.target.value })
          }
        />
      </div>
    </InputBox>
  )
}

export default PhoneInput
