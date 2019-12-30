import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  titleContainer,
  contentContainer,
  titleStyle,
  title,
  subTitle,
  whatSectionItemContainer,
  whatSectionItemContainer1,
  whatSectionItemContainer2,
  whatSectionItemContainer3,
} from "./style"
import ImageDotLine from "@/components/ImageDotLine"
import tmtIqIcon from "@/images/what-tmtIq.svg"
import travelIcon from "@/images/what-travel.svg"
import eCommerceIcon from "@/images/what-eCommerce.svg"

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
      <ImageDotLine
        css={[whatSectionItemContainer, whatSectionItemContainer1]}
        invert={true}
        margin={"23px 0"}
        src={tmtIqIcon}
        alt={"TMT:IQ"}
        height={50}
        width={50}
        contentTitle={{ id: "tmtIq", defaultMessage: "TMT:IQ" }}
        contents={[
          { id: "tme", defaultMessage: "TME" },
          { id: "nflx", defaultMessage: "NFLX" },
          { id: "yy", defaultMessage: "YY" },
          { id: "momo", defaultMessage: "MOMO" },
          { id: "spot", defaultMessage: "SPOT" },
          { id: "mtch", defaultMessage: "MTCH" },
        ]}
      />
      <ImageDotLine
        css={[whatSectionItemContainer, whatSectionItemContainer2]}
        invert={true}
        margin={"23px 0"}
        src={travelIcon}
        alt={"TRAVEL"}
        height={50}
        width={50}
        contentTitle={{ id: "travel", defaultMessage: "TRAVEL" }}
        contents={[
          { id: "mar", defaultMessage: "MAR" },
          { id: "htht", defaultMessage: "HTHT" },
          { id: "qtrp", defaultMessage: "QTRP" },
          { id: "uber", defaultMessage: "UBER" },
          { id: "lyft", defaultMessage: "LYFT" },
          { id: "bkng", defaultMessage: "BKNG" },
        ]}
      />
      <ImageDotLine
        css={[whatSectionItemContainer, whatSectionItemContainer3]}
        invert={true}
        margin={"23px 0"}
        src={eCommerceIcon}
        alt={"E-COMMERCE"}
        height={50}
        width={50}
        contentTitle={{ id: "eCommerce", defaultMessage: "E-COMMERCE" }}
        contents={[
          { id: "ebay", defaultMessage: "EBAY" },
          { id: "appl", defaultMessage: "APPL" },
          { id: "baba", defaultMessage: "BABA" },
          { id: "htht", defaultMessage: "HTHT" },
          { id: "jd", defaultMessage: "JD" },
          { id: "pdd", defaultMessage: "PDD" },
        ]}
      />
    </div>
  </div>
)

export default WhatSection
