import { css } from "@emotion/core"

export const introSection = theme => css`
  font-family: "Barlow";

  h1 {
    font-size: 5.2rem;
    color: #0a0a80;
    span {
      color: #39d965;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${theme.colors.purples.normal};
  }
`
