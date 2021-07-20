import { css } from "@emotion/core"

export const checkBox = css`
  display: inline-block;
  height: 1.6rem;
  width: 1.6rem;
  margin-right: 1.2rem;
  border-width: 1px;
  border-style: solid;
`

export const message = theme => css`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1.27;
  letter-spacing: 0.19px;
  color: ${theme.colors.purples.normal};
  margin-bottom: 1.8rem;
  margin-top: 0;
  flex: 1;
`

export const container = css`
  display: flex;
`
