import React from 'react';
import { render } from '@testing-library/react-native';
import ThemeProvider from '../../src/theme/themeProvider/ThemeProvider';
import DashBoard from '../../src/screens/DashBoard';
import ScreenFooter from '../../src/components/common/screenFooter/ScreenFooter';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

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
const navigationMock: NavigationProp<ParamListBase> = {
  ...(jest.fn() as unknown as NavigationProp<ParamListBase>),
  navigate: jest.fn(),
};

describe('Dashboard component', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider {...mockThemeProviderProps}>
        <DashBoard navigation={navigationMock} />
      </ThemeProvider>
    );
  });

  test('render Footer bar', () => {
    const navigateButtons = {
      icons: [
        {
          label: 'Back',
          onPress: jest.fn(), // Provide mock function for onPress
          icon: 'arrow-back-circle-sharp',
        },
        {
          label: 'Menu',
          onPress: jest.fn(), // Provide mock function for onPress
          icon: 'menu',
        },
        {
          label: 'settings',
          onPress: jest.fn(), // Provide mock function for onPress
          icon: 'settings',
        },
      ],
    };

    render(
      <ThemeProvider {...mockThemeProviderProps}>
        <ScreenFooter bottomNavigationOptions={navigateButtons} />
      </ThemeProvider>
    );
  });
});
