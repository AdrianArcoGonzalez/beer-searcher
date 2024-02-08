/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",

  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/src/**/*.test.ts", "**/src/**/*.test.tsx"],
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/setuptTests.ts",
    "!src/main.tsx",
    "!src/components/App/App.tsx",
    "!src/components/App/AppStyled.ts",
    "!src/configs/**.ts",
    "!src/utils/**.ts",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
