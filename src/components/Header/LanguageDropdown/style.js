import { css } from "@emotion/core"

export const singleValue = css`
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  max-width: calc(100% - 8px);
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  box-sizing: border-box;
  color: inherit;
`

export const arrowDown = css`
  width: 0;
  height: 0;
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-top: 0.6rem solid;
  border-top-color: inherit;
`

export const optionIcon = css`
  margin-right: 0.7rem;
`
