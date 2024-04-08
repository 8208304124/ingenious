import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './RootNavigation';
import routes from './routes';
import useTheme from '../utility/hooks/useTheme';
import DashBoard from '../screens/DashBoard';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const RouteNavigater = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          background: theme.colors.BACKGROUND,
          primary: theme.colors.PRIMARY,
          text: theme.colors.TEXT,
          card: '',
          border: '',
          notification: '',
        },
        dark: !theme.isLightTheme,
      }}
      ref={navigationRef}
    >
      <Drawer.Navigator>
        <Drawer.Screen name="DashBoard" options={{ drawerLabel: 'Home' }}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="DashBoard"
                component={DashBoard}
                options={{
                  headerStyle: {
                    backgroundColor: theme.colors.BACKGROUND,
                  },
                  headerTintColor: theme.colors.HEADER_TEXT,
                }}
              />
              {routes.map((route) => (
                <Stack.Screen
                  key={route.name}
                  name={route.name}
                  component={route.component}
                  options={{
                    headerStyle: {
                      backgroundColor: theme.colors.BACKGROUND,
                    },
                    headerTintColor: theme.colors.HEADER_TEXT,
                  }}
                />
              ))}
            </Stack.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
