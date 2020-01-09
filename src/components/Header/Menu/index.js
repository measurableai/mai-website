import React from "react"

import FreeTrialButton from "@/components/FreeTrialButton"
import LoginButton from "../LoginButton"
import DataInsightButton from "../DataInsightButton"
import LanguageItemList from "../LanguageItemList"

import { menu, menuItem } from "./style"

const Menu = () => (
  <div css={menu}>
    <LoginButton css={menuItem} />
    <DataInsightButton css={menuItem} />
    <div css={menuItem}>
      <LanguageItemList />
    </div>
    <div css={menuItem}>
      <FreeTrialButton />
    </div>
  </div>
)

export default Menu
