import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const PressPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Press" />
      <h1>Press page</h1>
      <div>
        <h4>{data.allWordpressPost.edges.length} Posts</h4>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.slug}>
              <p>{node.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          content
          path
          slug
          title
          wordpress_id
        }
      }
    }
  }
`

export default PressPage
