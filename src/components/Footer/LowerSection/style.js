import { css } from "@emotion/core"

export const container = theme => css`
  height: 8rem;
  width: 100%;
  background-color: ${theme.colors.purples.normal};
  display: flex;
  justify-content: center;
`

export const content = css`
  height: 100%;
  width: 102.4rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const helpButton = theme => css`
  display: inline-flex;
  align-items: center;
  border-radius: 2.4rem;
  background-color: ${theme.colors.greens.light};
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 1.13px;
  text-align: center;
  color: ${theme.colors.purples.normal};
  padding: 1.5rem 2rem;
`

export const helpSymbol = theme => css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.8rem;
  height: 1.8rem;
  border: 2px solid black;
  border-top-left-radius: 0.9rem;
  border-top-right-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
  margin-right: 0.6rem;
  font-size: 1.3rem;
`

export const popoverContainer = {
  width: "34rem",
  height: "55rem",
  boxShadow: "none",
  padding: 0,
  borderTopLeftRadius: "1rem",
  borderTopRightRadius: "1rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
}

export const popoverContainerMobile = {
  ...popoverContainer,
  width: "calc(100% - 2.4rem)",
  height: "auto",
}

export const popoverHeader = theme => css`
  background-color: ${theme.colors.greens.light};
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  text-align: center;
  color: ${theme.colors.purples.normal};
  position: relative;
  padding: 1rem 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

export const closeButton = theme => css`
  position: absolute;
  right: 20px;
  background-color: transparent;
  box-sizing: content-box;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 0.3rem;
  padding: 1rem 0;
`

export const closeSymbol = theme => css`
  width: 1.5rem;
  height: 0.3rem;
  background-color: ${theme.colors.purples.normal};
`

export const popoverBody = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.5rem 2.8rem;
`

export const menuItem = theme => css`
  background-color: white;
  border-image: linear-gradient(45deg, #aa5bff 0%, #55ff8d 99%) 1 0 0 1;
  border-width: 0.2rem;
  border-style: solid;
  padding: 2rem 3.6rem 2rem 4rem;
  margin-bottom: 2.6rem;
  font-size: 1.8rem;
  color: ${theme.colors.purples.normal};
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    background-color: ${theme.colors.greens.light};
    border-radius: 0.3rem;
    top: -0.4rem;
    right: -0.2rem;
  }
`

export const menuItemImage = css`
  margin-right: 1.6rem;
`
