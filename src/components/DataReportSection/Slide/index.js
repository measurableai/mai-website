import React from "react"
import { useTheme } from "emotion-theming"
import ReactEchartsCore from "echarts-for-react/lib/core"
import echarts from "echarts/lib/echarts"
import "echarts/lib/chart/line"
import "echarts/lib/component/legend"
import "echarts/lib/component/title"
import "echarts/lib/component/tooltip"

import Tag from "@/components/Tag"

import {
  slideContainer,
  textContainer,
  chart,
  tag,
  title,
  description,
} from "./style"

const seriesColor = ["#1f014f", "#AA5bff"]

const createChartOption = (theme, customData) => ({
  title: {
    left: "center",
    text: customData.title,
    textStyle: {
      fontFamily: theme.fonts.body,
      fontSize: 14,
      fontWeight: "normal",
      color: "#210051",
      width: "100%",
    },
    top: 14,
  },
  legend: {
    top: "bottom",
    selectedMode: false,
    itemHeight: 7,
    padding: [26, 0, 5, 0],
    textStyle: {
      fontSize: 11,
      fontFamily: theme.fonts.body,
      color: "#210051",
    },
    data: customData.legend.map(name => ({
      name,
    })),
  },
  grid: {
    left: 30,
    right: 4,
  },
  xAxis: {
    axisTick: {
      show: false,
    },
    axisLabel: {
      interval: customData.xAxis.axisLabelInterval || 0,
      margin: 6,
      fontSize: 11,
      fontFamily: theme.fonts.heading,
      fontWeight: 200,
      color: "#210051",
    },
    axisLine: {
      lineStyle: {
        color: theme.colors.greens.dark,
      },
    },
    data: customData.xAxis.data,
  },
  yAxis: {
    type: "value",
    axisTick: {
      show: false,
    },
    axisLabel: {
      formatter: customData.yAxis.axisLabelFormatter || "{value}",
      fontFamily: theme.fonts.heading,
      fontWeight: 600,
      color: "#210051",
      margin: 8,
    },
    axisLine: {
      lineStyle: {
        color: theme.colors.greens.dark,
      },
    },
    splitLine: {
      lineStyle: {
        color: theme.colors.greens.light,
      },
    },
  },
  tooltip: {
    textStyle: {
      fontSize: 12,
    },
    formatter: params =>
      `${params.marker}${params.seriesName}<br />${params.name}: ${params.value}`,
  },
  series: customData.series.map((series, index) => ({
    type: "line",
    name: customData.legend[index],
    symbol: "circle",
    symbolSize: 5,
    lineStyle: {
      width: 0.8,
    },
    color: seriesColor[index] || "#1f014f",
    data: series,
  })),
})

const Slide = ({ customData, ...props }) => {
  const theme = useTheme()

  return (
    <div css={slideContainer} {...props}>
      <div css={textContainer}>
        <Tag css={tag}>#{customData.slide.tag}</Tag>
        <h3 css={title}>{customData.slide.title}</h3>
        <p css={description}>{customData.slide.description}</p>
      </div>
      <ReactEchartsCore
        css={chart}
        echarts={echarts}
        option={createChartOption(theme, customData.chartOption)}
      />
    </div>
  )
}

export default Slide
