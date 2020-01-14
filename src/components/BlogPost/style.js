import { css } from "@emotion/core"
import { mq } from "@/theme"

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

  ${mq.mobile} {
    flex-direction: row;
    align-items: flex-start;
    min-width: auto;
    max-height: none;
    width: 100%;
    padding-bottom: 1.5rem;
  }
`
export const image = css`
  width: 19rem;
  height: 19rem;
  background-size: cover;
  background-position: center;

  ${mq.mobile} {
    width: 8.5rem;
    height: 8.5rem;
  }
`
export const postContainer = css`
  max-height: 18rem;
  margin: 1.2rem 0 0 1.1rem;

  ${mq.mobile} {
    flex: 1;
    margin: 0.7rem 0 0 0.5rem;
  }
`
export const tagAndDateContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.6rem;

  ${mq.mobile} {
    margin-bottom: 0.7rem;
  }
`
export const date = theme => css`
  width: 100%;
  color: ${theme.colors.purples.light};
  font-size: 1rem;
  text-align: right;
  line-height: 1;
  margin: 0;

  ${mq.mobile} {
    text-align: left;
  }
`
export const title = theme => css`
  margin: 0;
  width: 100%;
  color: ${theme.colors.purples.normal};
  font-weight: bold;
  font-size: 1.7rem;
  margin-bottom: 0.2rem;
  max-height: 6rem;
  line-height: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${mq.mobile} {
    font-size: 1.5rem;
    line-height: normal;
    margin-bottom: 0.4rem;
    -webkit-line-clamp: 2;
  }
`
export const content = theme => css`
  margin: 0;
  width: 17rem;
  height: 100%;
  max-height: 3rem;
  color: ${theme.colors.purples.light};
  font-size: 1.2rem;
  font-weight: normal;
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
  position: absolute;
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 0.15rem;
  background-color: ${theme.colors.purples.light};
  bottom: -0.15rem;
  left: -0.15rem;
`

export const blogTag = css`
  font-size: 1rem;
  padding: 0.3rem 0.7rem;
`
export const anchor = css`
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`
