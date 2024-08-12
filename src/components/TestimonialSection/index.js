import React from "react"
import {
  heading,
  testimonialContent,
  authorName,
  authorOrganisation,
  cubeAsiaImg,
  columbiaImg,
  cuhkImg,
  flexContainer,
} from "./style"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

const TestimonialSection = props => {
  const images = useStaticQuery(graphql`
    query {
      cubeAsia: file(relativePath: { eq: "logos/cube-asia.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      columbia: file(relativePath: { eq: "logos/columbia-university.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cuhk: file(relativePath: { eq: "logos/cuhk.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const testimonials = [
    {
      text:
        "Measurable AI is able to provide unique, granular data that has allowed us to do a broad range of analyses. Their support teams have also helped us to understand the data well, so we can understand and use it effectively.",
      name: "Sarabjit Singh",
      org: "Co-founder of Cube Asia",
      img: images.cubeAsia.childImageSharp.fluid,
      imgStyle: cubeAsiaImg,
    },
    {
      text:
        "Measurable AI's data has been very valuable for my research! The transaction data has allowed me to analyze the effects of extreme weather on food delivery spending. Detailed information on the time and location of orders and delivery fees has allowed me to explore many interesting questions about the topic that I would not have been able to answer without the granular transaction data by Measurable AI.",
      name: "Anna Papp",
      org: "Researcher",
      img: images.columbia.childImageSharp.fluid,
      imgStyle: columbiaImg,
    },
    {
      text:
        "Measurable AI's data represents the most comprehensive dataset currently available for analyzing the food delivery industry in Southeast Asian cities. The granular-level information on orders from various platforms provide a robust foundation for understanding market structure and assessing the impact of policies on the industry. My research has been significantly enhanced through access to this data.",
      name: "Prof. Mandy Hu",
      org: "Director, Centre for Consumer Insights",
      img: images.cuhk.childImageSharp.fluid,
      imgStyle: cuhkImg,
    },
  ]

  return (
    <section style={{ marginBottom: "8rem" }}>
      <Fade right>
        <h2 css={heading}>Testimonials</h2>
      </Fade>

      <div css={flexContainer}>
        {testimonials.map((testimonial, index) => (
          <Fade right delay={150 * (testimonials.length - index)}>
            <div key={testimonial.text}>
              <p css={testimonialContent}>{testimonial.text + "”"}</p>
              {testimonial.name && <h5 css={authorName}>{testimonial.name}</h5>}
              {testimonial.org && (
                <h6 css={authorOrganisation}>{testimonial.org}</h6>
              )}
              <Img
                fluid={testimonial.img}
                css={testimonial.imgStyle}
                imgStyle={{ objectFit: "contain" }}
              />
            </div>
          </Fade>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
