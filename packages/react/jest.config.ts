import { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/src/index.tsx',
    '!**/jest.setup.ts',
    '!**/jest.config.ts',
  ],
}

export default config
