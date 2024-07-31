import { css } from "@emotion/core"
import { mq } from "@/theme"

export const heading = theme => css`
  font-family: ${theme.fonts.heading};
  font-size: 7.2rem;
  font-weight: 500;
  line-height: 0.75;
  letter-spacing: 2.6px;
  color: ${theme.colors.purples.normal};
  text-transform: uppercase;
  text-align: right;
`

export const flexContainer = theme => css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 8rem;

  & > div:first-of-type {
    margin-top: 8rem;
  }

  ${mq.tablet} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    font-size: 2.4rem;
  }
`

export const testimonialContent = theme => css`
  font-family: ${theme.fonts.body};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0;
  color: ${theme.colors.purples.normal};
  text-align: left;
  margin: 0;
  margin-bottom: 3.6rem;
`

export const authorName = theme => css`
  font-family: ${theme.fonts.heading};
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  color: ${theme.colors.purples.normal};
  text-align: left;
  margin: 0;
  margin-bottom: 0.8rem;
`

export const authorOrganisation = theme => css`
  font-family: ${theme.fonts.heading};
  font-size: 2.1rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  color: ${theme.colors.purples.normal};
  text-align: left;
  margin: 0;
  margin-bottom: 2.4rem;
`

export const cubeAsiaImg = theme => css`
  max-width: 13rem;
  width: 30%;
`

export const columbiaImg = theme => css`
  max-width: 35rem;
  width: 68%;
`
