const externals = {
  // vue: "root window.__RUNTIME_EXPORTS__.Vue",
  dayjs: "root window.__RUNTIME_EXPORTS__.dayjs",
};

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  chainWebpack: (config) => {
    console.log("config------", process.env.NODE_ENV);
    // TODO: 区分本地开发还是远端开发  需要改下
    // if (process.env.NODE_ENV === "production") {
    config.externals(externals);
    // }
  },
};
