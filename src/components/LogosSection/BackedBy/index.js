import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  imageContainer,
  backedByImage,
  inlineContainer,
  inlineContainer1,
  andMore,
} from "./style"

const BackedBy = () => {
  const Image = ({ fluid }) => <Img css={backedByImage} fluid={fluid} />
  const images = useStaticQuery(graphql`
    query {
      backedby01: file(relativePath: { eq: "backedby01.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby02: file(relativePath: { eq: "backedby02.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby03: file(relativePath: { eq: "backedby03.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby04: file(relativePath: { eq: "backedby04.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby05: file(relativePath: { eq: "backedby05.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby06: file(relativePath: { eq: "backedby06.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby07: file(relativePath: { eq: "backedby07.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div css={imageContainer}>
      <div css={[inlineContainer, inlineContainer1]}>
        <Image fluid={images.backedby01.childImageSharp.fluid} />
        <Image fluid={images.backedby03.childImageSharp.fluid} />
        <Image fluid={images.backedby05.childImageSharp.fluid} />
        <Image fluid={images.backedby07.childImageSharp.fluid} />
      </div>
      <div css={inlineContainer}>
        <Image fluid={images.backedby02.childImageSharp.fluid} />
        <Image fluid={images.backedby04.childImageSharp.fluid} />
        <Image fluid={images.backedby06.childImageSharp.fluid} />
        <div>
          <p css={andMore}>
            <FormattedMessage id="andMore" defaultMessage="and more..." />
          </p>
        </div>
      </div>
    </div>
  )
}

export default BackedBy
