import watermarkNetflixSrc from "@/images/watermark-netflix.svg"
import cnyFlagSrc from "@/images/chart-cny@3x.png"
import hblFlagSrc from "@/images/chart-hbl@3x.png"
import bestbuyDataPointIconSrc from "@/images/chart-bestbuy.svg"
import targetDataPointIconSrc from "@/images/chart-target.svg"

export default theme => [
  {
    slide: {
      tag: "Media Streaming",
      title: {
        "en-US": "Netflix’s Brazilian users VS US users",
        "zh-HK": "Netflix’s Brazilian users VS US users",
        "zh-CN": "Netflix’s Brazilian users VS US users",
      },
      description: {
        "en-US":
          "Netflix’s customer retention in Brazil over the past 36 months showed that users in Brazil are extremely loyal. Over 60% of Brazilian users still subscribe to the service 2 years after joining. For US users, the long-term retention rate is lower than that of the Brazilian ones.",
        "zh-HK":
          "Netflix’s customer retention in Brazil over the past 36 months showed that users in Brazil are extremely loyal. Over 60% of Brazilian users still subscribe to the service 2 years after joining. For US users, the long-term retention rate is lower than that of the Brazilian ones.",
        "zh-CN":
          "Netflix’s customer retention in Brazil over the past 36 months showed that users in Brazil are extremely loyal. Over 60% of Brazilian users still subscribe to the service 2 years after joining. For US users, the long-term retention rate is lower than that of the Brazilian ones.",
      },
    },
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
      tag: "Ecommerce",
      title: {
        "en-US": "Target and Best Buy are Transforming Online",
        "zh-HK": "Target and Best Buy are Transforming Online",
        "zh-CN": "Target and Best Buy are Transforming Online",
      },
      description: {
        "en-US":
          "The uptrend of sales for both companies from 2018 to 2019 is obvious amid the downturn for most traditional retailers. Online sales of Target and Best Buy have both seen peaks during the holiday season throughout the past two years. The average monthly online sales of Best Buy during holiday has risen dramatically by almost 50% this year.",
        "zh-HK":
          "The uptrend of sales for both companies from 2018 to 2019 is obvious amid the downturn for most traditional retailers. Online sales of Target and Best Buy have both seen peaks during the holiday season throughout the past two years. The average monthly online sales of Best Buy during holiday has risen dramatically by almost 50% this year.",
        "zh-CN":
          "The uptrend of sales for both companies from 2018 to 2019 is obvious amid the downturn for most traditional retailers. Online sales of Target and Best Buy have both seen peaks during the holiday season throughout the past two years. The average monthly online sales of Best Buy during holiday has risen dramatically by almost 50% this year.",
      },
    },
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
              symbolSize: 13,
            },
            {
              value: 1.07,
              symbol: `image://${bestbuyDataPointIconSrc}`,
              symbolSize: 13,
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
              symbolSize: 13,
            },
          ],
          markLine: {
            silent: true,
            symbol: "none",
            lineStyle: {
              color: "#a95aff",
            },
            label: {
              show: false,
            },
            data: [
              [
                {
                  yAxis: 0,
                  x: 235,
                },
                {
                  yAxis: 1.78,
                  x: 235,
                },
              ],
              [
                {
                  yAxis: 0,
                  x: 255,
                },
                {
                  yAxis: 1.07,
                  x: 255,
                },
              ],
              [
                {
                  yAxis: 0,
                  x: 471,
                },
                {
                  yAxis: 3.31,
                  x: 471,
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
              symbolSize: 13,
            },
            {
              value: 0.51,
              symbol: `image://${targetDataPointIconSrc}`,
              symbolSize: 13,
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
              symbolSize: 13,
            },
          ],
        },
      ],
    },
  },
  {
    slide: {
      tag: "GAMES",
      title: {
        "en-US": "Chinese Players’ red envelope money goes to Honor of Kings",
        "zh-HK": "Chinese Players’ red envelope money goes to Honor of Kings",
        "zh-CN": "Chinese Players’ red envelope money goes to Honor of Kings",
      },
      description: {
        "en-US":
          "Tencent’s top grossing game Honor of Kings launched its biggest update with a new feature “Honor Badge” right before the Chinese New Year. It helped the game's revenues peak again in China. In-app-purchase sales in the first week of the holiday month grew by around 150%.",
        "zh-HK":
          "Tencent’s top grossing game Honor of Kings launched its biggest update with a new feature “Honor Badge” right before the Chinese New Year. It helped the game's revenues peak again in China. In-app-purchase sales in the first week of the holiday month grew by around 150%.",
        "zh-CN":
          "Tencent’s top grossing game Honor of Kings launched its biggest update with a new feature “Honor Badge” right before the Chinese New Year. It helped the game's revenues peak again in China. In-app-purchase sales in the first week of the holiday month grew by around 150%.",
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
      graphic: [
        {
          type: "image",
          left: "117",
          top: "42",
          z: 1,
          cursor: "default",
          style: {
            image: hblFlagSrc,
            width: 70,
            height: 35,
          },
        },
        {
          type: "image",
          left: "222",
          top: "42",
          z: 1,
          cursor: "default",
          style: {
            image: cnyFlagSrc,
            width: 70,
            height: 35,
          },
        },
      ],
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
                color: "#a95aff",
              },
            },
            157.96,
            201.8,
            {
              value: 501.55,
              symbolSize: 10,
              itemStyle: {
                color: "#a95aff",
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
              color: "#a95aff",
            },
            label: {
              show: false,
            },
            data: [
              {
                xAxis: "w3\n2019",
              },
              {
                xAxis: "w6\n2019",
              },
            ],
          },
        },
      ],
    },
  },
  {
    slide: {
      tag: "Apps",
      title: {
        "en-US": "MOMO beats estimates amid authority pressure",
        "zh-HK": "MOMO beats estimates amid authority pressure",
        "zh-CN": "MOMO beats estimates amid authority pressure",
      },
      description: {
        "en-US":
          "From April to July, MOMO's successful dating app Tantan(China’s Tinder) was removed from app stores in China. The app’s revenue was close to zero for over two months. However, on the first week it went live again, the number of paying users of Tantan soon went up by 50% compared to where it was 2 months ago.",
        "zh-HK":
          "From April to July, MOMO's successful dating app Tantan(China’s Tinder) was removed from app stores in China. The app’s revenue was close to zero for over two months. However, on the first week it went live again, the number of paying users of Tantan soon went up by 50% compared to where it was 2 months ago.",
        "zh-CN":
          "From April to July, MOMO's successful dating app Tantan(China’s Tinder) was removed from app stores in China. The app’s revenue was close to zero for over two months. However, on the first week it went live again, the number of paying users of Tantan soon went up by 50% compared to where it was 2 months ago.",
      },
    },
    chartOption: {
      title: {
        "en-US": "Paying Users Trend Index",
        "zh-HK": "用戶變化趨勢指數",
        "zh-CN": "用户变化趋势指数",
      },
      legend: {
        "en-US": ["Tantan - Genuine Dating"],
        "zh-HK": ["Tantan - Genuine Dating"],
        "zh-CN": ["Tantan - Genuine Dating"],
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
          "w14\n2019",
          "w15\n2019",
          "w16\n2019",
          "w17\n2019",
          "w18\n2019",
          "w19\n2019",
          "w20\n2019",
          "w21\n2019",
          "w22\n2019",
          "w23\n2019",
          "w24\n2019",
          "w25\n2019",
          "w26\n2019",
          "w27\n2019",
          "w28\n2019",
          "w29\n2019",
        ],
      },
      yAxis: {
        // eslint-disable-next-line
        axisLabelFormatter: "{value}",
      },
      series: [
        {
          data: [
            1.39,
            1.72,
            1.95,
            1.71,
            1.63,
            1.93,
            2.03,
            2.09,
            2.24,
            1.96,
            1.63,
            1.98,
            1.48,
            1.64,
            1.87,
            1.74,
            1.52,
            0.74,
            0.05,
            0.05,
            0.06,
            0.03,
            0.04,
            0.04,
            0.05,
            0.04,
            0.08,
            0.63,
            2.88,
          ],
          markArea: {
            silent: true,
            label: {
              show: true,
              position: "insideLeft",
              align: "left",
              padding: [17, 25, 17, 25],
              fontFamily: theme.fonts.heading,
              fontSize: 18,
              fontWeight: 100,
              color: theme.colors.purples.light,
              formatter:
                "{a|TANTAN}\n{b|app\nremoved\nfrom\nAppStore\nin\nChina}",
              rich: {
                a: {
                  fontSize: 18,
                  fontFamily: theme.fonts.heading,
                  fontWeight: 100,
                  lineHeight: 30,
                  color: theme.colors.purples.light,
                },
                b: {
                  fontSize: 18,
                  fontFamily: theme.fonts.heading,
                  fontWeight: 100,
                  lineHeight: 22,
                  color: theme.colors.purples.light,
                },
              },
            },
            itemStyle: {
              color: "white",
              borderWidth: 1,
              borderType: "dashed",
              borderColor: theme.colors.purples.light,
            },
            data: [
              [
                {
                  xAxis: "w19\n2019",
                },
                {
                  xAxis: "w27\n2019",
                },
              ],
            ],
          },
        },
      ],
    },
  },
]
