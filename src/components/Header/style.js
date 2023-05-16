import { css } from "@emotion/core"
import { mq } from "@/theme"
import { hexToRgba } from "@/utils"

import { SCROLL_UP } from "@/hooks/useScrollDirection"

export const container = (
  theme,
  scrollDirection,
  transparent,
  lightModeOn
) => css`
  position: fixed;
  height: 12rem;
  width: 100%;
  z-index: ${theme.zIndices.header};
  transition: top 0.3s ease-in-out, background-color 0.5s;
  top: ${scrollDirection === SCROLL_UP ? 0 : "-12rem"};
  background-color: ${transparent
    ? "transparent"
    : lightModeOn
    ? theme.colors.white
    : hexToRgba(theme.colors.purples.dark, 95)};

  ${mq.tablet} {
    height: auto;
    width: calc(100% - 4rem);
    padding: 2rem;

    top: ${scrollDirection === SCROLL_UP ? 0 : "-7.4rem"};
  }
`

export const content = theme => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100rem;
  margin: auto;

  ${mq.tablet} {
    width: auto;
  }
`

export const textButtonMargin = css`
  margin-left: 2rem;
`

export const freeTrialButtinMargin = css`
  margin-right: 1rem;
`

export const buttonsContainter = css`
  display: flex;
  align-items: center;
`

export const hamburger = (theme, isMenuOpen) => css`
  > span {
    &:first-of-type {
      ${isMenuOpen && `transform: rotate(45deg) translate(0px, 0px);`}
    }

    &:nth-of-type(2) {
      ${isMenuOpen &&
        `
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      `}
    }

    &:nth-of-type(3) {
      ${isMenuOpen && `transform: rotate(-45deg) translate(1px, -1px);`}
    }
  }
`

export const hamburgerLayer = (theme, lightModeOn) => css`
  display: block;
  width: 15px;
  height: 2px;
  margin: 4px 0;
  position: relative;
  background: ${lightModeOn ? theme.colors.purples.normal : "#ffffff"};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 0px 1px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease;
`
