/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-31 22:34:30
 * @LastEditors: your name
 * @Description:
 */
module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@clement/(.*)$": "<rootDir>/src/components/clement/$1",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)",
  ],
  testURL: "http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  "testEnvironment": "jsdom"
};
