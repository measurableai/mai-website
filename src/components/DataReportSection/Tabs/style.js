import { css } from "@emotion/core"
import { mq } from "@/theme"

export const tabsContainer = css`
  text-align: left;
`

export const character = (theme, isActive, isHover) => css`
  font-family: ${theme.fonts.heading};
  font-size: 4.8rem;
  letter-spacing: 2.33px;
  margin: 0 0.15rem;
  ${!isHover &&
    `color: ${
      isActive ? theme.colors.greens.dark : theme.colors.purples.normal
    };`}

  ${mq.tablet} {
    font-size: 3.6rem;
    letter-spacing: 1.95px;
  }
`
export const numberCharacter = theme => css`
  &:hover {
    color: ${theme.colors.greens.dark};
  }
`

export const number = css`
  display: inline-block;
  cursor: pointer;
`

export const underline = theme => css`
  background-color: ${theme.colors.greens.dark};
  width: 100%;
  height: 0.2rem;
`
