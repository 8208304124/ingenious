import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import routes from './routes';
import useTheme from '../utility/hooks/useTheme';

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator>
        {routes.map((route) => (
          <Stack.Screen
            key={route.key}
            name={route.name}
            component={route.component}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: theme.colors.BACKGROUND,
              },
              headerTintColor: theme.colors.HEADER_TEXT,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
