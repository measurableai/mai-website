import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import {
  blogPostContainer,
  image,
  postContainer,
  tagAndDateContainer,
  date,
  title,
  content,
  dot,
  blogTag,
  // viewCountContainer,
  // viewCountImage,
  // viewCount,
  readMore,
  anchor,
} from "./style"
import Tag from "@/components/Tag"
// import viewCountIcon from "@/images/icon-view@3x.png"

import useMedia from "@/hooks/useMedia"

const BlogTag = props => <Tag css={blogTag} {...props} />

const BlogPost = ({ children, postData, ...props }) => {
  const isDesktop = useMedia([false, false], true)

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

  function unescapeHTML(str) {
    // html tag regex
    const removeHtmlRegex = /(<([^>]+)>|&nbsp;)/gi
    str = str.replace(removeHtmlRegex, "")

    const unicodeRegex = /&([^;]+);/g
    var escapeChars = { lt: "<", gt: ">", quot: '"', apos: "'", amp: "&" }
    return str.replace(unicodeRegex, function(entity, entityCode) {
      var match

      if (entityCode in escapeChars) {
        return escapeChars[entityCode]
      } else if ((match = entityCode.match(/^#x([\da-fA-F]+)$/))) {
        return String.fromCharCode(parseInt(match[1], 16))
      } else if ((match = entityCode.match(/^#(\d+)$/))) {
        return String.fromCharCode(~~match[1])
      } else {
        return entity
      }
    })
  }

  return (
    <div css={blogPostContainer}>
      <OutboundLink
        css={anchor}
        href={postData.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        &nbsp;
      </OutboundLink>
      <div
        css={image}
        style={{
          backgroundImage: `url("${postData.featured_media.localFile &&
            postData.featured_media.localFile.childImageSharp.fluid.src}")`,
        }}
        alt="Wordpress Post"
      />
      <div css={postContainer}>
        <div css={tagAndDateContainer}>
          <BlogTag>#{postData.categories[0].name}</BlogTag>
          {isDesktop && <p css={date}>{formattedDate}</p>}
        </div>
        <div css={title} {...props}>
          {unescapeHTML(postData.title)}
          {children}
        </div>
        {isDesktop && <div css={content}>{unescapeHTML(postData.content)}</div>}
        {isDesktop && (
          <p css={readMore}>
            <FormattedMessage id="readMore" defaultMessage="Read more..." />
          </p>
        )}
        {!isDesktop && <p css={date}>{formattedDate}</p>}
        {/* <div css={viewCountContainer}>
          <img css={viewCountImage} src={viewCountIcon} alt="View Count"/>
          <p css={viewCount}>320</p>
        </div> */}
      </div>
      <div css={dot} />
    </div>
  )
}

export default BlogPost
