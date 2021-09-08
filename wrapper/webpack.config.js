const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "konoha";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    entry: "./browser/konoha-root-config.ts",
    output: {
      filename: "konoha-root-config.js",
      path: __dirname + "/dist/static",
    },
  });
};
