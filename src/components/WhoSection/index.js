import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleContainer,
  imageContainer,
  titleStyle,
  title,
  subTitle,
  questionMark,
  empty,
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
    <div css={imageContainer}>
      <div css={empty} />
      <img css={[image, image1]} src={mediaIcon} alt="Media" />
      <img css={[image, image2]} src={researchersIcon} alt="Researchers" />
      <img css={[image, image3]} src={merchantsIcon} alt="Merchants" />
      <img
        css={[image, image4]}
        src={financialInstitutionsIcon}
        alt="Financial Institutions"
      />
    </div>
  </div>
)

export default WhoSection
