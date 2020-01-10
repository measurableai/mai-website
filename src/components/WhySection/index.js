import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

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
  const transactionWidth = useMedia([87], 116)
  const transactionHeight = useMedia([93], 124)
  const skuLevelWidth = useMedia([90.8], 121)
  const skuLevelHeight = useMedia([100.5], 134)
  const rareCoverageWidth = useMedia([94.5], 126)
  const rareCoverageHeight = useMedia([73.5], 98)
  return (
    <div css={container}>
      <ThreeWHeader
        header={<FormattedMessage id="why" defaultMessage="WHY" />}
        subHeader={
          <FormattedMessage id="measurableAI" defaultMessage="Measurable.ai" />
        }
        questionMark={<FormattedMessage id="questionMark" defaultMessage="?" />}
      />
      <div css={contentContainer}>
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
        <Card
          css={[whySectionItemContainer, whySectionItemContainer2]}
          src={realTimeIcon}
          alt="SKU LEVEL"
          width={skuLevelWidth}
          height={skuLevelHeight}
          title={<FormattedMessage id="skuLevel" defaultMessage="SKU LEVEL" />}
          subTitle={
            <FormattedMessage
              id="highDefinitionData"
              defaultMessage="High Definition Data"
            />
          }
        />
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
      </div>
    </div>
  )
}

export default WhySection
