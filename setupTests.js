import '@testing-library/jest-native/extend-expect';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
global.console = {
  ...console,
  // uncomment to ignore a specific log level
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
