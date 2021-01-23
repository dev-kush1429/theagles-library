// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // collectCoverage: false,
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx}",

    "!src/components/**/*.{style,styled, index}.js",
    "!src/components/**/*[types].js",
  ],
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html"],
  resolver: "jest-pnp-resolver",
  setupFiles: ["react-app-polyfill/jsdom"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  testPathIgnorePatterns: [
    // ignore files that are under a directory starting with "_" at the root of __tests__
    "/__tests__\\/_.*?",
    // ignore files under __tests__ that start with an underscore
    "/__tests__\\/.*?\\/_.*?",
  ],
  transformIgnorePatterns: ["\\/node_modules\\/(?!react-bootstrap|@bootstrap)"],

  testMatch: ["<rootDir>/src/components/**/__tests__/**/*.test.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^Components(.*)$": "<rootDir>/src/components$1",
    //   '\\.(css|less)$': '<rootDir>/src/test/mocks/cssStub.js',
  },
  moduleFileExtensions: ["js", "json", "jsx"],
  globalSetup: undefined,
  globalTeardown: undefined,
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
