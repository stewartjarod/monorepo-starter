const testMatch = '<rootDir>/packages/**/__tests__/**/*.spec.ts'

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [testMatch],
  collectCoverageFrom: [testMatch],
}
