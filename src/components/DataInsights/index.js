import React, { forwardRef } from "react"
import { useTheme } from "emotion-theming"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import {
  container,
  contentContainer,
  title,
  tagsAndButtonContainer,
  tagsContainer,
  buttonContainer,
  blogsContainer,
  blogContainer,
  blogContainer1,
  blogContainer2,
  blogContainer3,
  dataInsightsTag,
} from "./style"
import BlogPost from "@/components/BlogPost"
import Tag from "@/components/Tag"
import RightArrowIcon from "@/assets/right-arrow.svg"

const endPoint = "https://blog.measurable.ai/category/industries/"
const DELAY = 300

const Title = forwardRef(({ children, innerRef, ...props }, ref) => (
  <p css={title} ref={ref || innerRef} {...props}>
    {children}
  </p>
))

const TagsAndButtonContainer = forwardRef(
  ({ children, innerRef, ...props }, ref) => (
    <div css={tagsAndButtonContainer} ref={ref || innerRef} {...props}>
      {children}
    </div>
  )
)

const DataInsightsTag = props => <Tag css={dataInsightsTag} {...props} />

const BlogContainer = forwardRef(({ children, innerRef, ...props }, ref) => (
  <div css={blogContainer} ref={ref || innerRef} {...props}>
    {children}
  </div>
))

const DataInsights = () => {
  const theme = useTheme()
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
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(
                      maxHeight: 190
                      maxWidth: 190
                      quality: 100
                      cropFocus: CENTER
                      fit: INSIDE
                    ) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div css={container}>
      <Fade refProp="innerRef" right>
        <Title>
          <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
        </Title>
      </Fade>
      <div css={contentContainer}>
        <Fade refProp="innerRef" right>
          <TagsAndButtonContainer>
            <div css={tagsContainer}>
              <DataInsightsTag href={endPoint + "e-commerce/"}>
                <FormattedMessage
                  id="eCommerce-tag"
                  defaultMessage="#E-COMMERCE"
                />
              </DataInsightsTag>
              <DataInsightsTag href={endPoint + "games/"}>
                <FormattedMessage id="games-tag" defaultMessage="#GAMES" />
              </DataInsightsTag>
              <DataInsightsTag href={endPoint + "ride-sharing/"}>
                <FormattedMessage
                  id="rideSharing-tag"
                  defaultMessage="#RIDE SHARING"
                />
              </DataInsightsTag>
              <DataInsightsTag href={endPoint + "dating/"}>
                <FormattedMessage id="dating-tag" defaultMessage="#DATING" />
              </DataInsightsTag>
              <DataInsightsTag href={endPoint + "entertainment/"}>
                <FormattedMessage
                  id="entertainment-tag"
                  defaultMessage="#ENTERTAINMENT"
                />
              </DataInsightsTag>
            </div>
            <OutboundLink
              css={buttonContainer}
              href={endPoint}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RightArrowIcon
                fill={theme.colors.purples.normal}
                width={46}
                height={67}
              />
            </OutboundLink>
          </TagsAndButtonContainer>
        </Fade>
        <div css={blogsContainer}>
          <Fade refProp="innerRef" left>
            <BlogContainer css={blogContainer1}>
              <BlogPost postData={allWordpressPost.edges[0].node} />
            </BlogContainer>
          </Fade>
          <Fade refProp="innerRef" left delay={DELAY}>
            <BlogContainer css={blogContainer2}>
              <BlogPost postData={allWordpressPost.edges[1].node} />
            </BlogContainer>
          </Fade>
          <Fade refProp="innerRef" left delay={DELAY * 2}>
            <BlogContainer css={blogContainer3}>
              <BlogPost postData={allWordpressPost.edges[2].node} />
            </BlogContainer>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default DataInsights
