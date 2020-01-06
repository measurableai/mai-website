import { css } from "@emotion/core"

export const title = theme => css`
  margin: 0;
  font-family: ${theme.fonts.heading};
  font-size: 8.4rem;
  font-weight: 600;
  letter-spacing: 0.01px;
  color: ${theme.colors.purples.normal};
`

export const content = theme => css`
  margin: 0;
  color: ${theme.colors.purples.normal};
  font-size: 2rem;
  line-height: 3.6rem;
  margin-top: 3.9rem;
  margin-bottom: 5rem;
`

export const currentOpeningsContainer = css`
  margin-top: 5rem;
  margin-bottom: 26.5rem;
`

export const jobTitle = theme => css`
  color: ${theme.colors.purples.normal};
  border-bottom: 0.1rem solid ${theme.colors.purples.normal};
`

export const jumpAnchor = css`
  text-decoration: none;
`
