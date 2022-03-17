import watermarkNetflixSrc from "@/images/watermark-netflix.svg"
import cnyFlagSrc from "@/images/chart-cny.svg"
import hblFlagSrc from "@/images/chart-hbl.svg"
import bestbuyDataPointIconSrc from "@/images/chart-bestbuy.svg"
import targetDataPointIconSrc from "@/images/chart-target.svg"
import MAI_DataReports_01 from "@/images/MAI_DataReports_01.gif"
import MAI_DataReports_02 from "@/images/MAI_DataReports_02.png"
import MAI_DataReports_03 from "@/images/MAI_DataReports_03.png"

export default (theme, isMobile) => [
  {
    slide: {
      tag: "MarketShare",
      title: {
        "en-US": "Food delivery market share change in Asia",
        "zh-HK": "Food delivery market share change in Asia",
        "zh-CN": "Food delivery market share change in Asia",
      },
      description: {
        "en-US":
          "Measurable AI continues to monitor the market share change across different markets in the heated food delivery industry. Check the latest landscape in Asia Pacific across Hong Kong, Taiwan, Singapore and Malaysia in 2021 (based on monthly total sales in USD). ",
        "zh-HK":
          "Measurable AI continues to monitor the market share change across different markets in the heated food delivery industry. Check the latest landscape in Asia Pacific across Hong Kong, Taiwan, Singapore and Malaysia in 2021 (based on monthly total sales in USD). ",
        "zh-CN":
          "Measurable AI continues to monitor the market share change across different markets in the heated food delivery industry. Check the latest landscape in Asia Pacific across Hong Kong, Taiwan, Singapore and Malaysia in 2021 (based on monthly total sales in USD). ",
      },
    },
    image: MAI_DataReports_01,
    chartOption: {
      title: {
        "en-US":
          "Customer Retention Rate\nMonths Since First Purchases until 2019",
        "zh-HK": "用戶複購率",
        "zh-CN": "用戶複購率",
      },
      legend: {
        "en-US": ["US", "Brazil"],
        "zh-HK": ["美國", "巴西"],
        "zh-CN": ["美國", "巴西"],
      },
      graphic: [
        {
          type: "image",
          left: "center",
          top: "middle",
          cursor: "default",
          style: {
            image: watermarkNetflixSrc,
            width: 80,
            height: 146,
          },
        },
      ],
      xAxis: {
        axisLabelInterval: 2,
        data: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
        ],
      },
      yAxis: {
        // eslint-disable-next-line
        axisLabelFormatter: "{value}%",
      },
      tooltip: {
        formatter: params => {
          const name = `${params.name || params[0].name} months`
          const contents = []
          if (Array.isArray(params)) {
            params.forEach(param =>
              contents.push(
                `${param.marker}${param.seriesName}: ${param.value}%`
              )
            )
          }

          return `${name}<br />${contents.join("<br />")}`
        },
      },
      series: [
        {
          data: [
            "86.88",
            "80.00",
            "75.63",
            "73.75",
            "71.38",
            "69.13",
            "66.63",
            "64.25",
            "63.38",
            "62.50",
            "61.63",
            "61.00",
            "60.25",
            "59.62",
            "58.75",
            "58.38",
            "57.38",
            "57.00",
            "56.63",
            "56.13",
            "55.38",
            "55.25",
            "54.25",
            "53.50",
          ],
        },
        {
          data: [
            "89.09",
            "84.79",
            "81.57",
            "79.34",
            "77.50",
            "76.42",
            "75.73",
            "74.58",
            "73.35",
            "72.43",
            "71.35",
            "70.74",
            "69.89",
            "69.12",
            "68.20",
            "67.28",
            "66.82",
            "66.05",
            "65.36",
            "64.82",
            "64.36",
            "63.75",
            "63.29",
            "62.90",
          ],
        },
      ],
    },
  },
  {
    slide: {
      tag: "FoodDelivery",
      title: {
        "en-US": "DoorDash: Beat consensus with weekly fresh data",
        "zh-HK": "DoorDash: Beat consensus with weekly fresh data",
        "zh-CN": "DoorDash: Beat consensus with weekly fresh data",
      },
      description: {
        "en-US":
          "Measurable AI's aggregated order volume is highly correlated with  Doordash(NYSE:DASH)'s reported total orders by quarterly throughout the past few years (2019 -2021).",
        "zh-HK":
          "Measurable AI's aggregated order volume is highly correlated with  Doordash(NYSE:DASH)'s reported total orders by quarterly throughout the past few years (2019 -2021).",
        "zh-CN":
          "Measurable AI's aggregated order volume is highly correlated with  Doordash(NYSE:DASH)'s reported total orders by quarterly throughout the past few years (2019 -2021).",
      },
    },
    image: MAI_DataReports_02,
    chartOption: {
      title: {
        "en-US": "Total Spending Index",
        "zh-HK": "用戶複購率",
        "zh-CN": "用戶複購率",
      },
      legend: {
        "en-US": ["Best Buy", "Target"],
        "zh-HK": ["Best Buy", "Target"],
        "zh-CN": ["Best Buy", "Target"],
      },
      xAxis: {
        axisLabelInterval: 2,
        data: [
          "M1\n2018",
          "M2\n2018",
          "M3\n2018",
          "M4\n2018",
          "M5\n2018",
          "M6\n2018",
          "M7\n2018",
          "M8\n2018",
          "M9\n2018",
          "M10\n2018",
          "M11\n2018",
          "M12\n2018",
          "M1\n2019",
          "M2\n2019",
          "M3\n2019",
          "M4\n2019",
          "M5\n2019",
          "M6\n2019",
          "M7\n2019",
          "M8\n2019",
          "M9\n2019",
          "M10\n2019",
          "M11\n2019",
        ],
      },
      yAxis: {
        // eslint-disable-next-line
        axisLabelFormatter: "{value}",
      },
      series: [
        {
          data: [
            0.41,
            0.36,
            0.5,
            0.59,
            0.74,
            0.99,
            0.85,
            1.11,
            0.97,
            0.49,
            {
              value: 1.78,
              symbol: `image://${bestbuyDataPointIconSrc}`,
              symbolSize: isMobile ? 7 : 13,
            },
            {
              value: 1.07,
              symbol: `image://${bestbuyDataPointIconSrc}`,
              symbolSize: isMobile ? 7 : 13,
            },
            0.81,
            0.98,
            1.21,
            0.99,
            1.56,
            0.97,
            1.19,
            1.86,
            1.48,
            1.25,
            {
              value: 3.31,
              symbol: `image://${bestbuyDataPointIconSrc}`,
              symbolSize: isMobile ? 7 : 13,
            },
          ],
          markLine: {
            silent: true,
            symbol: "none",
            lineStyle: {
              color: theme.colors.purples.chart,
            },
            label: {
              show: false,
            },
            data: [
              [
                {
                  xAxis: "M11\n2018",
                  yAxis: 0,
                },
                {
                  xAxis: "M11\n2018",
                  yAxis: 1.78,
                },
              ],
              [
                {
                  xAxis: "M12\n2018",
                  yAxis: 0,
                },
                {
                  xAxis: "M12\n2018",
                  yAxis: 1.07,
                },
              ],
              [
                {
                  xAxis: "M11\n2019",
                  yAxis: 0,
                },
                {
                  xAxis: "M11\n2019",
                  yAxis: 3.31,
                },
              ],
            ],
          },
        },
        {
          data: [
            0.09,
            0.08,
            0.09,
            0.11,
            0.1,
            0.1,
            0.12,
            0.14,
            0.14,
            0.14,
            {
              value: 0.48,
              symbol: `image://${targetDataPointIconSrc}`,
              symbolSize: isMobile ? 7 : 13,
            },
            {
              value: 0.51,
              symbol: `image://${targetDataPointIconSrc}`,
              symbolSize: isMobile ? 7 : 13,
            },
            0.19,
            0.24,
            0.26,
            0.26,
            0.24,
            0.29,
            0.33,
            0.24,
            0.25,
            0.27,
            {
              value: 0.62,
              symbol: `image://${targetDataPointIconSrc}`,
              symbolSize: isMobile ? 7 : 13,
            },
          ],
        },
      ],
    },
  },
  {
    slide: {
      tag: "India",
      title: {
        "en-US": "Zomato: Keep up with the new stars",
        "zh-HK": "Zomato: Keep up with the new stars",
        "zh-CN": "Zomato: Keep up with the new stars",
      },
      description: {
        "en-US":
          "With the full granularity of e-receipts data, Measurable AI helps clients monitor a variety of metrics from revenues to specific GMV or customer-level behaviour. Our quarterly aggregated order volume for Zomato(NSE: ZOMATO) continues to show a high correlation with Zomato’s reported GOV(Gross Order Value). \n*Zomato's financial year 2021 starts July 2020 and ends April 2021",
        "zh-HK":
          "With the full granularity of e-receipts data, Measurable AI helps clients monitor a variety of metrics from revenues to specific GMV or customer-level behaviour. Our quarterly aggregated order volume for Zomato(NSE: ZOMATO) continues to show a high correlation with Zomato’s reported GOV(Gross Order Value). \n*Zomato's financial year 2021 starts July 2020 and ends April 2021",
        "zh-CN":
          "With the full granularity of e-receipts data, Measurable AI helps clients monitor a variety of metrics from revenues to specific GMV or customer-level behaviour. Our quarterly aggregated order volume for Zomato(NSE: ZOMATO) continues to show a high correlation with Zomato’s reported GOV(Gross Order Value). \n*Zomato's financial year 2021 starts July 2020 and ends April 2021",
      },
    },
    chartOption: {
      title: {
        "en-US": "Average Paying User Spending",
        "zh-HK": "銷售變化趨勢",
        "zh-CN": "销售变化趋势",
      },
      legend: {
        "en-US": ["Honor of Kings"],
        "zh-HK": ["王者榮耀"],
        "zh-CN": ["王者荣耀"],
      },
      xAxis: {
        axisLabelInterval: 1,
        data: [
          "w1\n2019",
          "w2\n2019",
          "w3\n2019",
          "w4\n2019",
          "w5\n2019",
          "w6\n2019",
          "w7\n2019",
          "w8\n2019",
          "w9\n2019",
          "w10\n2019",
          "w11\n2019",
          "w12\n2019",
          "w13\n2019",
        ],
      },
      yAxis: {
        // eslint-disable-next-line
        axisLabelFormatter: "{value}",
      },
      series: [
        {
          data: [
            166.48,
            130.22,
            {
              value: 213.24,
              symbolSize: 10,
              itemStyle: {
                color: theme.colors.purples.chart,
              },
            },
            157.96,
            201.8,
            {
              value: 501.55,
              symbolSize: 10,
              itemStyle: {
                color: theme.colors.purples.chart,
              },
            },
            241.6,
            140.36,
            82.65,
            75.43,
            54.75,
            46.62,
            87.57,
          ],
          markLine: {
            silent: true,
            symbol: "none",
            lineStyle: {
              color: theme.colors.purples.chart,
            },
            label: {
              show: false,
            },
            data: [
              [
                {
                  xAxis: "w3\n2019",
                  yAxis: 0,
                },
                {
                  xAxis: "w3\n2019",
                  yAxis: 600,
                  symbol: `image://${hblFlagSrc}`,
                  symbolSize: isMobile ? [54, 27] : [64, 32],
                },
              ],
              [
                {
                  xAxis: "w6\n2019",
                  yAxis: 0,
                },
                {
                  xAxis: "w6\n2019",
                  yAxis: 600,
                  symbol: `image://${cnyFlagSrc}`,
                  symbolSize: isMobile ? [54, 27] : [64, 32],
                },
              ],
            ],
          },
        },
      ],
    },
    image: MAI_DataReports_03,
  },
]
