/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { ThemeProvider } from "emotion-theming"
import config from "react-reveal/globals"

import theme from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }

  config({ ssrFadeout: true })
}

export const registerServiceWorker = () => true
