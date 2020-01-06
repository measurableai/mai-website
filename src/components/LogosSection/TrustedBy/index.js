import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { trustedByImage, andMore } from "./style"

const Image = ({ fluid }) => <Img css={trustedByImage} fluid={fluid} />
const TrustedBy = () => {
  const images = useStaticQuery(graphql`
    query {
      trustedby01: file(relativePath: { eq: "trustedby01.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trustedby02: file(relativePath: { eq: "trustedby02.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Image fluid={images.trustedby01.childImageSharp.fluid} />
      <Image fluid={images.trustedby02.childImageSharp.fluid} />
      <div>
        <p css={andMore}>
          <FormattedMessage id="andMore" defaultMessage="and more..." />
        </p>
      </div>
    </div>
  )
}

export default TrustedBy
