import React, { useState, useMemo, useRef, useEffect, forwardRef } from "react"
import { useTheme } from "emotion-theming"
import { useIntersection } from "react-use"
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom"
import { Swiper, Autoplay } from "swiper/js/swiper.esm"
import "swiper/css/swiper.css"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import Fade from "react-reveal/Fade"

import Tabs from "./Tabs"
import Slide from "./Slide"
import { section, header, heading } from "./style"
import createRawData from "./chartData"

import useMedia from "@/hooks/useMedia"

const Header = forwardRef(({ children, innerRef, ...props }, ref) => (
  <div css={header} ref={ref || innerRef} {...props}>
    {children}
  </div>
))

const DataReportSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const intl = useIntl()
  const theme = useTheme()
  const isDesktop = useMedia([false, false], true)
  const swiperRef = useRef(null)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  })
  const isIntersecting = intersection && intersection.isIntersecting

  useEffect(() => {
    if (swiperRef.current) {
      if (isIntersecting) {
        swiperRef.current.autoplay.start()
      } else {
        swiperRef.current.autoplay.stop()
      }
    }
  }, [isIntersecting])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const data = useMemo(
    () =>
      createRawData(theme, !isDesktop).map(rawDataItem => {
        const dataItem = {
          slide: {},
          chartOption: {},
          image: rawDataItem.image || "",
        }

        Object.keys(rawDataItem).forEach(key => {
          if (key === "image") return

          dataItem[key] = {}

          Object.keys(rawDataItem[key]).forEach(subKey => {
            dataItem[key][subKey] =
              rawDataItem[key][subKey][intl.locale] || rawDataItem[key][subKey]
          })
        })

        return dataItem
      }),
    [intl.locale, isDesktop, theme]
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
    <div
      css={section}
      onMouseEnter={() => {
        if (swiperRef.current) {
          swiperRef.current.autoplay.stop()
        }
      }}
      onMouseLeave={() => {
        if (swiperRef.current) {
          swiperRef.current.autoplay.start()
        }
      }}
    >
      <Fade refProp="innerRef" left>
        <Header>
          <h2 ref={intersectionRef} css={heading}>
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
            isHovered={isHovered}
            setIsHovered={value => setIsHovered(value)}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={index => setHoveredIndex(index)}
          />
        </Header>
      </Fade>
      <Fade right>
        <div>
          <ReactIdSwiperCustom
            {...params}
            getSwiper={swiper => {
              swiperRef.current = swiper
              if (!isIntersecting) {
                swiper.autoplay.stop()
              }
            }}
          >
            {data.map((item, index) => (
              <Slide key={index} customData={item} />
            ))}
          </ReactIdSwiperCustom>
        </div>
      </Fade>
    </div>
  )
}

export default DataReportSection
