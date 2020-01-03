import React from "react"
import { Global, css } from "@emotion/core"

import "normalize.css"
import "typeface-roboto"
import "typeface-barlow-condensed"

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
      <Header />
      <main>{children}</main>
      <Footer />
      <footer
        style={{
          textAlign: "center",
        }}
      >
        <Link to="/jobs">Jobs</Link>
        <Link to="/press">Press</Link>
        <Link to="/privacypolicy">Privacy Policy</Link>
        <Link to="/termofuse">Term Of Use</Link>
      </footer>
    </>
  )
}

export default Layout
