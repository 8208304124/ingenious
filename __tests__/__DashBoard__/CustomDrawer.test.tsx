import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';
import CustomDrawer, { Props } from '../../src/components/common/customDrawer/CustomDrawer';
import { act } from 'react-test-renderer';

// Mock the DrawerContentScrollView component
jest.mock('@react-navigation/drawer', () => {
  const React = jest.requireActual('react');
  return {
    ...jest.requireActual('@react-navigation/drawer'),
    DrawerItemList: ({ mockCustomDrawerProps }: { mockCustomDrawerProps: Props }) => {
      return <>{mockCustomDrawerProps}</>;
    },
    DrawerContentScrollView: ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    },
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

type MockThemeProviderProps = {
  children: React.ReactNode;
  theme: (styles: {}) => void;
};

const mockThemeProviderProps: MockThemeProviderProps = {
  children: <></>,
  theme: jest.fn(),
};

const navigationMock: DrawerNavigationHelpers = {
  ...(jest.fn() as unknown as DrawerNavigationHelpers),
  navigate: jest.fn(),
};
// Mock props for CustomDrawer component
const mockCustomDrawerProps = {
  state: {} as DrawerNavigationState<ParamListBase>,
  navigation: navigationMock,
  descriptors: {} as DrawerDescriptorMap,
};

jest.mock('../src/assets/images/user-profile..svg', () => 'User');
jest.mock('react-native-vector-icons/Feather', () => 'Edit');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    removeItem: jest.fn().mockResolvedValue(undefined),
  },
}));
interface UserType {
  name: string;
  email: string;
  profileIcon: string;
}

const user: UserType = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profileIcon: 'user-large',
};

describe('Custom Drawer component', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );
  });

  it('checking the button', () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );

    expect(getByTestId('edit-icon-btn')).toBeTruthy();
    expect(getByTestId('log-out-btn')).toBeTruthy();
    expect(getByTestId('profile-view-button')).toBeTruthy();
  });

  it('Navigate when pressing the profile view button', async () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );

    await act(async () => {
      fireEvent.press(getByTestId('profile-view-button'));
    });

    expect(navigationMock.navigate).toHaveBeenCalledWith('ProfileView');
  });

  it('navigates to ProfileEdit when edit icon is pressed', async () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );
    await act(async () => {
      fireEvent.press(getByTestId('edit-icon-btn'));
    });

    expect(navigationMock.navigate).toHaveBeenCalledWith('ProfileEdit', { user });
  });

  it('navigates to Login screen after logout', async () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );

    await act(async () => {
      fireEvent.press(getByTestId('log-out-btn'));
    });

    expect(navigationMock.navigate).toHaveBeenCalled;
  });
});
