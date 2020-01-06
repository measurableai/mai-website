import React from "react"
import { useTheme } from "emotion-theming"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import {
  container,
  contentContainer,
  title,
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

const DataInsightsTag = props => <Tag css={dataInsightsTag} {...props} />

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
      <p css={theme => title(theme)}>
        <FormattedMessage id="dataInsights" defaultMessage="Data Insights" />
      </p>
      <div css={contentContainer}>
        <div css={tagsContainer}>
          <DataInsightsTag href={endPoint + "e-commerce/"}>
            <FormattedMessage id="eCommerce-tag" defaultMessage="#E-COMMERCE" />
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
          <a
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
          </a>
        </div>
        <div css={blogsContainer}>
          <div css={[blogContainer, blogContainer1]}>
            <BlogPost postData={allWordpressPost.edges[0].node} />
          </div>
          <div css={[blogContainer, blogContainer2]}>
            <BlogPost postData={allWordpressPost.edges[1].node} />
          </div>
          <div css={[blogContainer, blogContainer3]}>
            <BlogPost postData={allWordpressPost.edges[2].node} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataInsights
