const theme = {
  colors: {
    purples: ["#18113B", "#221852", "rgba(34, 24, 82, 0.3)"],
    greens: ["#39D965", "#68FF92"],
  },
  linearGradients: [
    "linear-gradient(-90deg,rgba(0, 3, 29, 100),rgba(0, 3, 28, 53) 50%,rgba(0, 3, 24, 0))",
    "linear-gradient(90deg,rgba(0, 3, 29, 100),rgba(0, 3, 28, 53) 50%,rgba(0, 3, 24, 0))",
    "linear-gradient(-90deg,#B3FFCB,#FFFFFF 50%)",
    "linear-gradient(90deg,#B3FFCB,#FFFFFF 50%)",
  ],
}
// aliases
theme.colors.purples.dark = theme.colors.purples[0]
theme.colors.purples.normal = theme.colors.purples[1]
theme.colors.purples.light = theme.colors.purples[2]
theme.colors.greens.dark = theme.colors.greens[0]
theme.colors.greens.light = theme.colors.greens[1]
theme.linearGradients.purpleLightToDark = theme.linearGradients[0]
theme.linearGradients.purpleDarkToLight = theme.linearGradients[1]
theme.linearGradients.greenLightToDark = theme.linearGradients[2]
theme.linearGradients.greenDarkToLight = theme.linearGradients[3]

export default theme
