import React, { useState } from "react"
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

const WhySection = () => {
  const { y } = useWindowScroll()
  const [revealed, setRevealed] = useState(false)
  const isMobile = useMedia([true], false)
  const transactionWidth = useMedia([87], 116)
  const transactionHeight = useMedia([93], 124)
  const skuLevelWidth = useMedia([90.8], 121)
  const skuLevelHeight = useMedia([100.5], 134)
  const rareCoverageWidth = useMedia([94.5], 126)
  const rareCoverageHeight = useMedia([73.5], 98)

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
      <div css={contentContainer}>
        <Fade
          refProp="innerRef"
          left
          when={revealed || y > 0}
          delay={isMobile ? 0 : 1000}
        >
          <Card
            css={[whySectionItemContainer, whySectionItemContainer1]}
            src={transactionalDataIcon}
            alt="TRANSACTIONAL EMAILS"
            width={transactionWidth}
            height={transactionHeight}
            title={
              <FormattedMessage
                id="transactionalEmails"
                defaultMessage="TRANSACTIONAL EMAILS"
              />
            }
            subTitle={
              <FormattedMessage
                id="fromMillionsOfUsers"
                defaultMessage="from millions of users"
              />
            }
          />
        </Fade>
        <Fade refProp="innerRef" left delay={500}>
          <Card
            css={[whySectionItemContainer, whySectionItemContainer2]}
            src={realTimeIcon}
            alt="SKU LEVEL"
            width={skuLevelWidth}
            height={skuLevelHeight}
            title={
              <FormattedMessage id="skuLevel" defaultMessage="SKU LEVEL" />
            }
            subTitle={
              <FormattedMessage
                id="highDefinitionData"
                defaultMessage="High Definition Data"
              />
            }
          />
        </Fade>
        <Fade refProp="innerRef" left delay={isMobile ? 1000 : 0}>
          <Card
            css={[whySectionItemContainer, whySectionItemContainer3]}
            src={fullConverageIcon}
            alt="RARE COVERAGE"
            width={rareCoverageWidth}
            height={rareCoverageHeight}
            title={
              <FormattedMessage
                id="rareCoverage"
                defaultMessage="RARE COVERAGE"
              />
            }
            subTitle={
              <FormattedMessage
                id="overTenEmergingMarkets"
                defaultMessage="Over 10 Emerging markets"
              />
            }
          />
        </Fade>
      </div>
    </div>
  )
}

export default WhySection
