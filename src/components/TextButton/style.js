import { css } from "@emotion/core"
import { mq } from "@/theme"

export const button = theme => css`
  background-color: transparent;
  color: #ffffff;
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
