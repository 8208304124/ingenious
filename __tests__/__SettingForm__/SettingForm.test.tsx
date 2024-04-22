import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingForm from '../../src/screens/applicationSetting/SettingForms';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));
describe('SettingForm Render Correctly', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <SettingForm />
      </ThemeProvider>
    );

    expect(getByTestId('ServiceURL')).toBeDefined();
    expect(getByTestId('port')).toBeDefined();
    expect(getByTestId('switch')).toBeDefined();
  });

  it('updates service URL input value correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <SettingForm />
      </ThemeProvider>
    );
    const serviceURLInput = getByTestId('ServiceURL');

    fireEvent.changeText(serviceURLInput, 'http://example.com');

    expect(serviceURLInput.props.value).toBe('http://example.com');
  });

  it('updates port input value correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <SettingForm />
      </ThemeProvider>
    );
    const portInput = getByTestId('port');

    fireEvent.changeText(portInput, '8080');

    expect(portInput.props.value).toBe('8080');
  });
});
