import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { css } from "@emotion/core"
import { mq } from "@/theme"
import AnnualReportForm from "@/components/MiddleEastOnlineDeliveryReport/Form"

import "@/fonts/barlow.css"

import ogImageJpg from "@/images/annual-report/middle-east-online-delivery/og-image.jpg"
import ReportBody from "@/components/MiddleEastOnlineDeliveryReport/Body"

const layout = css`
  width: 100rem;
  margin: 0 auto;
  padding-top: 12rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "main main aside";
  gap: 4rem;

  ${mq.tablet} {
    width: 100%;
    padding: 6.4rem 2.4rem 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 0;
  }

  & > div {
    grid-area: main;
    text-align: left;
  }
  & > aside {
    grid-area: aside;
  }
`

const background = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 58vw;
  min-height: 600px;
  max-height: 1000px;
  overflow: hidden;

  svg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    min-width: 1027px;
    height: auto;
  }
`

const MiddleEastOnlineDeliveryReportPage = () => {
  return (
    <>
      <SEO
        title="Middle East Online Delivery Report 2020 - 2024: Food + Grocery"
        description="Measurable AI’s latest report on middle east online delivery industry 2020-2024 across Saudi Arabia, United Arab Emirates, Qatar, Turkey, Egypt, Kuwait."
        meta={[
          {
            name: "image",
            property: "og:image",
            content: `https://www.measurable.ai${ogImageJpg}`,
          },
          {
            property: "og:image:type",
            content: "image/jpg",
          },
          {
            property: "og:image:width",
            content: "842",
          },
          {
            property: "og:image:height",
            content: "442",
          },
        ]}
      />
      <Layout headerMode="light">
        <div css={background}>
          <svg
            viewBox="0 0 1920 1121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H1920V364L0 1121V0Z"
              fill="url(#paint0_linear_1894_4622)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1894_4622"
                x1="926.5"
                y1="254.345"
                x2="-142.831"
                y2="1529.74"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.230902" stop-color="#00F9D8" stop-opacity="0" />
                <stop offset="1" stop-color="#00F9D8" stop-opacity="0.24" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div css={layout}>
          <div>
            <ReportBody />
          </div>
          <aside>
            <AnnualReportForm />
          </aside>
        </div>
      </Layout>
    </>
  )
}

export default MiddleEastOnlineDeliveryReportPage
