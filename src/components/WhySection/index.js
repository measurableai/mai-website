import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  title,
  titleStyle,
  subTitle,
  questionMark,
  titleContainer,
  contentContainer,
  whySectionItemContainer,
  whySectionItemContainer1,
  whySectionItemContainer2,
  whySectionItemContainer3,
} from "./style"
import Card from "./Card"
import fullConverageIcon from "@/images/why-fullCoverage.svg"
import realTimeIcon from "@/images/why-realTime.svg"
import transactionalDataIcon from "@/images/why-transactionalData.svg"

const WhySection = () => (
  <div css={container}>
    <div css={titleContainer}>
      <p css={theme => [titleStyle(theme), title(theme)]}>
        <FormattedMessage id="why" defaultMessage="WHY" />
      </p>
      <p css={theme => [titleStyle(theme), subTitle(theme)]}>
        <FormattedMessage id="measurableAI" defaultMessage="Measurable.ai" />
        <span css={questionMark}>
          <FormattedMessage id="questionMark" defaultMessage="?" />
        </span>
      </p>
    </div>
    <div css={contentContainer}>
      <Card
        css={[whySectionItemContainer, whySectionItemContainer1]}
        src={transactionalDataIcon}
        alt={"TRANSACTIONAL DATA"}
        height={124}
        width={116}
        title={
          <FormattedMessage
            id="transactionalData"
            defaultMessage="TRANSACTIONAL DATA"
          />
        }
        subTitle={
          <FormattedMessage
            id="fromOnlineShopers"
            defaultMessage="from Online Shoppers"
          />
        }
      />
      <Card
        css={[whySectionItemContainer, whySectionItemContainer2]}
        src={realTimeIcon}
        alt={"REAL TIME"}
        height={134}
        width={121}
        title={<FormattedMessage id="realTime" defaultMessage="REAL TIME" />}
        subTitle={
          <FormattedMessage
            id="dataDashboard"
            defaultMessage="Data Dashboard"
          />
        }
      />
      <Card
        css={[whySectionItemContainer, whySectionItemContainer3]}
        src={fullConverageIcon}
        alt={"FULL COVERAGE"}
        height={98}
        width={126}
        title={
          <FormattedMessage id="fullCoverage" defaultMessage="FULL COVERAGE" />
        }
        subTitle={
          <FormattedMessage
            id="fromUsToAsia"
            defaultMessage="from US to Asia"
          />
        }
      />
    </div>
  </div>
)

export default WhySection
