import { css } from "@emotion/core"

export const background = css`
  min-height: 750px;
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
  width: 1px;
  transform: scaleX(0.5);
  height: 0px;
  transition: height 0.3s;
  background-color: ${color};
`

export const cirlce = color => css`
  width: 9px;
  height: 9px;
  border: solid 0.5px ${color};
  border-radius: 10px;
`

export const content = css`
  position: relative;
  width: 1024px;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  text-align: center;
  min-height: inherit;
`
