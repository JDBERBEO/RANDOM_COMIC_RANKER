module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,vue}"],
  reporters: ["default", "jest-sonar"],
  testMatch: [
    "**/tests/integration/**/*.spec.[jt]s?(x)",
    "**/tests/unit/**/*.spec.[jt]s?(x)",
    "**/_tests_/*.[jt]s?(x)",
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!vuetable-2/)",
    "<rootDir>/node_modules/(?!vee-validate/dist/rules)",
  ],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "@test/(.*)": "<rootDir>/tests/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/src/components", "<rootDir>/src/views"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
  // globals: {
  //   conf: {
  //     ...muiConf.dev,
  //   },
  // },
};
