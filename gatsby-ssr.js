/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { ThemeProvider } from "emotion-theming"
import jsdom from "jsdom"

import theme from "./src/theme"

global.DOMParser = new jsdom.JSDOM().window.DOMParser

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(
    <script
      type="text/javascript"
      id="hs-script-loader"
      async
      defer
      src="//js.hs-scripts.com/20168923.js"
    />
  )

  setPostBodyComponents(
    <script
      src="https://js-na2.hsforms.net/forms/embed/20168923.js"
      defer
    ></script>
  )
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
