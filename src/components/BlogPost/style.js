// import React from "react"
import { css } from "@emotion/core"

export const blogPostContainer = theme => css`
  display: flex;
  width: 190px;
  min-width: 190px;
  max-height: 300px;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid ${theme.colors.purples.light};
  text-decoration: none;
  margin: 0;
`
export const image = css`
  max-width: 190px;
  max-height: 190px;
  background-size: cover;
  background-position: center;
`
export const postContainer = css`
  max-height: 180px;
  margin: 12px 0px 0px 11px;
`
export const tagAndDateContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 6px 0;
`
export const date = theme => css`
  width: 100%;
  color: ${theme.colors.purples.light};
  font-size: 10px;
  text-align: right;
  line-height: 0;
`
export const title = theme => css`
  margin: 0;
  width: 100%;
  color: ${theme.colors.purples.normal};
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 2px;
  max-height: 40px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const content = theme => css`
  margin: 0;
  width: 170px;
  height: 100%;
  max-height: 30px;
  color: ${theme.colors.purples.light};
  font-size: 12px;
  margin-bottom: 5px;
  line-height: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const viewCountContainer = css`
  margin: 0;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
`
export const viewCountImage = css`
  width: 14px;
  height: 14px;
  background-size: cover;
  background-position: center;
`

export const viewCount = theme => css`
  color: ${theme.colors.purples.light};
  font-size: 10px;
  margin-left: 5px;
`
export const readMore = theme => css`
  color: ${theme.colors.greens.dark};
  font-size: 12px;
`

export const dot = theme => css`
  position: relative;
  height: 5px;
  width: 5px;
  border-radius: 10px;
  background-color: ${theme.colors.purples.light};
  left: -2px;
  flex-grow: 1;
`

export const blogTag = css`
  font-size: 10px;
  padding: 3px 7px;
`
