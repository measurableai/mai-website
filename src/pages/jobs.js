import React from "react"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import JobSection from "@/components/JobSection"

const JobPage = () => (
  <Layout>
    <SEO title="Press" />
    <h1>Jobs page</h1>
    <JobSection />
  </Layout>
)

export default JobPage
