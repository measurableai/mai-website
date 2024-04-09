import React from "react"
import { Global, css } from "@emotion/core"

import "normalize.css"
import "@/fonts/roboto.css"
import "@/fonts/barlow-condensed.css"

import { TalkToUsProvider } from "@/context/talkToUs"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TalkToUs from "@/components/TalkToUs"

const global = theme => css`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${theme.fonts.body};
    font-weight: 300;
    scroll-behavior: smooth;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input {
    border-radius: 0;
    background-color: transparent;
  }
`

const main = css`
  overflow-x: hidden; /* added to cater fade-in animation */
`

const Layout = ({ children, headerMode }) => {
  return (
    <TalkToUsProvider>
      <Global styles={global} />
      <Header headerMode={headerMode} />
      <main css={main}>{children}</main>
      <Footer />
      <TalkToUs />
    </TalkToUsProvider>
  )
}

export default Layout
