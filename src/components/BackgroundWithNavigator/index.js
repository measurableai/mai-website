import React, { useCallback, useReducer, useRef } from "react"
import { useWindowScroll } from "react-use"
import ReactResizeDetector from "react-resize-detector"
import { css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import ContentBox from "@/components/ContentBox"

import { background, navigation, line, cirlce, anchor } from "./style"

const interplolate = (from1, to1, from2, to2, x) => {
  if (x <= from1) {
    return from2
  }

  if (x >= to1) {
    return to2
  }

  return ((x - to1) / (from1 - to1)) * (from2 - to2) + to2
}

const Navigator = ({ mode, height }) => {
  const theme = useTheme()

  const color = mode === "dark" ? theme.colors.purples.normal : "white"

  return (
    <div css={navigation}>
      <div
        css={line(color)}
        style={{
          height,
        }}
      ></div>
      <div css={cirlce(color)}></div>
      <div
        css={css`
          ${line(color)}
          flex: 1;
        `}
      ></div>
    </div>
  )
}

const SET_POSITION = "setPosition"
const SET_HEIGHT = "setHeight"

const initialState = {
  position: {
    top: 0,
  },
  height: 0,
  top: 0,
  bottom: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_POSITION: {
      return {
        ...state,
        position: action.payload,
        top: action.payload.top,
        bottom: action.payload.top + state.height,
      }
    }
    case SET_HEIGHT: {
      return {
        ...state,
        height: action.payload,
        // TODO: change 80 to variable
        bottom: state.position.top + action.payload + 80,
      }
    }
    default:
      throw new Error()
  }
}

const BackgroundWithNavigator = ({
  children,
  showNavigator,
  backgroundComponent,
  mode,
  isHover,
  href,
  ...props
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nodeRef = useRef(null)
  const { y } = useWindowScroll()

  const measuredRef = useCallback(node => {
    if (node !== null) {
      dispatch({
        type: SET_POSITION,
        payload: node.getBoundingClientRect(),
      })

      nodeRef.current = node
    }
  }, [])

  const handleResize = useCallback((_width, height) => {
    dispatch({
      type: SET_HEIGHT,
      payload: height,
    })

    if (nodeRef.current) {
      dispatch({
        type: SET_POSITION,
        payload: nodeRef.current.getBoundingClientRect(),
      })
    }
  }, [])

  const height = interplolate(
    state.top,
    (state.bottom + state.top) / 2,
    0,
    // TODO: change 70 to variable
    70,
    y
  )
  const childWithProp = React.Children.map(children, child => {
    return isHover ? React.cloneElement(child, { isHover: isHover }) : children
  })
  return (
    <div ref={measuredRef} css={background} {...props}>
      {href && (
        <OutboundLink
          css={anchor}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
      {showNavigator && <Navigator height={height} mode={mode} />}
      {backgroundComponent}
      <ContentBox>{childWithProp}</ContentBox>
      <ReactResizeDetector handleHeight onResize={handleResize} />
    </div>
  )
}

BackgroundWithNavigator.defaultProps = {
  showNavigator: false,
  mode: "light",
}

export default BackgroundWithNavigator
