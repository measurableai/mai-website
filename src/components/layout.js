import React from "react"
import { Link } from "gatsby-plugin-intl"
import { Global, css } from "@emotion/core"

import "normalize.css"
import "typeface-roboto"
import "typeface-barlow-condensed"

import Header from "@/components/Header"

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
