import React, { Fragment } from "react"

import {
  tabsContainer,
  character,
  number,
  underline,
  numberCharacter,
} from "./style"

const Tabs = ({
  numberOfTabs,
  onChange,
  selectedIndex,
  disabled,
  isHovered,
  setIsHovered,
  hoveredIndex,
  setHoveredIndex,
}) => (
  <div css={tabsContainer}>
    <span css={character}>#</span>
    {[...Array(numberOfTabs)].map((_v, index) => {
      const isActive = index === selectedIndex
      return (
        <Fragment key={index}>
          <div
            css={theme => [character(theme, isActive, isHovered), number]}
            onClick={() => {
              if (
                !disabled &&
                index !== selectedIndex &&
                typeof onChange === "function"
              ) {
                onChange(index)
              }
            }}
            onMouseEnter={() => {
              setIsHovered(true)
              setHoveredIndex(index)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setHoveredIndex(-1)
            }}
          >
            <div css={numberCharacter}>
              {String(index + 1).padStart(2, "0")}
            </div>
            {index === hoveredIndex && <div css={underline} />}
            {isActive && !isHovered && <div css={underline} />}
          </div>
          {index !== numberOfTabs - 1 && <span css={character}>/</span>}
        </Fragment>
      )
    })}
  </div>
)

Tabs.defaultProps = {
  disabled: false,
}

export default Tabs
