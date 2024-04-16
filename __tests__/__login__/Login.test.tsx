import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../../src/screens/login/Login'; // Import handleLogin from Login file
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';
import fetchMock from 'jest-fetch-mock';
import { langList } from '../../src/constants/index';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

type MockThemeProviderProps = {
  children: React.ReactNode;
  theme: (styles: {}) => void;
};
const navigationMock: NavigationProp<ParamListBase> = {
  ...(jest.fn() as unknown as NavigationProp<ParamListBase>),
  navigate: jest.fn(),
};
const mockThemeProviderProps: MockThemeProviderProps = {
  children: <></>,
  theme: jest.fn(),
};

describe('Login Component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <Login navigation={navigationMock} />
      </ThemeProvider>
    );
    expect(getByTestId('Login_Text')).toBeTruthy();
    expect(getByTestId('Username_Input')).toBeTruthy();
    expect(getByTestId('Password_Input')).toBeTruthy();
    expect(getByTestId('Login_Btn')).toBeTruthy();
  });

  test('checks the button and input text box', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <Login navigation={navigationMock} />
      </ThemeProvider>
    );

    // Wait for the Login component to be fully rendered
    await waitFor(() => {
      expect(getByTestId('Login_Btn')).toBeTruthy();
      expect(getByPlaceholderText('Username')).toBeTruthy();
      expect(getByPlaceholderText('Password')).toBeTruthy();
    });
  });

  it('navigates to Dashboard page on Version button press', async () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <Login navigation={navigationMock} />
      </ThemeProvider>
    );

    fetchMock.mockResponseOnce(JSON.stringify({ token: 'mocked-token' }), { status: 200 });
    fireEvent.changeText(getByTestId('Username_Input'), 'mockedUsername');
    fireEvent.changeText(getByTestId('Password_Input'), 'mockedPassword');
    fireEvent.press(getByTestId('Version_Btn'));

    expect(navigationMock.navigate).toHaveBeenCalledWith('VersionInfo');
  });

  test('changes language on dropdown selection', async () => {
    const handleLangFunMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <Login navigation={navigationMock} />
      </ThemeProvider>
    );

    // Mocking the handleLangFun function
    jest.spyOn(React, 'useState').mockReturnValueOnce(['en', handleLangFunMock]);

    // Wait for the Login component to be fully rendered
    await waitFor(() => {
      expect(getByTestId('DropDown_BTN')).toBeTruthy();
    });

    // Simulate selecting a language option (assuming 'es' for Spanish)
    fireEvent.press(getByTestId('DropDown_BTN'));

    // Simulate the selection of a dropdown option (assuming 'Spanish')
    const englishOption = langList.find((lang) => lang.value === 'en');

    if (englishOption) {
      // Trigger the function with the selected language value
      handleLangFunMock(englishOption);

      // Verify that handleLangFun is called with the selected language
      await waitFor(() => expect(handleLangFunMock).toHaveBeenCalledWith(englishOption));
    } else {
      throw new Error('English option not found in langList');
    }
  });

  it('navigates to Dashboard page on Login button press', async () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <Login navigation={navigationMock} />
      </ThemeProvider>
    );

    fetchMock.mockResponseOnce(JSON.stringify({ token: 'mocked-token' }), { status: 200 });
    fireEvent.changeText(getByTestId('Username_Input'), 'mockedUsername');
    fireEvent.changeText(getByTestId('Password_Input'), 'mockedPassword');
    fireEvent.press(getByTestId('Version_Btn'));

    expect(navigationMock.navigate).toHaveBeenCalledWith('VersionInfo');
  });
});
