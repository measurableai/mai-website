import React, { useState, useEffect } from "react"
import { Link } from "gatsby-plugin-intl"
import { useWindowScroll } from "react-use"

import FreeTrialButton from "@/components/FreeTrialButton"

import LanguageDropdown from "./LanguageDropdown"
import LoginButton from "./LoginButton"
import DataInsightButton from "./DataInsightButton"
import Menu from "./Menu"

import logo_white from "@/images/mai-logo.svg"
import logo_purple from "@/images/mai-logo-2.svg"

import useMedia from "@/hooks/useMedia"
import useScrollDirection, { SCROLL_DOWN } from "@/hooks/useScrollDirection"

import {
  container,
  content,
  textButtonMargin,
  freeTrialButtinMargin,
  buttonsContainter,
  hamburger,
  hamburgerLayer,
} from "./style"

const Header = ({ headerMode }) => {
  const scrollDirection = useScrollDirection()
  const { y } = useWindowScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useMedia([false, false], true)
  const logoWidth = useMedia([145, 145], 218)
  const logoHeight = useMedia([20, 20], 30)
  useEffect(() => {
    if (scrollDirection === SCROLL_DOWN) {
      setIsMenuOpen(false)
    }
  }, [scrollDirection])

  const lightModeOn = headerMode === "light"

  if (typeof window === `undefined`) {
    return null
  }

  return (
    <div
      css={theme =>
        container(theme, scrollDirection, y === 0 && !isMenuOpen, lightModeOn)
      }
    >
      <div css={content}>
        <Link to="/">
          <img
            width={logoWidth}
            height={logoHeight}
            src={lightModeOn ? logo_purple : logo_white}
            alt="Measurable AI"
          />
        </Link>
        {isDesktop && (
          <div css={buttonsContainter}>
            <FreeTrialButton css={freeTrialButtinMargin} />
            <DataInsightButton
              lightModeOn={lightModeOn}
              css={textButtonMargin}
            />
            {process.env.GATSBY_MULTI_LANG === "true" && (
              <LanguageDropdown
                lightModeOn={lightModeOn}
                css={textButtonMargin}
              />
            )}
            <LoginButton lightModeOn={lightModeOn} css={textButtonMargin} />
          </div>
        )}
        {!isDesktop && (
          <div
            css={theme => hamburger(theme, isMenuOpen)}
            onClick={() => setIsMenuOpen(_isMenuOpen => !_isMenuOpen)}
          >
            <span css={hamburgerLayer}></span>
            <span css={hamburgerLayer}></span>
            <span css={hamburgerLayer}></span>
          </div>
        )}
      </div>
      {isMenuOpen && !isDesktop && <Menu lightModeOn={lightModeOn} />}
    </div>
  )
}

export default Header
