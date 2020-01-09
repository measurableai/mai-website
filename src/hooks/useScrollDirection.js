import { useState, useRef, useEffect } from "react"
import { useWindowScroll } from "react-use"

export const SCROLL_UP = "up"
export const SCROLL_DOWN = "down"

export default () => {
  const { y } = useWindowScroll()
  const [scrollDirection, setScrollDirection] = useState(SCROLL_UP)
  const previousScrollYRef = useRef(y)

  useEffect(() => {
    if (Math.abs(y - previousScrollYRef.current) <= 100) {
      return
    }

    const currentScrollDirection =
      y > previousScrollYRef.current ? SCROLL_DOWN : SCROLL_UP

    setScrollDirection(currentScrollDirection)
    previousScrollYRef.current = y
  }, [y])

  return scrollDirection
}
