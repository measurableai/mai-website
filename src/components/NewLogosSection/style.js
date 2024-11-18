import { css } from "@emotion/core"
import { mq } from "@/theme"

export const layoutContainer = theme => css`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.7fr;
  gap: 4rem;

  > div:nth-of-type(1) {
    padding-top: 18rem;
  }
  > div:nth-of-type(2) {
    padding-top: 20rem;
    padding-bottom: 4rem;
  }
  > div:nth-of-type(3) {
    padding-top: 22rem;
    padding-bottom: 4rem;
  }
  > div:nth-of-type(4) {
    padding-top: 31rem;
    padding-bottom: 4rem;
  }

  ${mq.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);

    > div:nth-of-type(1) {
      padding-top: 10rem;
    }
    > div:nth-of-type(2) {
      padding-top: 0rem;
      padding-bottom: 0rem;
    }
    > div:nth-of-type(3) {
      padding-top: 0rem;
      padding-bottom: 0rem;
    }
    > div:nth-of-type(4) {
      padding-top: 0rem;
      padding-bottom: 4rem;
    }
  }
`

export const logosTable = gridTemplateColumns => css`
  display: grid;
  grid-template-columns: repeat(${gridTemplateColumns.desktop}, 1fr);
  gap: 0.8rem 1.2rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  p {
    font-weight: 600;
    line-height: 1.5;
  }

  ${mq.tablet} {
    grid-template-columns: repeat(${gridTemplateColumns.tablet}, 1fr);
    gap: 4rem 1.6rem;
    padding-top: 2.4rem;
    margin-bottom: 2rem;
  }

  ${mq.mobile} {
    grid-template-columns: repeat(${gridTemplateColumns.mobile}, 1fr);
    gap: 1.2rem 1.2rem;
    margin-bottom: 2rem;
  }
`

export const header = theme => css`
  position: relative;
  border-bottom: 2px solid ${theme.colors.purples.normal};
  margin-bottom: 2.4rem;
  ${mq.tablet} {
    width: max-content;
    padding-right: 4rem;
  }

  ::after {
    content: "";
    display: block;
    background: ${theme.colors.purples.normal};
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: -6px;
    right: -5px;
    border-radius: 10000px;
  }
`

export const headerTitle = theme => css`
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  color: ${theme.colors.purples.normal};
  font-size: 3.2rem;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin: 0 0 1.6rem 0;

  ${mq.tablet} {
    font-size: 3.2rem;
  }
`

export const logoWrapper = logoWrapperSize => css`
  width: 60%;
  min-width: ${logoWrapperSize[0]}px;
  height: ${logoWrapperSize[1]}px;

  ${mq.tablet} {
    min-width: 100%;
  }
`

export const logoDescription = theme => css`
  font-family: ${theme.fonts.body};
  font-size: 1.6rem;
  text-align: left;
  margin-top: 1.6rem;
  margin-bottom: 4rem;
  color: ${theme.colors.purples.normal};

  > p {
    margin: 0.4rem 0;
  }

  ${mq.tablet} {
    text-align: center;
  }
`
