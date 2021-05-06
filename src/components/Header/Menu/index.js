import React, { useContext } from "react"

import TalkToUsButton from "@/components/TalkToUsButton"
// import LoginButton from "../LoginButton"
import DataInsightButton from "../DataInsightButton"
import LanguageItemList from "../LanguageItemList"
import { TalkToUsContext } from "@/context/talkToUs"

import { menu, menuItem } from "./style"

const Menu = ({ lightModeOn }) => {
  const { open } = useContext(TalkToUsContext)
  return (
    <div css={menu}>
      {/* <LoginButton lightModeOn={lightModeOn} css={menuItem} /> */}
      <DataInsightButton lightModeOn={lightModeOn} css={menuItem} />
      {process.env.GATSBY_MULTI_LANG === "true" && (
        <div css={menuItem}>
          <LanguageItemList />
        </div>
      )}
      <div css={menuItem}>
        <TalkToUsButton onClick={() => open()} />
      </div>
    </div>
  )
}

export default Menu
