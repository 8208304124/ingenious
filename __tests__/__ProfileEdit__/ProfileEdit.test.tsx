import { fireEvent, render } from '@testing-library/react-native';
import ProfileEdit from '../../src/screens/ProfileEdit';
import React from 'react';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('ProfileEdit rendered correctly', () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileIcon: 'user-circle',
  };

  it('renders correctly with user data', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <NavigationContainer>
        <ThemeProvider>
          <ProfileEdit route={{ params: { user } }} />
        </ThemeProvider>
      </NavigationContainer>
    );

    expect(getByTestId('profileEdit')).toBeTruthy();
    expect(getByTestId('profileImage')).toBeTruthy();
    expect(getByPlaceholderText('Name').props.value).toBe(user.name);
    expect(getByPlaceholderText('Email').props.value).toBe(user.email);
    expect(getByTestId('button')).toBeTruthy();
  });

  it('updates name correctly', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <ThemeProvider>
          <ProfileEdit route={{ params: { user } }} />
        </ThemeProvider>
      </NavigationContainer>
    );
    const newName = 'Jane Smith';
    fireEvent.changeText(getByPlaceholderText('Name'), newName);
    expect(getByPlaceholderText('Name').props.value).toBe(newName);
  });

  it('updates email correctly', () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer>
        <ThemeProvider>
          <ProfileEdit route={{ params: { user } }} />
        </ThemeProvider>
      </NavigationContainer>
    );
    const newEmail = 'jane.smith@example.com';
    fireEvent.changeText(getByPlaceholderText('Email'), newEmail);
    expect(getByPlaceholderText('Email').props.value).toBe(newEmail);
  });
});
