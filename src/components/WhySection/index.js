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
import ImageDotLine from "@/components/ImageDotLine"
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
      <ImageDotLine
        css={[whySectionItemContainer, whySectionItemContainer1]}
        src={transactionalDataIcon}
        alt={"TRANSACTIONAL DATA"}
        height={124}
        width={116}
        title={{
          id: "transactionalData",
          defaultMessage: "TRANSACTIONAL DATA",
        }}
        subTitle={{
          id: "fromOnlineShopers",
          defaultMessage: "from Online Shoppers",
        }}
      />
      <ImageDotLine
        css={[whySectionItemContainer, whySectionItemContainer2]}
        src={realTimeIcon}
        alt={"REAL TIME"}
        height={134}
        width={121}
        title={{ id: "realTime", defaultMessage: "REAL TIME" }}
        subTitle={{ id: "dataDashboard", defaultMessage: "Data Dashboard" }}
      />
      <ImageDotLine
        css={[whySectionItemContainer, whySectionItemContainer3]}
        src={fullConverageIcon}
        alt={"FULL COVERAGE"}
        height={98}
        width={126}
        title={{ id: "fullCoverage", defaultMessage: "FULL COVERAGE" }}
        subTitle={{ id: "fromUsToAsia", defaultMessage: "from US to Asia" }}
      />
    </div>
  </div>
)

export default WhySection
