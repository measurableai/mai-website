import { css } from "@emotion/core"
import { mq } from "@/theme"

export const button = (theme, lightModeOn) => css`
  background-color: transparent;
  color: ${lightModeOn ? theme.colors.purples.normal : theme.colors.white};
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;

  &:hover {
    color: ${theme.colors.greens.light};
  }

  ${mq.mobile} {
    font-size: 1.8rem;
  }
`
