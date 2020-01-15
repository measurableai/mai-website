import { css } from "@emotion/core"

export const background = css`
  position: relative;
`

export const navigation = css`
  position: absolute !important;
  height: 8rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`

export const line = color => css`
  width: 0.1rem;
  transform: scaleX(0.5);
  height: 0rem;
  transition: height 0.5s ease-out;
  background-color: ${color};
`

export const cirlce = color => css`
  width: 1rem;
  height: 1rem;
  border: solid 0.05rem ${color};
  border-radius: 1rem;
`
