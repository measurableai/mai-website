// import React from "react"
import { css } from "@emotion/core"

export const blogPostContainer = theme => css`
  display: flex;
  width: 19rem;
  min-width: 19rem;
  max-height: 30rem;
  align-items: center;
  flex-direction: column;
  border-left: 0.1rem solid ${theme.colors.purples.light};
  text-decoration: none;
  margin: 0;
`
export const image = css`
  max-width: 19rem;
  max-height: 19rem;
  background-size: cover;
  background-position: center;
`
export const postContainer = css`
  max-height: 18rem;
  margin: 1.2rem 0 0 1.1rem;
`
export const tagAndDateContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 0.6rem 0;
`
export const date = theme => css`
  width: 100%;
  color: ${theme.colors.purples.light};
  font-size: 1rem;
  text-align: right;
  line-height: 0;
`
export const title = theme => css`
  margin: 0;
  width: 100%;
  color: ${theme.colors.purples.normal};
  font-weight: bold;
  font-size: 1.7rem;
  margin-bottom: 0.2rem;
  max-height: 4rem;
  line-height: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const content = theme => css`
  margin: 0;
  width: 17rem;
  height: 100%;
  max-height: 3rem;
  color: ${theme.colors.purples.light};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const viewCountContainer = css`
  margin: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
`
export const viewCountImage = css`
  width: 1.4rem;
  height: 1.4rem;
  background-size: cover;
  background-position: center;
`

export const viewCount = theme => css`
  color: ${theme.colors.purples.light};
  font-size: 1rem;
  margin-left: 0.5rem;
`
export const readMore = theme => css`
  color: ${theme.colors.greens.dark};
  font-size: 1.2rem;
`

export const dot = theme => css`
  position: relative;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 1rem;
  background-color: ${theme.colors.purples.light};
  left: -0.2rem;
  flex-grow: 1;
`

export const blogTag = css`
  font-size: 1rem;
  padding: 0.3rem 0.7rem;
`
