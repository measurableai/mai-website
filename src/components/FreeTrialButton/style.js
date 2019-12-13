import { css } from "@emotion/core"

export const button = theme => css`
  background: ${theme.linearGradients.purpleToGreen};
  color: ${theme.colors.purples.dark};
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  font-size: 1.5rem;
  font-weight: 900;

  &:hover {
    background: linear-gradient(
      ${theme.colors.greens.light},
      ${theme.colors.greens.light}
    );
    background-position: 0px;
  }
`
