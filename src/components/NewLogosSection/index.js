import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  layoutContainer,
  logosTable,
  header,
  headerTitle,
  logoWrapper,
  logoDescription,
} from "./style"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

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
      cmu: file(relativePath: { eq: "logos/cmu.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dalaAward: file(relativePath: { eq: "logos/dala-award-2024.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      retailInnovationAward: file(
        relativePath: { eq: "logos/retail-innovation-award-2019.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      theNewYorkTimes: file(
        relativePath: { eq: "logos/the-new-york-times.png" }
      ) {
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
      title: "Achievements",
      width: "4/15",
      gridTemplateColumns: {
        desktop: 1,
        tablet: 2,
        mobile: 1,
      },
      logoWrapperWidth: 148,
      logos: [
        {
          name: "dalaAward",
          width: 88,
          logoWrapperHeight: 56,
          description:
            "<p>Best Data Monetization Award</p><p>Best Data Tech Startup Award</p>",
        },
        {
          name: "retailInnovationAward",
          width: 70,
          logoWrapperHeight: 56,
          description: "<p>Retailer Choice Award</p>",
        },
      ],
    },
    {
      title: "News Coverage",
      width: "3/15",
      gridTemplateColumns: {
        desktop: 1,
        tablet: 3,
        mobile: 3,
      },
      logoWrapperWidth: 160,
      logos: [
        { name: "theNewYorkTimes", width: 90, logoWrapperHeight: 30 },
        { name: "cnbc", width: 30, logoWrapperHeight: 72 },
        { name: "scmp", width: 50, logoWrapperHeight: 60 },
        { name: "marketingInteractive", width: 60, logoWrapperHeight: 50 },
        { name: "bloomberg", width: 65, logoWrapperHeight: 40 },
        { name: "hket", width: 35, logoWrapperHeight: 50 },
        { name: "yahooHkFinance", width: 50, logoWrapperHeight: 50 },
      ],
    },

    {
      title: "Data Used in<br/>Academic Research",
      width: "5/15",
      gridTemplateColumns: {
        desktop: 1,
        tablet: 3,
        mobile: 3,
      },
      logoWrapperWidth: 136,
      logos: [
        { name: "cmu", width: 53, logoWrapperHeight: 50 },
        { name: "columbiaUniversity", width: 100, logoWrapperHeight: 50 },
        { name: "cuhk", width: 75, logoWrapperHeight: 50 },
        { name: "hkust", width: 95, logoWrapperHeight: 50 },
        { name: "texas", width: 70, logoWrapperHeight: 50 },
        { name: "mit", width: 80, logoWrapperHeight: 50 },
        { name: "polyu", width: 75, logoWrapperHeight: 50 },
        { name: "rutgers", width: 70, logoWrapperHeight: 50 },
        { name: "usc", width: 70, logoWrapperHeight: 50 },
      ],
    },
    {
      title: "Data Used in<br/>Research Report",
      width: "3/15",
      gridTemplateColumns: {
        desktop: 2,
        tablet: 3,
        mobile: 3,
      },
      logoWrapperWidth: 136,
      logos: [
        { name: "statista", width: 68, logoWrapperHeight: 50 },
        { name: "bloombergIntelligence", width: 90, logoWrapperHeight: 50 },
        { name: "ubs", width: 60, logoWrapperHeight: 50 },
        { name: "barclays", width: 90, logoWrapperHeight: 50 },
        { name: "gfSecurities", width: 60, logoWrapperHeight: 50 },
        { name: "maybank", width: 90, logoWrapperHeight: 50 },
        { name: "cubeAsia", width: 62, logoWrapperHeight: 50 },
        { name: "antenna", width: 60, logoWrapperHeight: 50 },
        { name: "momentumAsia", width: 65, logoWrapperHeight: 50 },
        { name: "htsc", width: 68, logoWrapperHeight: 50 },
        { name: "miraeAssetSecurities", width: 90, logoWrapperHeight: 50 },
        { name: "bahanaSekuritas", width: 90, logoWrapperHeight: 50 },
        { name: "chinaRenaissance", width: 78, logoWrapperHeight: 50 },
        { name: "bocom", width: 78, logoWrapperHeight: 50 },
        { name: "samuelSekuritas", width: 65, logoWrapperHeight: 50 },
      ],
    },
  ]

  return (
    <section>
      <div css={layoutContainer}>
        {logoList.map((cat, cid) => (
          <div key={cat.title}>
            <Fade left delay={150 * cid}>
              <div css={header}>
                <h2
                  css={headerTitle}
                  dangerouslySetInnerHTML={{ __html: cat.title }}
                ></h2>
              </div>
            </Fade>

            <Fade left delay={150 * cid}>
              <div css={logosTable(cat["gridTemplateColumns"])}>
                {cat.logos.map((logo, lid) => (
                  <div>
                    <div
                      key={`${cid}${lid}`}
                      css={logoWrapper([
                        cat.logoWrapperWidth,
                        logo.logoWrapperHeight,
                      ])}
                    >
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
                    {logo.description && (
                      <div
                        css={logoDescription}
                        dangerouslySetInnerHTML={{ __html: logo.description }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewLogosSection
