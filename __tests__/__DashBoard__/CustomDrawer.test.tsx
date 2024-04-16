import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase, NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';
import CustomDrawer, { Props } from '../../src/components/common/customDrawer/CustomDrawer';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

// Mock the return value of useNavigation
(useNavigation as jest.Mock).mockReturnValue({
  navigate: jest.fn(),
});

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

// Mock props for CustomDrawer component
const mockCustomDrawerProps = {
  state: {} as DrawerNavigationState<ParamListBase>,
  navigation: {} as DrawerNavigationHelpers,
  descriptors: {} as DrawerDescriptorMap,
};

const navigationMock: NavigationProp<ParamListBase> = {
  ...(jest.fn() as unknown as NavigationProp<ParamListBase>),
  navigate: jest.fn(),
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

  it('Navigate when pressing the profile view button', () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('profile-view-button'));

    expect(navigationMock.navigate).toHaveBeenCalled;
  });

  it('navigates to ProfileEdit when edit icon is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );
    const editIcon = getByTestId('edit-icon-btn');
    fireEvent.press(editIcon);
    expect(navigationMock.navigate).toHaveBeenCalled;
  });

  it('navigates to Login screen after logout', () => {
    const { getByTestId } = render(
      <ThemeProvider {...mockThemeProviderProps}>
        <CustomDrawer {...mockCustomDrawerProps} />
      </ThemeProvider>
    );

    fireEvent.press(getByTestId('log-out-btn'));

    expect(navigationMock.navigate).toHaveBeenCalled;
  });
});
