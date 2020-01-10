import { useMemo, useReducer, useCallback } from "react"

const DRAFT = "draft"
const SUBMITTING = "submitting"
const SUBMITTED = "submitted"
const FAILED = "failed"

const initialState = {
  status: DRAFT,
  errorCode: 0,
}
const SET_FIELD = "setField"
const SET_FORM_STATE = "setFormState"
const SET_ERROR_CODE = "setErrorCode"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FIELD: {
      return {
        ...state,
        status: DRAFT,
        [action.payload.name]: action.payload.value,
      }
    }
    case SET_FORM_STATE: {
      return {
        ...state,
        status: action.payload,
      }
    }
    case SET_ERROR_CODE: {
      return {
        ...state,
        errorCode: action.payload,
      }
    }
    default:
      throw new Error()
  }
}

export default (initialFormState, { uri, additionalFormBody = null } = {}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...initialFormState,
  })

  const formFields = {}
  Object.keys(initialFormState).forEach(key => {
    const formValue = state[key]
    const formField = useMemo(
      () => ({
        value: formValue,
        onChange: value =>
          dispatch({
            type: SET_FIELD,
            payload: {
              name: key,
              value,
            },
          }),
      }),
      [formValue, key]
    )

    formFields[key] = formField
  })

  const disabled = useMemo(
    () =>
      Object.keys(initialFormState).some(key => !state[key]) ||
      ![DRAFT, FAILED].includes(state.status),
    [initialFormState, state]
  )

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()
      try {
        dispatch({ type: SET_FORM_STATE, payload: SUBMITTING })

        const formBody = {}
        Object.keys(initialFormState).forEach(
          key => (formBody[key] = state[key])
        )

        const response = await fetch(uri, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formBody,
            ...additionalFormBody,
          }),
        })

        if (!response.ok) {
          const errorBody = await response.json()
          if (errorBody.error_code) {
            dispatch({ type: SET_ERROR_CODE, payload: errorBody.error_code })
          }
          throw new Error("HTTP error, status = " + response.status)
        }

        dispatch({ type: SET_FORM_STATE, payload: SUBMITTED })
      } catch (error) {
        dispatch({ type: SET_FORM_STATE, payload: FAILED })
      }
    },
    [additionalFormBody, initialFormState, state, uri]
  )

  return {
    formFields,
    formStatus: state.status,
    handleSubmit,
    disabled,
    errorCode: state.errorCode,
  }
}
