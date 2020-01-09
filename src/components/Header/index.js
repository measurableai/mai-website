import React, { useState, useEffect } from "react"

import FreeTrialButton from "@/components/FreeTrialButton"

import LanguageDropdown from "./LanguageDropdown"
import LoginButton from "./LoginButton"
import DataInsightButton from "./DataInsightButton"
import Menu from "./Menu"

import logo from "@/images/mai-logo.svg"

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

const Header = () => {
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

  return (
    <div css={theme => container(theme, scrollDirection)}>
      <div css={content}>
        <img
          width={logoWidth}
          height={logoHeight}
          src={logo}
          alt="Measurable AI"
        />
        {!isMobile && (
          <div css={buttonsContainter}>
            <FreeTrialButton />
            <DataInsightButton css={textButtonMargin} />
            <LanguageDropdown css={textButtonMargin} />
            <LoginButton css={textButtonMargin} />
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
      {isMenuOpen && isMobile && <Menu />}
    </div>
  )
}

export default Header
