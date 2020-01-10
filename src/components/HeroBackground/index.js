import React from "react"

import BackgroundWithNavigator from "@/components/BackgroundWithNavigator"

import { background } from "./style"

const HeroBackground = ({ children, ...props }) => (
  <BackgroundWithNavigator css={background} {...props}>
    {children}
  </BackgroundWithNavigator>
)

export default HeroBackground
