import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileView from '../../src/screens/ProfileView/ProfileView';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));
const navigationMock: NavigationProp<ParamListBase> = {
  ...(jest.fn() as unknown as NavigationProp<ParamListBase>),
  navigate: jest.fn(),
};
describe('ProfileView render correctly', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ProfileView navigation={navigationMock} />
      </ThemeProvider>
    );

    expect(getByTestId('ProfileView')).toBeDefined();
    expect(getByTestId('profileIcon')).toBeDefined();
    expect(getByTestId('name')).toBeDefined();
    expect(getByTestId('email')).toBeDefined();
    expect(getByTestId('button')).toBeDefined();
  });
});
