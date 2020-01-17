import React from "react"

import FreeTrialButton from "@/components/FreeTrialButton"
import LoginButton from "../LoginButton"
import DataInsightButton from "../DataInsightButton"
import LanguageItemList from "../LanguageItemList"

import { menu, menuItem } from "./style"

const Menu = ({ lightModeOn }) => (
  <div css={menu}>
    <LoginButton lightModeOn={lightModeOn} css={menuItem} />
    <DataInsightButton lightModeOn={lightModeOn} css={menuItem} />
    {process.env.GATSBY_MULTI_LANG === "true" && (
      <div css={menuItem}>
        <LanguageItemList />
      </div>
    )}
    <div css={menuItem}>
      <FreeTrialButton />
    </div>
  </div>
)

export default Menu
