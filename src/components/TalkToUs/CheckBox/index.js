import React from "react"

import { checkBox, container, message } from "./style"

const CheckBox = ({ checked, detail, onClick, ...props }) => {
  return (
    <div css={container} {...props}>
      <div
        css={theme => [
          checkBox(theme),
          {
            backgroundColor: checked
              ? theme.colors.purples.normal
              : theme.colors.white,
            borderColor: checked
              ? theme.colors.purples.normal
              : theme.colors.greens.dark,
          },
        ]}
        onClick={onClick}
      />
      <p css={message}>{detail}</p>
    </div>
  )
}

export default CheckBox
