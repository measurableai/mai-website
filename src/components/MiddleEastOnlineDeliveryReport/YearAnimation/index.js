import React from "react"
import Lottie from "react-lottie"
import animationData from "./animation.json"
import { css } from "@emotion/core"

const AnimationStyle = css`
  position: relative;
  width: 60%;
`

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const YearAnimation = () => (
  <div css={AnimationStyle}>
    <Lottie options={defaultOptions} title="2020-2024" />
  </div>
)

export default YearAnimation
