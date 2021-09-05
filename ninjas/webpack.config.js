const { merge } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react-ts")

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "konoha",
    projectName: "ninjas",
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /(node_modules)/,
          use: {
            // `.swcrc` can be used to configure swc
            loader: "swc-loader",
          },
        },
      ],
    },
  })
}
