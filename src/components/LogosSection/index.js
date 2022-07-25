import React, { forwardRef } from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import Category from "./Category"

import { container, achievementsContainer, trustedByContainer } from "./style"

import useMedia from "@/hooks/useMedia"

const Container = forwardRef(({ children, innerRef, ...props }, ref) => (
  <div css={container} ref={ref || innerRef} {...props}>
    {children}
  </div>
))

const LogosSection = props => {
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
      backedby04_cn: file(relativePath: { eq: "backedby04_cn.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby06_cn: file(relativePath: { eq: "backedby06_cn.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      backedby07_cn: file(relativePath: { eq: "backedby07_cn.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trustedby02_cn: file(relativePath: { eq: "trustedby02_cn.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aws: file(relativePath: { eq: "aws_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bloomberg: file(relativePath: { eq: "bloomberg_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      deloitte: file(relativePath: { eq: "deloitte_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const trustedByColumnCount = useMedia([2, 2], 1)
  const intl = useIntl()
  const englishVersion = intl.locale === "en-US"
  return (
    <Fade refProp="innerRef" bottom>
      <Container {...props}>
        <Category
          css={trustedByContainer}
          title={
            <FormattedMessage id="availableOn" defaultMessage="AVAILABLE ON" />
          }
          columnCount={trustedByColumnCount}
          images={[
            images.aws.childImageSharp.fluid,
            images.bloomberg.childImageSharp.fluid,
            images.deloitte.childImageSharp.fluid,
          ]}
        />
        <Category
          css={achievementsContainer}
          title={
            <FormattedMessage id="achievements" defaultMessage="ACHIEVEMENTS" />
          }
          columnCount={2}
          images={[
            images.achievements01.childImageSharp.fluid,
            images.achievements02.childImageSharp.fluid,
            images.achievements03.childImageSharp.fluid,
            images.achievements04.childImageSharp.fluid,
            images.achievements05.childImageSharp.fluid,
            images.achievements06.childImageSharp.fluid,
            images.achievements07.childImageSharp.fluid,
          ]}
        />
      </Container>
    </Fade>
  )
}

export default LogosSection
