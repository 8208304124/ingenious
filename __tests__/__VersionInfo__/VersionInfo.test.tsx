import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import VersionInfo from '../../src/screens/VersionInfo/VersionInfo';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('VersionInfo render correctly', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <VersionInfo />
      </ThemeProvider>
    );

    expect(getByTestId('productVersion').props.value).toBe('V5.5 R10 SP4');
    expect(getByTestId('releaseDate').props.value).toBe('22-02-2023');
    expect(getByTestId('buildNo').props.value).toBe('0.28.0');
    expect(getByTestId('buildDate').props.value).toBe('22-02-2023');
  });

  it('updates state on input change', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <VersionInfo />
      </ThemeProvider>
    );

    fireEvent.changeText(getByTestId('productVersion'), 'New Product Version');
    fireEvent.changeText(getByTestId('releaseDate'), 'New Release Date');
    fireEvent.changeText(getByTestId('buildNo'), 'New Build No');
    fireEvent.changeText(getByTestId('buildDate'), 'New Build Date');

    expect(getByTestId('productVersion').props.value).toBe('New Product Version');
    expect(getByTestId('releaseDate').props.value).toBe('New Release Date');
    expect(getByTestId('buildNo').props.value).toBe('New Build No');
    expect(getByTestId('buildDate').props.value).toBe('New Build Date');
  });
});
