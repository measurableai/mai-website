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
  whySectionItems,
  whySectionItemContainer,
  whySectionItemContainer1,
  whySectionItemContainer2,
  whySectionItemContainer3,
  empty,
  dotLineTitle,
  dotLineSubTitle,
} from "./style"
import ImageDotLineTitle from "@/components/ImageDotLineTitle"
import fullConverageIcon from "@/images/why-fullCoverage.svg"
import realTimeIcon from "@/images/why-realTime.svg"
import transactionalDataIcon from "@/images/why-transactionalData.svg"

const StyledImageDotLineTitle = props => (
  <ImageDotLineTitle css={dotLineTitle} {...props} />
)
const StyledImageDotLineSubTitle = props => (
  <span css={[dotLineTitle, dotLineSubTitle]} {...props} />
)

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
      <div css={empty} />
      <div css={whySectionItems}>
        <div css={[whySectionItemContainer, whySectionItemContainer1]}>
          <img
            height={124}
            width={116}
            src={transactionalDataIcon}
            alt="TRANSACTIONAL DATA"
          />
          <StyledImageDotLineTitle
            src={transactionalDataIcon}
            alt="TRANSACTIONAL DATA"
          >
            <FormattedMessage
              id="transactionalData"
              defaultMessage="TRANSACTIONAL DATA"
            />
            <StyledImageDotLineSubTitle>
              {" "}
              <FormattedMessage
                id="fromOnlineShopers"
                defaultMessage="from Online Shoppers"
              />
            </StyledImageDotLineSubTitle>
          </StyledImageDotLineTitle>
        </div>
        <div css={[whySectionItemContainer, whySectionItemContainer2]}>
          <img height={134} width={121} src={realTimeIcon} alt="REAL TIME" />
          <StyledImageDotLineTitle src={realTimeIcon} alt="REAL TIME">
            <FormattedMessage id="realTime" defaultMessage="REAL-TIME" />
            <StyledImageDotLineSubTitle>
              {" "}
              <FormattedMessage
                id="dataDashboard"
                defaultMessage="Data Dashboard"
              />
            </StyledImageDotLineSubTitle>
          </StyledImageDotLineTitle>
        </div>
        <div css={[whySectionItemContainer, whySectionItemContainer3]}>
          <img
            height={98}
            width={126}
            src={fullConverageIcon}
            alt="FULL COVERAGE"
          />
          <StyledImageDotLineTitle
            css={dotLineTitle}
            src={fullConverageIcon}
            alt="FULL COVERAGE"
          >
            <FormattedMessage
              id="fullCoverage"
              defaultMessage="FULL COVERAGE"
            />
            <StyledImageDotLineSubTitle>
              {" "}
              <FormattedMessage
                id="fromUsToAsia"
                defaultMessage="from US to Asia"
              />
            </StyledImageDotLineSubTitle>
          </StyledImageDotLineTitle>
        </div>
      </div>
    </div>
  </div>
)

export default WhySection
