import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  inlineContainer,
  achievementsContainer,
  backedByContainer,
  trustedByContainer,
  achievementsImage,
  trustedByImage,
  backedByImage,
  imageContainer,
  imageContainer1,
  imageContainer2,
  imageContainer3,
  title,
  andMoreContainer1,
  andMoreContainer2,
  andMoreContainer3,
  andMore,
} from "./style"
import achievements01 from "@/images/achievements01.svg"
import achievements02 from "@/images/achievements02.svg"
import achievements03 from "@/images/achievements03.svg"
import achievements04 from "@/images/achievements04.svg"
import achievements05 from "@/images/achievements05.svg"
import achievements06 from "@/images/achievements06.svg"
import achievements07 from "@/images/achievements07.svg"
import GatsbyImage from "@/components/GatsbyImage"

const AchievementsImagesArr = [
  achievements01,
  achievements02,
  achievements03,
  achievements04,
  achievements05,
  achievements06,
  achievements07,
]

const BackedByImagesArr = [
  "backedby01",
  "backedby02",
  "backedby03",
  "backedby04",
  "backedby05",
  "backedby06",
  "backedby07",
]

const TrustedByImagesArr = ["trustedby01", "trustedby02"]

const AndMore = () => (
  <p css={andMore}>
    <FormattedMessage id="andMore" defaultMessage="and more..." />
  </p>
)

const LogosSection = props => (
  <div css={container} {...props}>
    <div css={[inlineContainer, achievementsContainer]}>
      <p css={title}>
        <FormattedMessage id="achievements" defaultMessage="ACHIEVEMENTS" />
      </p>
      <div css={[imageContainer, imageContainer1]}>
        {AchievementsImagesArr.map(image => (
          <img css={achievementsImage} src={image} alt={image} {...props} />
        ))}
        <div css={andMoreContainer1}>
          <AndMore />
        </div>
      </div>
    </div>
    <div css={[inlineContainer, backedByContainer]}>
      <p css={title}>
        <FormattedMessage id="backedBy" defaultMessage="BACKED BY" />
      </p>
      <div css={[imageContainer, imageContainer2]}>
        {BackedByImagesArr.map(image => (
          <GatsbyImage
            objectFit="contain"
            css={backedByImage}
            filename={image + ".png"}
            alt={image}
          />
        ))}
        <div css={andMoreContainer2}>
          <AndMore />
        </div>
      </div>
    </div>
    <div css={[inlineContainer, trustedByContainer]}>
      <p css={title}>
        <FormattedMessage id="trustedBy" defaultMessage="TRUSTED BY" />
      </p>
      <div css={[imageContainer, imageContainer3]}>
        {TrustedByImagesArr.map(image => (
          <GatsbyImage
            objectFit="contain"
            css={trustedByImage}
            filename={image + ".png"}
            alt={image}
          />
        ))}
        <div css={andMoreContainer3}>
          <AndMore />
        </div>
      </div>
    </div>
  </div>
)

export default LogosSection
