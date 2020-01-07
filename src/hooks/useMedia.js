// https://usehooks.com/useMedia/

import { useState, useEffect, useMemo, useRef, useCallback } from "react"
import { useTheme } from "emotion-theming"

/**
 * This hook returns one of the `values` or `defaultValue` depending on current window width
 * with respect to `theme.breakpoints`
 *
 * @param {any[]} values
 * @param {any} defaultValue
 */
function useMedia(values, defaultValue) {
  const theme = useTheme()
  if (theme.breakpoints.length !== values.length) {
    throw new Error(
      "Please Make sure `values` has same length of `theme.breakpoints`"
    )
  }

  const valuesRef = useRef(values)

  // Array containing a media query list for each query
  const mediaQueryLists = useMemo(() => {
    const queries = theme.breakpoints.map(bp => `(max-width: ${bp}px)`)
    return queries.map(q => window.matchMedia(q))
  }, [theme.breakpoints])

  // Function that gets value based on matching media query
  const getValue = useCallback(() => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches)
    // Return related value or defaultValue if none
    return typeof valuesRef.current[index] !== "undefined"
      ? valuesRef.current[index]
      : defaultValue
  }, [defaultValue, mediaQueryLists])

  // State and setter for matched value
  const [value, setValue] = useState(getValue)

  useEffect(() => {
    // Event listener callback
    // Note: By defining getValue outside of useEffect we ensure that it has ...
    // ... current values of hook args (as this hook callback is created once on mount).
    const handler = () => setValue(getValue)
    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach(mql => mql.addListener(handler))
    // Remove listeners on cleanup
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
  }, [getValue, mediaQueryLists])

  return value
}

export default useMedia
