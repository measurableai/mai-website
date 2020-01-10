import { css } from "@emotion/core"
import { mq } from "@/theme"

export const form = css`
  border-bottom: 1px solid #1f014f;
`

export const errorMessage = theme => css`
  font-size: 1.2rem;
  color: ${theme.colors.error};
`

export const fontStyle = theme => css`
  margin: 0;
  font-weight: 600;
  color: ${theme.colors.purples.normal};
  line-height: 1.2;
`
export const subscribeContainer = css`
  margin: 22.8rem 0 3.1rem 0;

  ${mq.mobile} {
    margin: 11.3rem 0 0 0;
  }
`
export const subscribeTitle = css`
  font-size: 6rem;
  letter-spacing: 1.79px;
  text-align: left;
  margin-bottom: 3.1rem;

  ${mq.mobile} {
    font-size: 4.4rem;
    letter-spacing: 0.4px;
    margin-bottom: 2.8rem;
  }
`
export const emailAddressContainer = css`
  text-align: left;
  width: 38rem;
  margin-bottom: 8.61rem;

  ${mq.mobile} {
    width: 98%;
    margin-bottom: 5.6rem;
  }
`
export const subscribe = theme => css`
  font-size: 7.2rem;
  font-family: ${theme.fonts.heading};
  letter-spacing: 2.14px;

  ${mq.mobile} {
    font-size: 5.4rem;
    letter-spacing: 1.61px;
  }
`
export const emailInput = theme => css`
  border: none;
  font-size: 3.2rem;
  ::placeholder {
    color: ${theme.colors.greens.dark};
    opacity: 0.3;
  }

  ${mq.mobile} {
    font-size: 2.4rem;
  }
`

export const arrowButton = css`
  float: right;
  padding: 0;

  &[disabled] {
    opacity: 0.7;
  }
`
