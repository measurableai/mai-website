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
  margin-bottom: 10rem;
`

export const flexContainer = theme => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 4rem;

  > div:nth-of-type(1) {
    margin-top: 16rem;
  }

  > div:nth-of-type(2) {
    margin-top: 8rem;
  }

  > div:nth-of-type(3) {
    margin-top: 0rem;
    padding-bottom: 4rem;
  }

  ${mq.tablet} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    font-size: 2.4rem;
  }
`

export const testimonialContent = theme => css`
  font-family: ${theme.fonts.body};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  color: ${theme.colors.purples.normal};
  text-align: left;
  margin: 0;
  margin-bottom: 3.6rem;
  position: relative;

  ::before {
    content: "“";
    display: block;
    position: absolute;
    top: -1.5ch;
    left: -0.8ch;
    font-size: 8rem;
    font-weight: 600;
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.purples.normal};
  }
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

export const cuhkImg = theme => css`
  max-width: 35rem;
  width: 60%;
`
