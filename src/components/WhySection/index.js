import React, { useState, forwardRef } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useWindowScroll } from "react-use"
import Fade from "react-reveal/Fade"

import {
  container,
  contentContainer,
  whySectionItemContainer,
  whySectionItemContainer1,
  whySectionItemContainer2,
  whySectionItemContainer3,
} from "./style"
import Card from "./Card"

import useMedia from "@/hooks/useMedia"

import ThreeWHeader from "@/components/ThreeWHeader"
import fullConverageIcon from "@/images/why-fullCoverage.svg"
import realTimeIcon from "@/images/why-realTime.svg"
import transactionalDataIcon from "@/images/why-transactionalData.svg"

const ContentContainer = forwardRef(({ children, innerRef, ...props }, ref) => (
  <div css={contentContainer} ref={ref || innerRef} {...props}>
    {children}
  </div>
))

const WhySection = () => {
  const { y } = useWindowScroll()
  const [revealed, setRevealed] = useState(false)
  const transactionWidth = useMedia([87, 87], 116)
  const transactionHeight = useMedia([93, 93], 124)
  const skuLevelWidth = useMedia([90.8, 90.8], 121)
  const skuLevelHeight = useMedia([100.5, 100.5], 134)
  const rareCoverageWidth = useMedia([94.5, 94.5], 126)
  const rareCoverageHeight = useMedia([73.5, 73.5], 98)

  return (
    <div css={container}>
      <Fade
        refProp="innerRef"
        right
        when={revealed || y > 0}
        exit={false}
        onReveal={() => setRevealed(true)}
      >
        <ThreeWHeader
          header={<FormattedMessage id="why" defaultMessage="WHY" />}
          subHeader={
            <FormattedMessage
              id="measurableAI"
              defaultMessage="Measurable.ai"
            />
          }
          questionMark={
            <FormattedMessage id="questionMark" defaultMessage="?" />
          }
        />
      </Fade>
      <Fade refProp="innerRef" when={revealed || y > 0} left cascade>
        <ContentContainer>
          <Card
            css={[whySectionItemContainer, whySectionItemContainer1]}
            src={transactionalDataIcon}
            alt="TRANSACTIONAL EMAILS"
            width={transactionWidth}
            height={transactionHeight}
            title={
              <FormattedMessage
                id="whySectionTitle1"
                defaultMessage="REAL PURCHASE DATA"
              />
            }
            subTitle={
              <FormattedMessage
                id="whySectionSubTitle1"
                defaultMessage="Access anonymized, SKU-level high definition data or aggregated datasets on a weekly basis."
              />
            }
          />
          <Card
            css={[whySectionItemContainer, whySectionItemContainer2]}
            src={realTimeIcon}
            alt="SKU LEVEL"
            width={skuLevelWidth}
            height={skuLevelHeight}
            title={
              <FormattedMessage
                id="whySectionTitle2"
                defaultMessage="CONSUMER PANEL"
              />
            }
            subTitle={
              <FormattedMessage
                id="whySectionSubTitle2"
                defaultMessage="We develop and own the data source. We take personal privacy seriously and are GDPR and CCPA compliant."
              />
            }
          />
          <Card
            css={[whySectionItemContainer, whySectionItemContainer3]}
            src={fullConverageIcon}
            alt="RARE AND TIMELY  COVERAGE"
            width={rareCoverageWidth}
            height={rareCoverageHeight}
            title={
              <FormattedMessage
                id="whySectionTitle3"
                defaultMessage="RARE AND TIMELY  COVERAGE"
              />
            }
            subTitle={
              <FormattedMessage
                id="whySectionSubTitle3"
                defaultMessage="Largest alternative data provider for emerging markets including South-east Asia, Middle East, Latin America, India and more."
              />
            }
          />
        </ContentContainer>
      </Fade>
    </div>
  )
}

export default WhySection
