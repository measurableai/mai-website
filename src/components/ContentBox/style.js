import { css } from "@emotion/core"
import { mq } from "@/theme"

export const content = theme => css`
  position: relative;
  width: 102.4rem;
  box-sizing: border-box;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  text-align: center;
  min-height: inherit;
  z-index: ${theme.zIndices.content};

  ${mq.mobile} {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    overflow: hidden; /* added to cater fade-in animation */
  }
`
