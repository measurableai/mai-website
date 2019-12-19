const theme = {
  colors: {
    purples: [
      "#18113B",
      "#221852",
      "rgba(34, 24, 82, 0.5)",
      "rgba(34, 24, 82, 0.3)",
    ],
    greens: ["#39D965", "#68FF92"],
  },
  fonts: {
    /** based on bootstrap v4.0 */
    body: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    heading: `"Barlow Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  },
  linearGradients: [
    "linear-gradient(-90deg,rgba(0, 3, 29, 100),rgba(0, 3, 28, 53) 50%,rgba(0, 3, 24, 0))",
    "linear-gradient(90deg,rgba(0, 3, 29, 100),rgba(0, 3, 28, 53) 50%,rgba(0, 3, 24, 0))",
    "linear-gradient(-90deg,#B3FFCB,#FFFFFF 50%)",
    "linear-gradient(90deg,#B3FFCB,#FFFFFF 50%)",
    "linear-gradient(45deg,#A665FF,#68FF92)",
  ],
  zIndices: [100],
}
// aliases
theme.colors.purples.dark = theme.colors.purples[0]
theme.colors.purples.normal = theme.colors.purples[1]
theme.colors.purples.light = theme.colors.purples[2]
theme.colors.purples.superLight = theme.colors.purples[3]
theme.colors.greens.dark = theme.colors.greens[0]
theme.colors.greens.light = theme.colors.greens[1]
theme.linearGradients.purpleLightToDark = theme.linearGradients[0]
theme.linearGradients.purpleDarkToLight = theme.linearGradients[1]
theme.linearGradients.greenLightToDark = theme.linearGradients[2]
theme.linearGradients.greenDarkToLight = theme.linearGradients[3]
theme.linearGradients.purpleToGreen = theme.linearGradients[4]
theme.zIndices.header = theme.zIndices[0]

export default theme
