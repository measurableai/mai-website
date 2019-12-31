import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"

import {
  container,
  contentContainer,
  whatSectionItemContainer,
  whatSectionItemContainer1,
  whatSectionItemContainer2,
  whatSectionItemContainer3,
} from "./style"
import Card from "./Card"

import ThreeWHeader from "@/components/ThreeWHeader"
import tmtIqIcon from "@/images/what-tmtIq.svg"
import travelIcon from "@/images/what-travel.svg"
import eCommerceIcon from "@/images/what-eCommerce.svg"

const WhatSection = () => {
  const contentArr1 = [
    { id: "tme", defaultMessage: "TME" },
    { id: "nflx", defaultMessage: "NFLX" },
    { id: "yy", defaultMessage: "YY" },
    { id: "momo", defaultMessage: "MOMO" },
    { id: "spot", defaultMessage: "SPOT" },
    { id: "mtch", defaultMessage: "MTCH" },
  ]

  const contentArr2 = [
    { id: "mar", defaultMessage: "MAR" },
    { id: "htht", defaultMessage: "HTHT" },
    { id: "qtrp", defaultMessage: "QTRP" },
    { id: "uber", defaultMessage: "UBER" },
    { id: "lyft", defaultMessage: "LYFT" },
    { id: "bkng", defaultMessage: "BKNG" },
  ]

  const contentArr3 = [
    { id: "ebay", defaultMessage: "EBAY" },
    { id: "appl", defaultMessage: "APPL" },
    { id: "baba", defaultMessage: "BABA" },
    { id: "htht", defaultMessage: "HTHT" },
    { id: "jd", defaultMessage: "JD" },
    { id: "pdd", defaultMessage: "PDD" },
  ]
  return (
    <div css={container}>
      <ThreeWHeader
        header={<FormattedMessage id="what" defaultMessage="WHAT" />}
        subHeader={
          <FormattedMessage id="doWeCover" defaultMessage="do we cover" />
        }
        questionMark={<FormattedMessage id="questionMark" defaultMessage="?" />}
      />
      <div css={contentContainer}>
        <Card
          css={[whatSectionItemContainer, whatSectionItemContainer1]}
          src={tmtIqIcon}
          alt="TMT:IQ"
          contentTitle={<FormattedMessage id="tmtIq" defaultMessage="TMT:IQ" />}
          contents={contentArr1.map(content => (
            <FormattedMessage
              id={content.id}
              defaultMessage={content.defaultMessage}
            />
          ))}
        />
        <Card
          css={[whatSectionItemContainer, whatSectionItemContainer2]}
          src={travelIcon}
          alt="TRAVEL"
          contentTitle={
            <FormattedMessage id="travel" defaultMessage="TRAVEL" />
          }
          contents={contentArr2.map(content => (
            <FormattedMessage
              id={content.id}
              defaultMessage={content.defaultMessage}
            />
          ))}
        />
        <Card
          css={[whatSectionItemContainer, whatSectionItemContainer3]}
          src={eCommerceIcon}
          alt="E-COMMERCE"
          contentTitle={
            <FormattedMessage id="eCommerce" defaultMessage="E-COMMERCE" />
          }
          contents={contentArr3.map(content => (
            <FormattedMessage
              id={content.id}
              defaultMessage={content.defaultMessage}
            />
          ))}
        />
      </div>
    </div>
  )
}

export default WhatSection
