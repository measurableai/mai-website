import { css } from "@emotion/core"
import { mq } from "@/theme"

export const background = theme => css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${theme.linearGradients.purpleDarkToLight};
  background-color: ${theme.colors.purples.dark};
  min-height: 74.2rem;
  width: 100%;
  padding-bottom: 8rem;

  ${mq.mobile} {
    min-height: auto;
  }
`
