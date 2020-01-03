import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import Achievements from "./Achievements"
import BackedBy from "./BackedBy"
import TrustedBy from "./TrustedBy"

import {
  container,
  inlineContainer,
  achievementsContainer,
  backedByContainer,
  trustedByContainer,
  title,
} from "./style"

const Title = ({ children }) => <p css={title}>{children}</p>

const LogosSection = props => (
  <div css={container} {...props}>
    <div css={[inlineContainer, achievementsContainer]}>
      <Title>
        <FormattedMessage id="achievements" defaultMessage="ACHIEVEMENTS" />
      </Title>
      <Achievements />
    </div>
    <div css={[inlineContainer, backedByContainer]}>
      <Title>
        <FormattedMessage id="backedBy" defaultMessage="BACKED BY" />
      </Title>
      <BackedBy />
    </div>
    <div css={[inlineContainer, trustedByContainer]}>
      <Title>
        <FormattedMessage id="trustedBy" defaultMessage="TRUSTED BY" />
      </Title>
      <TrustedBy />
    </div>
  </div>
)

export default LogosSection
