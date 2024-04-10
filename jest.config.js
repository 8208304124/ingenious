module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', '<rootDir>/setupTests.js'],
  transformIgnorePatterns: ['/node_modules/(?!(@react-native|react-native|)/).*/'],
  modulePaths: ['src', 'test'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.svg': '<rootDir>src/__Mocks__/svgMocks.js',
  },
};
