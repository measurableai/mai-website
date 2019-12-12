import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleContainer,
  contentContainer,
  titleStyle,
  title,
  subTitle,
  dotLineStyle,
  dotLineTitle,
  dotLineContent,
  dotLineMore,
  whatSectionItemContainer,
  whatSectionItemContainer1,
  whatSectionItemContainer2,
  whatSectionItemContainer3,
} from "./style"
import ImageDotLineTitle from "@/components/ImageDotLineTitle"
import tmtIqIcon from "@/images/what-tmtIq.svg"
import travelIcon from "@/images/what-travel.svg"
import eCommerceIcon from "@/images/what-eCommerce.svg"

const StyledImageDotLineTitle = props => (
  <ImageDotLineTitle css={[dotLineStyle, dotLineTitle]} {...props} />
)
const StyledImageDotLineContent = props => (
  <p css={[dotLineStyle, dotLineContent]} {...props} />
)
const StyledImageDotLineMore = props => (
  <p css={[dotLineStyle, dotLineMore]} {...props} />
)

const WhatSection = () => (
  <div css={container}>
    <div css={titleContainer}>
      <p css={theme => [titleStyle(theme), title(theme)]}>
        <FormattedMessage id="what" defaultMessage="WHAT" />
      </p>
      <p css={theme => [titleStyle(theme), subTitle(theme)]}>
        <FormattedMessage id="doWeCover" defaultMessage="do we cover" />
        <span>
          <FormattedMessage id="questionMark" defaultMessage="?" />
        </span>
      </p>
    </div>
    <div css={contentContainer}>
      <div css={[whatSectionItemContainer, whatSectionItemContainer1]}>
        <img height={50} width={50} src={tmtIqIcon} alt="TMT:IQ" />
        <StyledImageDotLineTitle invert={true}>
          <FormattedMessage id="tmtIq" defaultMessage="TMT:IQ" />
        </StyledImageDotLineTitle>
        <div>
          <StyledImageDotLineContent>
            <FormattedMessage id="tme" defaultMessage="TME" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="nflx" defaultMessage="NFLX" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="yy" defaultMessage="YY" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="momo" defaultMessage="MOMO" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="spot" defaultMessage="SPOT" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="mtch" defaultMessage="MTCH" />
          </StyledImageDotLineContent>
          <StyledImageDotLineMore>
            <FormattedMessage id="more" defaultMessage="more..." />
          </StyledImageDotLineMore>
        </div>
      </div>
      <div css={[whatSectionItemContainer, whatSectionItemContainer2]}>
        <img height={50} width={50} src={travelIcon} alt="TRAVEL" />
        <StyledImageDotLineTitle invert={true}>
          <FormattedMessage id="travel" defaultMessage="TRAVEL" />
        </StyledImageDotLineTitle>
        <div>
          <StyledImageDotLineContent>
            <FormattedMessage id="mar" defaultMessage="MAR" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="htht" defaultMessage="HTHT" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="qtrp" defaultMessage="QTRP" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="uber" defaultMessage="UBER" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="lyft" defaultMessage="LYFT" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="bkng" defaultMessage="BKNG" />
          </StyledImageDotLineContent>
          <StyledImageDotLineMore>
            <FormattedMessage id="more" defaultMessage="more..." />
          </StyledImageDotLineMore>
        </div>
      </div>
      <div css={[whatSectionItemContainer, whatSectionItemContainer3]}>
        <img height={50} width={50} src={eCommerceIcon} alt="E-COMMERCE" />
        <StyledImageDotLineTitle invert={true}>
          <FormattedMessage id="eCommerce" defaultMessage="E-COMMERCE" />
        </StyledImageDotLineTitle>
        <div>
          <StyledImageDotLineContent>
            <FormattedMessage id="ebay" defaultMessage="EBAY" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="appl" defaultMessage="APPL" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="baba" defaultMessage="BABA" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="htht" defaultMessage="HTHT" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="jd" defaultMessage="JD" />
          </StyledImageDotLineContent>
          <StyledImageDotLineContent>
            <FormattedMessage id="pdd" defaultMessage="PDD" />
          </StyledImageDotLineContent>
          <StyledImageDotLineMore>
            <FormattedMessage id="more" defaultMessage="more..." />
          </StyledImageDotLineMore>
        </div>
      </div>
    </div>
  </div>
)

export default WhatSection
