import { css } from "@emotion/core"

export const title = (theme, special, bold, fontSize) => css`
  margin: 0;
  color: ${special ? theme.colors.greens.light : theme.colors.white};
  font-weight: ${bold ? "500px" : "200px"};
  font-size: ${fontSize};
  /* direction: rtl; */
  & > span {
    color: ${special ? theme.colors.white : theme.colors.greens.light};
  }
`
