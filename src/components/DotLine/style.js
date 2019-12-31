import { css } from "@emotion/core"

export const container = css`
  max-width: 20.4rem;
`
export const dotLineContainer = invert => css`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: ${invert ? "row-reverse" : "row"};
  flex-wrap: nowrap;
  position: relative;
`
export const dot = theme => css`
  height: 0.73rem;
  width: 0.73rem;
  background-color: ${theme.colors.white};
  border-radius: 50%;
`
export const line = theme => css`
  flex-grow: 1;
  height: 0.1rem;
  width: 100%;
  background-color: ${theme.colors.white};
  position: relative;
`
