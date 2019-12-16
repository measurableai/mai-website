import React from "react"

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
import buttonIcon from "./../../images/purple-arrow@3x.png"

const endPoint = "https://blog.measurable.ai/category/industries/"

const DataInsights = ({ children, posts, ...props }) => (
  <>
    <Container>
      <TagsContainer>
        <Title>DATA INSIGHTS</Title>
        <Tag
          href={endPoint + "e-commerce/"}
          fontSize="1.2rem"
          padding="3px 10px"
        >
          #E-COMMERCE
        </Tag>
        <Tag href={endPoint + "games/"} fontSize="1.2rem" padding="3px 10px">
          #GAMES
        </Tag>
        <Tag
          href={endPoint + "ride-sharing/"}
          fontSize="1.2rem"
          padding="3px 10px"
        >
          #RIDE SHARING
        </Tag>
        <Tag href={endPoint + "dating/"} fontSize="1.2rem" padding="3px 10px">
          #DATING
        </Tag>
        <Tag
          href={endPoint + "entertainment/"}
          fontSize="1.2rem"
          padding="3px 10px"
        >
          #ENTERTAINMENT
        </Tag>
        <ButtonImage src={buttonIcon} href={endPoint} />
      </TagsContainer>
      <BlogPostContainer1>
        <BlogPost postData={posts.edges[0].node} />
      </BlogPostContainer1>
      <BlogPostContainer2>
        <BlogPost postData={posts.edges[1].node} />
      </BlogPostContainer2>
      <BlogPostContainer3>
        <BlogPost postData={posts.edges[2].node} />
      </BlogPostContainer3>
    </Container>
  </>
)

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

export default DataInsights
