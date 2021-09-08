import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  testEnvironment: "node",
  preset: "ts-jest",
};
export default config;
