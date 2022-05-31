/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-31 22:41:28
 * @LastEditors: your name
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "@clement",
      path.resolve(__dirname, "src/components/clement")
    );
  },
});
