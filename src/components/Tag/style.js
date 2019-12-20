import { css } from "@emotion/core"

export const tag = (theme, fontSize, margin, padding) => css`
  height: fit-content;
  width: fit-content;
  background-color: ${theme.colors.greens.light};
  color: ${theme.colors.purples.normal};
  border-radius: 12px;
  vertical-align: middle;
  font-weight: bold;
  font-size: ${fontSize};
  margin: ${margin};
  padding: ${padding};
  text-decoration: none;
`
