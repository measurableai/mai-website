import React from "react"
import { Global, css } from "@emotion/core"

import "normalize.css"
import "@/fonts/roboto.css"
import "@/fonts/barlow-condensed.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const global = theme => css`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${theme.fonts.body};
  }

  button {
    border: none;
    cursor: pointer;
  }
`

const Layout = ({ children, headerMode }) => {
  return (
    <>
      <Global styles={global} />
      <Header headerMode={headerMode} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
