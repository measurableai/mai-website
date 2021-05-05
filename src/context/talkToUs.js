import React, {
  createContext,
  useMemo,
  useReducer,
  useCallback,
  useState,
} from "react"

export const TalkToUsContext = createContext(false)

const PAGE_MESSAGE = "message"
const initialState = {
  open: false,
  closeCount: 0,
  openCallback: false,
  page: PAGE_MESSAGE,
}

const OPEN = "open"
const CLOSE = "close"

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN: {
      return {
        ...state,
        open: true,
      }
    }
    case CLOSE: {
      return {
        ...state,
        closeCount: state.closeCount + 1,
        open: false,
        page: "",
      }
    }
    default:
      throw new Error()
  }
}

export const TalkToUsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onClose = useCallback(() => {
    dispatch({ type: CLOSE })
  }, [])
  const [isOpen, setIsOpen] = useState(false)
  const talkToUsContext = useMemo(
    () => ({
      state: state,
      isOpen: isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      onClose,
    }),
    [state, isOpen, onClose]
  )

  return (
    <TalkToUsContext.Provider value={talkToUsContext}>
      {children}
    </TalkToUsContext.Provider>
  )
}

export default TalkToUsProvider
