/*
 * @Author: luoxi
 * @LastEditTime: 2022-07-13 23:12:13
 * @LastEditors: your name
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@clement", path.resolve(__dirname, "src/components/clement"))
      .set("@assets", path.resolve(__dirname, "src/assets/theme-chalk"));
  },
});
