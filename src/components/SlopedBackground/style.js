import { css } from "@emotion/core"

export const background = css`
  padding-bottom: 8rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    height: calc(100% + 2px); /** +2px to offset the edge rendering issue */
    position: absolute;
    top: 0;
    transform: skewY(-21.5deg);
    width: 100%;
  }
`

export const anchor = css`
  height: calc(100% + 2px); /** +2px to offset the edge rendering issue */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: skewY(-21.5deg);
  width: 100%;
  z-index: 3;
`
