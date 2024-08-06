import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { layoutContainer, logosLayout } from "./style"
import Img from "gatsby-image"

const NewLogosSection = props => {
  const images = useStaticQuery(graphql`
    query {
      cnbc: file(relativePath: { eq: "logos/cnbc.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bloomberg: file(relativePath: { eq: "logos/bloomberg.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scmp: file(relativePath: { eq: "logos/scmp.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hket: file(relativePath: { eq: "logos/hket.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marketingInteractive: file(
        relativePath: { eq: "logos/marketing-interactive.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yahooHkFinance: file(relativePath: { eq: "logos/yahoo-hk-finance.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      statista: file(relativePath: { eq: "logos/statista.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bloombergIntelligence: file(
        relativePath: { eq: "logos/bloomberg-intelligence.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ubs: file(relativePath: { eq: "logos/ubs.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barclays: file(relativePath: { eq: "logos/barclays.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gfSecurities: file(relativePath: { eq: "logos/gf-securities.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maybank: file(relativePath: { eq: "logos/maybank.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htsc: file(relativePath: { eq: "logos/htsc.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      miraeAssetSecurities: file(
        relativePath: { eq: "logos/mirae-asset-securities.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bahanaSekuritas: file(
        relativePath: { eq: "logos/bahana-sekuritas.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chinaRenaissance: file(
        relativePath: { eq: "logos/china-renaissance.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bocom: file(relativePath: { eq: "logos/bocom.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samuelSekuritas: file(
        relativePath: { eq: "logos/samuel-sekuritas.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cubeAsia: file(relativePath: { eq: "logos/cube-asia.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      antenna: file(relativePath: { eq: "logos/antenna.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      momentumAsia: file(relativePath: { eq: "logos/momentum-asia.png" }) {
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
      polyu: file(relativePath: { eq: "logos/polyu.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      columbiaUniversity: file(
        relativePath: { eq: "logos/columbia-university.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mit: file(relativePath: { eq: "logos/mit.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hkust: file(relativePath: { eq: "logos/hkust.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rutgers: file(relativePath: { eq: "logos/rutgers.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      texas: file(relativePath: { eq: "logos/texas.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      usc: file(relativePath: { eq: "logos/usc.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const logoList = [
    {
      title: "Measurable AI in the News",
      logos: [
        { name: "cnbc", width: 38 },
        { name: "bloomberg", width: 75 },
        { name: "scmp", width: 41 },
        { name: "hket", width: 43 },
        { name: "marketingInteractive", width: 70 },
        { name: "yahooHkFinance", width: 75 },
      ],
    },
    {
      title: "Data Used in Research Report",
      logos: [
        { name: "statista", width: 38 },
        { name: "bloombergIntelligence", width: 75 },
        { name: "ubs", width: 41 },
        { name: "barclays", width: 41 },
        { name: "gfSecurities", width: 43 },
        { name: "maybank", width: 70 },
        { name: "htsc", width: 75 },
        { name: "miraeAssetSecurities", width: 52 },
        { name: "bahanaSekuritas", width: 52 },
        { name: "chinaRenaissance", width: 52 },
        { name: "bocom", width: 52 },
        { name: "samuelSekuritas", width: 52 },
        { name: "cubeAsia", width: 52 },
        { name: "antenna", width: 52 },
        { name: "momentumAsia", width: 52 },
      ],
    },
    {
      title: "Data Used in Academic Research",
      logos: [
        { name: "cuhk", width: 38 },
        { name: "polyu", width: 75 },
        { name: "columbiaUniversity", width: 41 },
        { name: "mit", width: 41 },
        { name: "hkust", width: 43 },
        { name: "rutgers", width: 70 },
        { name: "texas", width: 75 },
        { name: "usc", width: 52 },
      ],
    },
  ]

  return (
    <section>
      <div css={layoutContainer}>
        {logoList.map((cat, cid) => (
          <div key={cat.title}>
            <h2>{cat.title}</h2>
            <div css={logosLayout}>
              {cat.logos.map((logo, lid) => (
                <div key={`${cid}${lid}`}>
                  <Img
                    fluid={images[logo.name].childImageSharp.fluid}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                    imgStyle={{
                      objectFit: "contain",
                      width: logo.width + "%",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewLogosSection
