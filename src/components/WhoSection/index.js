import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleContainer,
  imagesContainer,
  titleStyle,
  title,
  subTitle,
  questionMark,
  image,
  image1,
  image2,
  image3,
  image4,
} from "./style"
import mediaIcon from "@/images/who-media.svg"
import merchantsIcon from "@/images/who-merchants.svg"
import financialInstitutionsIcon from "@/images/who-financialInstitutions.svg"
import researchersIcon from "@/images/who-researchers.svg"
import WhoSectionIcon from "@/components/WhoSectionIcon"

const WhoSection = ({ children, ...props }) => (
  <div css={container}>
    <div css={titleContainer}>
      <p css={theme => [titleStyle(theme), title(theme)]}>
        <FormattedMessage id="who" defaultMessage="WHO" />
      </p>
      <p css={theme => [titleStyle(theme), subTitle(theme)]}>
        <FormattedMessage
          id="areOurTargetUsers"
          defaultMessage="are our target users"
        />
        <span css={questionMark}>
          <FormattedMessage id="questionMark" defaultMessage="?" />
        </span>
      </p>
    </div>
    <div css={imagesContainer}>
      <WhoSectionIcon
        css={[image, image1]}
        src={mediaIcon}
        alt={"Media"}
        header={{ id: "media", defaultMessage: "Media" }}
      />
      <WhoSectionIcon
        css={[image, image2]}
        src={researchersIcon}
        alt={"Researchers"}
        header={{ id: "researchers", defaultMessage: "Researchers" }}
      />
      <WhoSectionIcon
        css={[image, image3]}
        src={merchantsIcon}
        alt={"Merchants"}
        header={{ id: "merchants", defaultMessage: "Merchants" }}
      />
      <WhoSectionIcon
        css={[image, image4]}
        src={financialInstitutionsIcon}
        alt={"Financial Institutions"}
        header={{
          id: "financialInstitutions",
          defaultMessage: "Financial Institutions",
        }}
      />
    </div>
  </div>
)

export default WhoSection
