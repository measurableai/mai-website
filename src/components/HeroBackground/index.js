import React from "react"

import ContentBox from "@/components/ContentBox"
import { background } from "./style"

const Background = ({ children }) => <div css={background}>{children}</div>

const HeroBackground = ({ children }) => (
  <Background>
    <ContentBox>{children}</ContentBox>
  </Background>
)

export default HeroBackground
