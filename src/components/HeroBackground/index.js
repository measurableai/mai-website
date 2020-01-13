import React from "react"
import Lottie from "react-lottie"

import BackgroundWithNavigator from "@/components/BackgroundWithNavigator"

import { background, animation } from "./style"

import animationData from "./hero-animation.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const HeroBackground = ({ children, ...props }) => (
  <BackgroundWithNavigator
    css={background}
    backgroundComponent={
      <Lottie
        style={animation}
        options={defaultOptions}
        width={1920}
        height={760}
      />
    }
    {...props}
  >
    {children}
  </BackgroundWithNavigator>
)

export default HeroBackground
