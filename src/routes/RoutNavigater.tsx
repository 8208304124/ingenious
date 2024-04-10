import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import routes from './routes';
import useTheme from '../utility/hooks/useTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import Alert, { AlertOptionsType } from '../components/elements/alert/Alert';

const Stack = createNativeStackNavigator();

export const RouteNavigater = () => {
  const theme = useTheme();

  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          navigationRef.current?.navigate('DashBoard');
        }
      } catch (error) {
        setAlertOptions({
          visible: true,
          title: i18next.t('UNIFY00010'),
          message: i18next.t('UNIFY00009'),
        });
      }
    };

    checkToken();
  }, []);
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
            key={route.name}
            name={route.name}
            component={route.component}
            options={() => ({
              ...route.options,
              headerStyle: {
                backgroundColor: theme.colors.BACKGROUND,
              },
              headerTintColor: theme.colors.HEADER_TEXT,
            })}
          />
        ))}
      </Stack.Navigator>
      <Alert options={alertOptions} setOptions={setAlertOptions} />
    </NavigationContainer>
  );
};
