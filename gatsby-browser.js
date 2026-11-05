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

  // Older Chrome builds expose the API on navigator instead of document
  const modelContext = document.modelContext || navigator.modelContext

  if (modelContext && typeof modelContext.registerTool === "function") {
    const controller = new AbortController()
    const signal = controller.signal

    modelContext.registerTool(
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

    modelContext.registerTool(
      {
        name: "request-demo",
        description:
          "Contact Measurable AI to request a demo or trial of their alternative data platform for emerging markets.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        execute: async () => {
          window.location.href = "/?contact=1"
          return { success: true, url: "https://www.measurable.ai/?contact=1" }
        },
      },
      { signal }
    )

    modelContext.registerTool(
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
