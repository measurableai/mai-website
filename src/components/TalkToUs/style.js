import { css } from "@emotion/core"
import { mq } from "@/theme"

export const helpButton = (theme, opening) => css`
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
  position: fixed;
  right: 5rem;
  z-index: ${theme.zIndices.content};
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  outline: none;
  bottom: ${opening ? "-6rem;" : "6rem;"};
  transition: bottom 0.2s ease-out;
  ${!opening && `transition-delay: .3s;`}
  z-index: ${theme.zIndices.popup};

  ${mq.mobile} {
    bottom: ${opening ? "-6rem;" : "1.5rem;"};
    right: 1.5rem;
  }
`

export const helpSymbol = css`
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

export const closeButton = css`
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
`

export const popoverPadding = css`
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

  ${mq.mobile} {
    padding: 2rem 2.5rem 2rem 2.5rem;
    letter-spacing: 0.5px;
    line-height: 22px;
  }
`

export const menuItemImage = css`
  margin-right: 1.6rem;
`

export const container = (theme, closing, newForm) => css`
  position: fixed;
  ${!newForm && `height: auto;`}
  ${newForm && `max-height: 80%;`}
  width: ${newForm ? `48rem` : `34rem`};
  ${newForm && `overflow: scroll;`}
  background-color: white;
  bottom: 3rem;
  right: 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  z-index: ${theme.zIndices.content};
  transition-property: transform, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  z-index: ${theme.zIndices.popup};

  ${mq.mobile} {
    width: 30rem;
    max-height: 95%;
    bottom: 1rem;
    right: 1rem;
    overflow: scroll;
  }

  transform: ${
    closing ? "translate(40%, 40%) scale(0.001); opacity: 0;" : "scale(1);"
  };
`
