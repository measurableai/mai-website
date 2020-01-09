import React, { Fragment } from "react"
import { changeLocale } from "gatsby-plugin-intl"

import TextButton from "@/components/TextButton"

import { list, button, icon, separator } from "./style"

import languageOptions from "../languageOptions"

const LanguageItemList = () => (
  <div css={list}>
    {languageOptions.map((option, index) => (
      <Fragment key={option.value}>
        <TextButton css={button} onClick={() => changeLocale(option.value)}>
          <option.Icon css={icon} />
          {option.label}
        </TextButton>
        {index !== languageOptions.length - 1 && <div css={separator} />}
      </Fragment>
    ))}
  </div>
)

export default LanguageItemList
