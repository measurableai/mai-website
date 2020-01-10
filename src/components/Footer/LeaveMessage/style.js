import { css } from "@emotion/core"

export const form = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const message = theme => css`
  font-size: 1.5rem;
  line-height: 1.27;
  letter-spacing: 0.19px;
  color: ${theme.colors.purples.normal};
  margin-bottom: 1.8rem;
  margin-top: 0;
`

export const textarea = css`
  resize: none;
  margin-bottom: 0;
`

export const footer = css`
  display: flex;
  flex-direction: column;
`

export const submittedMessage = css`
  margin-top: 0;
  margin-bottom: 0.8rem;
`

export const errorMessage = theme => css`
  color: ${theme.colors.error};
`

export const submitButton = css`
  align-self: flex-end;
`
