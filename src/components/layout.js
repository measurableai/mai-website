import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"

import "normalize.css"

import Header from "../components/Header"

const global = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
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
      <footer
        style={{
          textAlign: "center",
        }}
      >
        <Link to="/press">Press</Link>
      </footer>
    </>
  )
}

export default Layout
