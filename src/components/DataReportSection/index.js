import React, { useState, useMemo, useRef } from "react"
import { useTheme } from "emotion-theming"
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom"
import { Swiper, Autoplay } from "swiper/js/swiper.esm"
import "swiper/css/swiper.css"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Tabs from "./Tabs"
import Slide from "./Slide"
import { section, header, heading } from "./style"
import createRawData from "./chartData"

import useMedia from "@/hooks/useMedia"

const DataReportSection = () => {
  const intl = useIntl()
  const theme = useTheme()
  const isMobile = useMedia([true], false)
  const swiperRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const data = useMemo(
    () =>
      createRawData(theme, isMobile).map(rawDataItem => {
        const dataItem = { slide: {}, chartOption: {} }

        Object.keys(rawDataItem).forEach(key => {
          dataItem[key] = {}

          Object.keys(rawDataItem[key]).forEach(subKey => {
            dataItem[key][subKey] =
              rawDataItem[key][subKey][intl.locale] || rawDataItem[key][subKey]
          })
        })

        return dataItem
      }),
    [intl.locale, isMobile, theme]
  )

  const params = useMemo(
    () => ({
      Swiper,
      modules: [Autoplay],
      centeredSlides: true,
      lazy: true,
      // TODO: see if we can solve the bug with `loop` is on
      // loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      on: {
        slideChange: () => {
          setSelectedIndex(swiperRef.current.realIndex)
        },
        slideChangeTransitionStart: () => {
          setIsSliding(true)
        },
        slideChangeTransitionEnd: () => {
          setIsSliding(false)
        },
      },
    }),
    []
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
          onChange={index => {
            if (swiperRef.current) {
              swiperRef.current.slideTo(index)
            }
          }}
          disabled={isSliding}
        />
      </div>
      <ReactIdSwiperCustom
        {...params}
        getSwiper={swiper => (swiperRef.current = swiper)}
      >
        {data.map((item, index) => (
          <Slide key={index} customData={item} />
        ))}
      </ReactIdSwiperCustom>
    </div>
  )
}

export default DataReportSection
