import React, { Fragment } from "react"

import { tabsContainer, character, number, underline } from "./style"

const Tabs = ({ numberOfTabs, onChange, selectedIndex, disabled }) => (
  <div css={tabsContainer}>
    <span css={character}>#</span>
    {[...Array(numberOfTabs)].map((_v, index) => {
      const isActive = index === selectedIndex
      return (
        <Fragment key={index}>
          <div
            css={theme => [character(theme, isActive), number]}
            onClick={() => {
              if (
                !disabled &&
                index !== selectedIndex &&
                typeof onChange === "function"
              ) {
                onChange(index)
              }
            }}
          >
            <div>{String(index + 1).padStart(2, "0")}</div>
            {isActive && <div css={underline} />}
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
