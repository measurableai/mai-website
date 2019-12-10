import React from "react"
import { Link } from "gatsby"

import "normalize.css"

const Layout = ({ children, headerMode }) => {
  return (
    <>
      <header
        style={{
          position: "absolute",
          color: headerMode === "light" ? "white" : "black",
        }}
      >
        <Link to="/">Home</Link>
      </header>
      <main>{children}</main>
      <footer>
        <Link to="/press">Press</Link>
      </footer>
    </>
  )
}

export default Layout
