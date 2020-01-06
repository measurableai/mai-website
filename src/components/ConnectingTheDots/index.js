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
            id="connectingTheDotsWithAlternativeData"
            defaultMessage="Connecting the dots with <span>ALTERNATIVE DATA</span>"
            values={{
              span: str => (
                <span css={theme => [titleStyle(theme), title2(theme)]}>
                  <br />
                  {str}
                </span>
              ),
            }}
          />
        </p>
      </div>
      <div css={subTitleContainer}>
        <p css={theme => [subTitleStyle, subTitle1(theme)]}>
          <FormattedMessage
            id="providesActionableConsumer"
            defaultMessage="Actionable <span>CONSUMER INSIGHTS</span> based on <span>BILLIONS</span> of <span>TRANSACTIONAL EMAILS</span> for emerging markets"
            values={{
              span: str => (
                <span css={theme => [subTitleStyle, subTitle2(theme)]}>
                  {str}
                </span>
              ),
            }}
          />
        </p>
      </div>
      <FreeTrialButton css={button} />
    </div>
  )
}

export default ConnectingTheDots
