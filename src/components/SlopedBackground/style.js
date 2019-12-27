import { css } from "@emotion/core"

export const background = css`
  min-height: 75rem;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transform: skewY(-21.5deg);
    width: 100%;
  }

  > * {
    position: relative;
  }
`

export const navigation = css`
  position: absolute !important;
  height: 80px;
  top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const line = color => css`
  width: 0.1rem;
  transform: scaleX(0.5);
  height: 0rem;
  transition: height 0.3s;
  background-color: ${color};
`

export const cirlce = color => css`
  width: 0.9rem;
  height: 0.9rem;
  border: solid 0.05rem ${color};
  border-radius: 1rem;
`

export const content = css`
  position: relative;
  width: 102.4rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  text-align: center;
  min-height: inherit;
`
