import React, { useState, useMemo } from "react"
import Carousel from "nuka-carousel"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Tabs from "./Tabs"
import Slide from "./Slide"
import { section, header, heading } from "./style"
import rawData from "./chartData.json"

const DataReportSection = () => {
  const intl = useIntl()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const data = useMemo(
    () =>
      rawData.map(rawDataItem => {
        const dataItem = {}
        Object.keys(rawDataItem).forEach(key => {
          dataItem[key] = rawDataItem[key][intl.locale] || rawDataItem[key]
        })
        return dataItem
      }),
    [intl.locale]
  )

  return (
    <div css={section}>
      <div css={header}>
        <h2 css={heading}>
          <FormattedMessage id="dataReport" defaultMessage="Data Report" />
        </h2>
        <Tabs
          numberOfTabs={data.length}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          disabled={isSliding}
        />
      </div>
      <Carousel
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
        dragging={false}
        slideIndex={selectedIndex}
        beforeSlide={() => setIsSliding(true)}
        afterSlide={() => setIsSliding(false)}
      >
        {data.map((item, index) => (
          <Slide key={index} customData={item} />
        ))}
      </Carousel>
    </div>
  )
}

export default DataReportSection
