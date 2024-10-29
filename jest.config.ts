import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { Config } from "jest";

const config: Config = {
  automock: false,
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  globalSetup: undefined,
  globalTeardown: undefined,
  maxWorkers: "50%",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  modulePaths: ["<rootDir>src"],
  testRunner: "jest-circus/runner",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { tsconfig: "tsconfig.json", isolatedModules: true },
    ],
  },
};

export default config;
