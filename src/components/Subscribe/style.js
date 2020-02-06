import { css } from "@emotion/core"
import { mq } from "@/theme"

export const form = css`
  border-bottom: 1px solid #1f014f;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const errorMessage = theme => css`
  font-size: 1.2rem;
  color: ${theme.colors.error};
`

export const fontStyle = theme => css`
  margin: 0;
  font-weight: 500;
  color: ${theme.colors.purples.normal};
  line-height: 1.2;
`
export const subscribeContainer = css`
  margin: 22.8rem 0 3.1rem 0;

  ${mq.tablet} {
    margin: 11.3rem 0 0 0;
  }
`
export const subscribeTitle = css`
  font-size: 6rem;
  letter-spacing: 1.79px;
  text-align: left;
  margin-bottom: 3.1rem;

  ${mq.tablet} {
    font-size: 4.4rem;
    letter-spacing: 0.4px;
    margin-bottom: 2.8rem;
  }
`
export const emailAddressContainer = css`
  text-align: left;
  width: 36.5rem;
  margin-bottom: 8.61rem;

  ${mq.tablet} {
    width: 100%;
    margin-bottom: 5.6rem;
  }
`
export const subscribe = theme => css`
  font-size: 7.2rem;
  font-family: ${theme.fonts.heading};
  letter-spacing: 2.14px;

  ${mq.tablet} {
    font-size: 5.4rem;
    letter-spacing: 1.61px;
    display: block;
  }
`
export const emailInput = theme => css`
  border: none;
  font-size: 3.2rem;
  margin-right: 0.5rem;
  max-width: calc(100% - 3rem);
  ::placeholder {
    color: ${theme.colors.greens.dark};
    opacity: 0.3;
  }

  ${mq.tablet} {
    font-size: 2.4rem;
    width: 100%;
  }
`

export const arrowButton = css`
  padding: 0;

  &[disabled] {
    opacity: 0.7;
  }
`
