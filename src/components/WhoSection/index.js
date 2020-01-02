import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleContainer,
  imagesContainer,
  image,
  image1,
  image2,
  image3,
  image4,
} from "./style"
import Icon from "./Icon"

import ThreeWHeader from "@/components/ThreeWHeader"
import mediaIcon from "@/images/who-media.svg"
import merchantsIcon from "@/images/who-merchants.svg"
import financialInstitutionsIcon from "@/images/who-financialInstitutions.svg"
import researchersIcon from "@/images/who-researchers.svg"

const WhoSection = () => (
  <div css={container}>
    <ThreeWHeader
      css={titleContainer}
      header={<FormattedMessage id="who" defaultMessage="WHO" />}
      subHeader={
        <FormattedMessage
          id="areOurTargetUsers"
          defaultMessage="are our target users"
        />
      }
      questionMark={<FormattedMessage id="questionMark" defaultMessage="?" />}
    />
    <div css={imagesContainer}>
      <Icon
        css={[image, image1]}
        src={mediaIcon}
        alt="Media"
        header={<FormattedMessage id="media" defaultMessage="Media" />}
      />
      <Icon
        css={[image, image2]}
        src={researchersIcon}
        alt="Researchers"
        header={
          <FormattedMessage id="researchers" defaultMessage="Researchers" />
        }
      />
      <Icon
        css={[image, image3]}
        src={merchantsIcon}
        alt="Merchants"
        header={<FormattedMessage id="merchants" defaultMessage="Merchants" />}
      />
      <Icon
        css={[image, image4]}
        src={financialInstitutionsIcon}
        alt="Financial Institutions"
        header={
          <FormattedMessage
            id="financialInstitutions"
            defaultMessage="Financial Institutions"
          />
        }
      />
    </div>
  </div>
)

export default WhoSection
