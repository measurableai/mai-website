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

const Container = ({ children }) => <div css={container}>{children}</div>
const Title = ({ children, theme }) => (
  <p css={theme => title(theme)}>{children}</p>
)
const TagsContainer = ({ children }) => (
  <div css={tagsContainer}>{children}</div>
)
const BlogPostContainer1 = ({ children }) => (
  <div css={blogPostContainer1}>{children}</div>
)
const BlogPostContainer2 = ({ children }) => (
  <div css={blogPostContainer2}>{children}</div>
)
const BlogPostContainer3 = ({ children }) => (
  <div css={blogPostContainer3}>{children}</div>
)
const ButtonImage = ({ children, src, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img css={buttonImage} src={src} alt="Button">
      {children}
    </img>
  </a>
)

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
    <Container>
      <TagsContainer>
        <Title>
          <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
        </Title>
        <Tag
          href={endPoint + "e-commerce/"}
          fontSize="1.2rem"
          padding="3px 10px"
        >
          <FormattedMessage id="eCommerce-tag" defaultMessage="#E-COMMERCE" />
        </Tag>
        <Tag href={endPoint + "games/"} fontSize="1.2rem" padding="3px 10px">
          <FormattedMessage id="games-tag" defaultMessage="#GAMES" />
        </Tag>
        <Tag
          href={endPoint + "ride-sharing/"}
          fontSize="1.2rem"
          padding="3px 10px"
        >
          <FormattedMessage
            id="rideSharing-tag"
            defaultMessage="#RIDE SHARING"
          />
        </Tag>
        <Tag href={endPoint + "dating/"} fontSize="1.2rem" padding="3px 10px">
          <FormattedMessage id="dating-tag" defaultMessage="#DATING" />
        </Tag>
        <Tag
          href={endPoint + "entertainment/"}
          fontSize="1.2rem"
          padding="3px 10px"
        >
          <FormattedMessage
            id="entertainment-tag"
            defaultMessage="#ENTERTAINMENT"
          />
        </Tag>
        <ButtonImage src={purpleRightArrowIcon} href={endPoint} />
      </TagsContainer>
      <BlogPostContainer1>
        <BlogPost postData={allWordpressPost.edges[0].node} />
      </BlogPostContainer1>
      <BlogPostContainer2>
        <BlogPost postData={allWordpressPost.edges[1].node} />
      </BlogPostContainer2>
      <BlogPostContainer3>
        <BlogPost postData={allWordpressPost.edges[2].node} />
      </BlogPostContainer3>
    </Container>
  )
}

export default DataInsights
