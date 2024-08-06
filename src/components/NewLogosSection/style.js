import { css } from "@emotion/core"

export const layoutContainer = theme => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;

  > div:nth-of-type(1) {
    padding-top: 18rem;
  }
  > div:nth-of-type(2) {
    padding-top: 22rem;
    padding-bottom: 4rem;
  }
  > div:nth-of-type(3) {
    padding-top: 26rem;
  }
`

export const logosLayout = theme => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 60px;
  gap: 0.8rem 1.2rem;
  align-items: center;
  justify-content: center;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`
export const logosTitle = theme => css`
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  color: ${theme.colors.purples.normal};
  font-size: 3.6rem;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`
