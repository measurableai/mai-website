import React from "react"
import { useTheme } from "emotion-theming"
import ReactEchartsCore from "echarts-for-react/lib/core"
import echarts from "echarts/lib/echarts"
import "echarts/lib/chart/line"
import "echarts/lib/component/legend"
import "echarts/lib/component/title"

import Tag from "@/components/Tag"

import {
  slideContainer,
  textContainer,
  chart,
  tag,
  title,
  description,
} from "./style"

const createChartOption = (theme, customData) => ({
  title: {
    left: "center",
    text: customData.title,
    textStyle: {
      fontFamily: theme.fonts.body,
      fontSize: 14,
      fontWeight: "normal",
      color: "#210051",
    },
  },
  legend: {
    top: "bottom",
    selectedMode: false,
    itemHeight: 7,
    padding: [26, 0, 0, 0],
    textStyle: {
      fontSize: 11,
      fontFamily: theme.fonts.body,
      color: "#210051",
    },
    data: [
      {
        name: customData.legend,
      },
    ],
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
      interval: 2,
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
    data: customData.xAxis,
  },
  yAxis: {
    type: "value",
    axisTick: {
      show: false,
    },
    axisLabel: {
      formatter: `\${value}`,
      fontFamily: theme.fonts.heading,
      fontWeight: 600,
      color: "#210051",
      margin: 12,
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
  series: [
    {
      type: "line",
      name: customData.legend,
      symbol: "circle",
      symbolSize: 5,
      lineStyle: {
        width: 0.8,
      },
      color: "#1f014f",
      data: customData.series,
    },
  ],
})

const Slide = ({ customData }) => {
  const theme = useTheme()

  return (
    <div css={slideContainer}>
      <div css={textContainer}>
        <Tag css={tag}>#GAMES</Tag>
        <h3 css={title}>Pokémon Go</h3>
        <p css={description}>
          Grossed over USD 2.55 Billion from In-App-Purchases. Average paying
          user spends around USD $38.63. USD $6.68 per order.
        </p>
      </div>
      <ReactEchartsCore
        css={chart}
        echarts={echarts}
        option={createChartOption(theme, customData)}
      />
    </div>
  )
}

export default Slide
