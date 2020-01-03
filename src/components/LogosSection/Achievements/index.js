import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  achievementsImage,
  imageContainer,
  andMore,
  inlineContainer,
  inlineContainer1,
} from "./style"

const Achievements = () => {
  const Image = ({ fluid }) => <Img css={achievementsImage} fluid={fluid} />
  const images = useStaticQuery(graphql`
    query {
      achievements01: file(relativePath: { eq: "achievements01.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      achievements02: file(relativePath: { eq: "achievements02.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      achievements03: file(relativePath: { eq: "achievements03.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      achievements04: file(relativePath: { eq: "achievements04.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      achievements05: file(relativePath: { eq: "achievements05.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      achievements06: file(relativePath: { eq: "achievements06.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      achievements07: file(relativePath: { eq: "achievements07.png" }) {
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
        <Image fluid={images.achievements01.childImageSharp.fluid} />
        <Image fluid={images.achievements03.childImageSharp.fluid} />
        <Image fluid={images.achievements05.childImageSharp.fluid} />
        <Image fluid={images.achievements07.childImageSharp.fluid} />
      </div>
      <div css={inlineContainer}>
        <Image fluid={images.achievements02.childImageSharp.fluid} />
        <Image fluid={images.achievements04.childImageSharp.fluid} />
        <Image fluid={images.achievements06.childImageSharp.fluid} />
        <div>
          <p css={andMore}>
            <FormattedMessage id="andMore" defaultMessage="and more..." />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Achievements
