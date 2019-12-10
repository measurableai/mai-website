import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBackground from "../components/HeroBackground"
import SlopedSection from "../components/SlopedBackground"

const background = css`
  background-image: linear-gradient(
    90deg,
    rgba(0, 3, 29, 100),
    rgba(0, 3, 28, 53) 50%,
    rgba(0, 3, 24, 0)
  );
  background-color: #18113b;
`

const lastSection = css`
  margin-bottom: 300px;
`

const purpleLightToDark = `linear-gradient(
  -90deg,
  rgba(0, 3, 29, 100),
  rgba(0, 3, 28, 53) 50%,
  rgba(0, 3, 24, 0)
)`

const purpleDarkToLight = `linear-gradient(
  90deg,
  rgba(0, 3, 29, 100),
  rgba(0, 3, 28, 53) 50%,
  rgba(0, 3, 24, 0)
)`

const greenDarkToLight = `linear-gradient(
  90deg,
  #B3FFCB,
  #FFFFFF 50%
)`

const greenLightToDark = `linear-gradient(
  -90deg,
  #B3FFCB,
  #FFFFFF 50%
)`

const IndexPage = () => (
  <Layout headerMode="light">
    <SEO title="Home" />
    <HeroBackground />
    <SlopedSection
      css={background}
      slopedBackgroundImage={purpleLightToDark}
      slopedBackgroundColor="#18113b"
    >
      <p style={{ color: "white" }}>Section 1</p>
    </SlopedSection>
    <SlopedSection
      slopedBackgroundImage={purpleDarkToLight}
      slopedBackgroundColor="#18113b"
    >
      <p style={{ color: "white" }}>Section 2</p>
    </SlopedSection>
    <SlopedSection
      slopedBackgroundImage={purpleLightToDark}
      slopedBackgroundColor="#18113b"
    >
      <p style={{ color: "white" }}>Section 3</p>
    </SlopedSection>
    <SlopedSection slopedBackgroundImage={greenDarkToLight}>
      <p>Section 4</p>
    </SlopedSection>
    <SlopedSection slopedBackgroundImage={greenLightToDark}>
      <p>Section 5</p>
    </SlopedSection>
    <SlopedSection slopedBackgroundImage={greenDarkToLight}>
      <p>Section 6</p>
    </SlopedSection>
    <SlopedSection css={lastSection} slopedBackgroundColor="#68FF92">
      <p>Section 7</p>
    </SlopedSection>
  </Layout>
)

export default IndexPage
