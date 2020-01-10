import React, { useState, useEffect } from "react"
import { Link } from "gatsby-plugin-intl"

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
  buttonsContainter,
  hamburger,
  hamburgerLayer,
} from "./style"

const Header = ({ headerMode }) => {
  const scrollDirection = useScrollDirection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMedia([true], false)
  const logoWidth = useMedia([145], 218)
  const logoHeight = useMedia([20], 30)
  useEffect(() => {
    if (scrollDirection === SCROLL_DOWN) {
      setIsMenuOpen(false)
    }
  }, [scrollDirection])

  const lightModeOn = headerMode === "light"

  return (
    <div css={theme => container(theme, scrollDirection, lightModeOn)}>
      <div css={content}>
        <Link to="/">
          <img
            width={logoWidth}
            height={logoHeight}
            src={lightModeOn ? logo_purple : logo_white}
            alt="Measurable AI"
          />
        </Link>
        {!isMobile && (
          <div css={buttonsContainter}>
            <FreeTrialButton lightModeOn={lightModeOn} />
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
        {isMobile && (
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
      {isMenuOpen && isMobile && <Menu lightModeOn={lightModeOn} />}
    </div>
  )
}

export default Header
