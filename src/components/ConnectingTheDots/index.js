import React, { forwardRef, useContext } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Fade from "react-reveal/Fade"

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
  wordBreak,
} from "./style"
import { TalkToUsContext } from "@/context/talkToUs"
import TalkToUsButton from "@/components/TalkToUsButton"

const Container = forwardRef(({ children, innerRef, ...props }, ref) => (
  <div css={container} ref={ref || innerRef} {...props}>
    {children}
  </div>
))

const ConnectingTheDots = () => {
  const { open } = useContext(TalkToUsContext)
  return (
    <Fade refProp="innerRef" bottom cascade delay={1000} ssrReveal>
      <Container>
        <div css={titleContainer}>
          <p css={theme => [titleStyle(theme), title1(theme)]}>
            <FormattedMessage
              id="connectingTheDotsWithAlternativeData1"
              defaultMessage="<span>TRANSACTIONAL DATA</span><nextline> </nextline> for the Digital Economy"
              values={{
                nextline: () => <span css={wordBreak} />,
                span: str => (
                  <span css={theme => [titleStyle(theme), title2(theme)]}>
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
              defaultMessage="Accurate consumer insights for emerging markets <nextline> </nextline> based on <span>E-RECEIPT DATA.<span/>"
              values={{
                nextline: () => <span css={wordBreak} />,
                span: str => (
                  <span css={theme => [subTitleStyle, subTitle2(theme)]}>
                    {str}
                  </span>
                ),
              }}
            />
          </p>
        </div>
        <TalkToUsButton css={button} onClick={() => open()} />
      </Container>
    </Fade>
  )
}

export default ConnectingTheDots
