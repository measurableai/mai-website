import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  if (data == null) data = { title: "", content: "" }
  else data = data.wordpressPost
  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query PostQuery($wordpress_id: Int!) {
    wordpressPost(wordpress_id: { eq: $wordpress_id }) {
      id
      slug
      title
      content
      path
    }
  }
`
