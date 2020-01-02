import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleStyle,
  title1,
  title2,
  subTitleStyle,
  subTitle1,
  subTitle2,
  titleContainer,
  subTitleContainer,
  button,
} from "./style"
import FreeTrialButton from "@/components/FreeTrialButton"

const ConnectingTheDots = () => (
  <div css={container}>
    <div css={titleContainer}>
      <p css={theme => [titleStyle(theme), title1(theme)]}>
        <FormattedMessage
          id="connectingTheDots"
          defaultMessage="Connecting the dots with"
        />
      </p>
      <p css={theme => [titleStyle(theme), title2(theme)]}>
        <FormattedMessage
          id="alternativeData"
          defaultMessage="ALTERNATIVE DATA"
        />
      </p>
    </div>
    <div css={subTitleContainer}>
      <p css={theme => [subTitleStyle(theme), subTitle1(theme)]}>
        <FormattedMessage id="a" defaultMessage="A" />{" "}
        <span css={theme => [subTitleStyle(theme), subTitle2(theme)]}>
          <FormattedMessage
            id="dataDashboard"
            defaultMessage="Data Dashboard"
          />
        </span>{" "}
        <span css={theme => [subTitleStyle(theme), subTitle1(theme)]}>
          <FormattedMessage
            id="providesActionableConsumer"
            defaultMessage="that provides actionable consumer insights based on transactional data."
          />
        </span>
      </p>
    </div>
    <FreeTrialButton css={button} />
  </div>
)

export default ConnectingTheDots
