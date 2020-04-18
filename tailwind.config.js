const { colors } = require("tailwindcss/defaultTheme")
module.exports = {
  theme: {
    colors: {
      ...colors,
      rebeccapurple: "#663399",
    },
    textColor: theme => theme("colors"),
    backgroundColor: theme => theme("colors"),
    extend: {},
  },
  variants: {},
  plugins: [],
}
