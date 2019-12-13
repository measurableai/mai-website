import { css } from "@emotion/core"
import { hexToRgba } from "../../utils"

export const container = theme => css`
  position: fixed;
  height: 120px;
  width: 100%;
  background-color: ${hexToRgba(theme.colors.purples.dark, 95)};
  z-index: ${theme.zIndices.header};
`

export const content = theme => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 1000px;
  margin: auto;
`

export const textButtonMargin = css`
  margin-left: 2rem;
`

export const buttonsContainter = css`
  display: flex;
  align-items: center;
`
