import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import {
  container,
  title,
  tagsContainer,
  blogPostContainer1,
  blogPostContainer2,
  blogPostContainer3,
  buttonImage,
} from "./style"
import BlogPost from "../../components/BlogPost"
import Tag from "../../components/Tag"
import purpleRightArrowIcon from "./../../images/purple-right-arrow.svg"

const endPoint = "https://blog.measurable.ai/category/industries/"

const DataInsights = ({ children, ...props }) => {
  const { allWordpressPost } = useStaticQuery(
    graphql`
      query {
        allWordpressPost(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              content
              path
              slug
              title
              wordpress_id
              link
              date
              categories {
                name
              }
              better_featured_image {
                source_url
              }
            }
          }
        }
      }
    `
  )

  const BlogTag = props => (
    <Tag fontSize="1.2rem" padding="3px 10px" {...props} />
  )

  return (
    <div css={container}>
      <div css={tagsContainer}>
        <p css={theme => title(theme)}>
          <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
        </p>
        <BlogTag href={endPoint + "e-commerce/"}>
          <FormattedMessage id="eCommerce-tag" defaultMessage="#E-COMMERCE" />
        </BlogTag>
        <BlogTag href={endPoint + "games/"}>
          <FormattedMessage id="games-tag" defaultMessage="#GAMES" />
        </BlogTag>
        <BlogTag href={endPoint + "ride-sharing/"}>
          <FormattedMessage
            id="rideSharing-tag"
            defaultMessage="#RIDE SHARING"
          />
        </BlogTag>
        <BlogTag href={endPoint + "dating/"}>
          <FormattedMessage id="dating-tag" defaultMessage="#DATING" />
        </BlogTag>
        <BlogTag href={endPoint + "entertainment/"}>
          <FormattedMessage
            id="entertainment-tag"
            defaultMessage="#ENTERTAINMENT"
          />
        </BlogTag>
        <a href={endPoint} target="_blank" rel="noopener noreferrer">
          <img css={buttonImage} src={purpleRightArrowIcon} alt="Button" />
        </a>
      </div>
      <div css={blogPostContainer1}>
        <BlogPost postData={allWordpressPost.edges[0].node} />
      </div>
      <div css={blogPostContainer2}>
        <BlogPost postData={allWordpressPost.edges[1].node} />
      </div>
      <div css={blogPostContainer3}>
        <BlogPost postData={allWordpressPost.edges[2].node} />
      </div>
    </div>
  )
}

export default DataInsights
