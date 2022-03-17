import React from "react"
import "echarts/lib/chart/line"
import "echarts/lib/component/legend"
import "echarts/lib/component/title"
import "echarts/lib/component/tooltip"
import "echarts/lib/component/graphic"
import "echarts/lib/component/markLine"
import "echarts/lib/component/markArea"

import Tag from "@/components/Tag"

import {
  slideContainer,
  textContainer,
  chart,
  tag,
  title,
  description,
} from "./style"

const Slide = ({ customData, ...props }) => {
  return (
    <div css={slideContainer} {...props}>
      <div css={textContainer}>
        <Tag css={tag}>#{customData.slide.tag}</Tag>
        <h3 css={title}>{customData.slide.title}</h3>
        <p css={description}>{customData.slide.description}</p>
      </div>
      <img css={chart} key={customData.slide.title} src={customData.image} />
    </div>
  )
}

export default Slide
