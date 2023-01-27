import { css } from "@emotion/core"

export const button = theme => css`
  box-sizing: border-box;
  background: #200050;
  color: ${theme.colors.greens.light};

  box-shadow: inset 0 0 0 2px ${theme.colors.greens.light};
  text-transform: uppercase;
  padding: 0.8rem 1.2rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  display: inline-block;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: inset 0 0 0 100px ${theme.colors.greens.light};
    color: #200050;
    background-position: 0px;
  }
`
