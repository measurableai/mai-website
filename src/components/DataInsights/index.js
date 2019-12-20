import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import {
  container,
  contentContainer,
  title,
  titleContainer,
  tagsContainer,
  buttonImage,
} from "./style"
import BlogPost from "../../components/BlogPost"
import Tag from "../../components/Tag"
import purpleRightArrowIcon from "./../../images/purple-right-arrow.svg"

const endPoint = "https://blog.measurable.ai/category/industries/"

const BlogTag = props => <Tag fontSize="17px" padding="0 14px" {...props} />

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

  return (
    <div css={container}>
      <div css={titleContainer}>
        <p css={theme => title(theme)}>
          <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
        </p>
      </div>
      <div css={contentContainer}>
        <div css={tagsContainer}>
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
        <div>
          <BlogPost postData={allWordpressPost.edges[0].node} />
        </div>
        <div>
          <BlogPost postData={allWordpressPost.edges[1].node} />
        </div>
        <div>
          <BlogPost postData={allWordpressPost.edges[2].node} />
        </div>
      </div>
    </div>
  )
}

export default DataInsights
