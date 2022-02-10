const externals = {
  //   vue: "root window.__RUNTIME_EXPORTS__.Vue",
  //   "lodash": "root window.__RUNTIME_EXPORTS__.lodash",
  //   dayjs: "root window.__RUNTIME_EXPORTS__.Dayjs",
};

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  chainWebpack: (config) => {
    console.log("config------", config);
    // TODO: 区分本地开发还是远端开发
    if (process.env.VUE_APP_STANDALONE !== "on") {
      config.externals(externals);
    }
  },
};
