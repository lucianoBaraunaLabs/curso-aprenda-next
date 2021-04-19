module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/8.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
