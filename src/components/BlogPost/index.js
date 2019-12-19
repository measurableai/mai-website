import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  blogPostContainer,
  image,
  postContainer,
  tagAndDateContainer,
  date,
  title,
  content,
  dot,
  // viewCountContainer,
  // viewCountImage,
  // viewCount,
  readMore,
} from "./style"
import Tag from "../../components/Tag"
// import viewCountIcon from "./../../images/icon-view@3x.png"

const Image = ({ children, src }) => (
  <>
    <img css={image} src={src} alt="Cover">
      {children}
    </img>
  </>
)
// const ViewCountImage = ({ children, src }) => (
//   <>
//     <img css={viewCountImage} src={src} alt="View Count">
//       {children}
//     </img>
//   </>
// )

// const ViewCount = ({ children }) => (
//   <>
//     <p css={viewCount}>{children}</p>
//   </>
// )

// const ViewCountContainer = ({ children }) => (
//   <>
//     <div css={viewCountContainer}>{children}</div>
//   </>
// )
const BlogPostContainer = ({ children, href }) => (
  <>
    <a
      css={theme => blogPostContainer(theme)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </>
)
const PostContainer = ({ children, theme }) => (
  <>
    <div css={postContainer}>{children}</div>
  </>
)
const TagAndDateContainer = ({ children }) => (
  <>
    <div css={tagAndDateContainer}>{children}</div>
  </>
)
const Date = ({ children }) => (
  <>
    <p css={date}>{children}</p>
  </>
)
const Dot = ({ children }) => (
  <>
    <div css={dot}>{children}</div>
  </>
)

const Title = ({ children }) => (
  <>
    <div css={theme => title(theme)}>{children}</div>
  </>
)
const Content = ({ children }) => (
  <>
    <div css={theme => content(theme)}>{children}</div>
  </>
)
const ReadMore = ({ children, theme }) => (
  <>
    <p css={readMore}>{children}</p>
  </>
)

const BlogPost = ({ children, postData, ...props }) => {
  // console.log("postData in blog post.js", postData)

  // Format Blog Date
  const dateStr = postData.date.toString()
  const Year = dateStr.split("-")[0]
  const Month = dateStr.split("-")[1]
  const Day = dateStr.split("-")[2].slice(0, 2)
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const formattedDate = monthArr[Month - 1] + " " + Day + ", " + Year

  // html tag regex
  const removeHtmlRegex = /(<([^>]+)>)/gi

  return (
    <>
      <BlogPostContainer href={postData.link}>
        <Image src={postData.better_featured_image.source_url} />
        <PostContainer>
          <TagAndDateContainer>
            <Tag fontSize="10px" padding="3px 5px">
              #{postData.categories[0].name}
            </Tag>
            <Date>{formattedDate}</Date>
          </TagAndDateContainer>
          <Title {...props}>
            {postData.title}
            {children}
          </Title>
          <Content>{postData.content.replace(removeHtmlRegex, "")}</Content>
          <ReadMore>
            <FormattedMessage id="readMore" defaultMessage="Read more..." />
          </ReadMore>
          {/* <ViewCountContainer>
            <ViewCountImage src={viewCountIcon} />
            <ViewCount>320</ViewCount>
          </ViewCountContainer> */}
        </PostContainer>
      </BlogPostContainer>
      <Dot />
    </>
  )
}

export default BlogPost
