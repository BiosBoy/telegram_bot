module.exports = {
  cacheDirectory: '<rootDir>/.tmp/jest',
  coverageDirectory: './.tmp/coverage',
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  globals: {
    NODE_ENV: 'test',
    __DEV__: 'development'
  },
  verbose: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/mocks/.*'],
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['typings.d.ts'],
  transformIgnorePatterns: ['.*(node_modules).*$'],
  setupFiles: ['<rootDir>/setupTests.js']
};
