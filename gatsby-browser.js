/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { ThemeProvider } from "emotion-theming"
import config from "react-reveal/globals"

import theme from "./src/theme"

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

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }

  config({ ssrFadeout: true })

  if (
    typeof navigator !== "undefined" &&
    navigator.modelContext &&
    typeof navigator.modelContext.registerTool === "function"
  ) {
    const controller = new AbortController()
    const signal = controller.signal

    navigator.modelContext.registerTool(
      {
        name: "browse-reports",
        description:
          "Browse and discover research reports published by Measurable AI covering consumer spending, ride-hailing, food delivery, and digital economy data for emerging markets in Asia and the Middle East.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        execute: async () => {
          window.location.href = "/all-reports"
          return { success: true, url: "https://www.measurable.ai/all-reports" }
        },
      },
      { signal }
    )

    navigator.modelContext.registerTool(
      {
        name: "request-demo",
        description:
          "Contact Measurable AI to request a demo or trial of their alternative data platform for emerging markets.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        execute: async () => {
          window.location.href = "/#contact"
          return { success: true, url: "https://www.measurable.ai/#contact" }
        },
      },
      { signal }
    )

    navigator.modelContext.registerTool(
      {
        name: "view-jobs",
        description: "View open job positions at Measurable AI.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        execute: async () => {
          window.location.href = "/jobs"
          return { success: true, url: "https://www.measurable.ai/jobs" }
        },
      },
      { signal }
    )
  }
}

export const registerServiceWorker = () => true
