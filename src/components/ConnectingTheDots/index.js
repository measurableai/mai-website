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

const ConnectingTheDots = () => {
  return (
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
          <span css={theme => [subTitleStyle(theme), subTitle1(theme)]}>
            <FormattedMessage
              id="providesActionableConsumer"
              defaultMessage={`A <span>Data Dashboard</span> that provides actionable consumer insights based on transactional data.`}
              values={{
                span: str => (
                  <span css={theme => [subTitleStyle(theme), subTitle2(theme)]}>
                    {str}
                  </span>
                ),
              }}
            />
          </span>
        </p>
      </div>
      <FreeTrialButton css={button} />
    </div>
  )
}

export default ConnectingTheDots
