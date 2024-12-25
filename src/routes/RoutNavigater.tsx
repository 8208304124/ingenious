/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import routes from './routes';
import useTheme from '../utility/hooks/useTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import Alert, { AlertOptionsType } from '../components/elements/alert/Alert';
import HeaderLeft from './Headers/HeaderLeft';
import HeaderRight from '../screens/BottomNavTabs/Headers/HeaderRight';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const defaultOptions = {
  showHeaderRight: false,
  showNotification: false,
  showShare: false,
};

const mergeOptionsWithDefaults = (options: any) => {
  return {
    ...defaultOptions,
    ...options,
  };
};
export const RouteNavigater = () => {
  const theme = useTheme();
  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigationRef.current?.navigate('DrawerNavigation');
      }
    } catch (error) {
      setAlertOptions({
        visible: true,
        title: i18next.t('TEMP00010'),
        message: i18next.t('TEMP00009'),
      });
    }
  };
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          background: 'white',
          primary: theme.colors.PRIMARY,
          text: 'black',
          card: '',
          border: '',
          notification: '',
        },
        dark: !theme.isLightTheme,
      }}
      ref={navigationRef}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTitleAlign: 'left',
          headerLeft: () => <HeaderLeft />,
        }}
      >
        {routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component as React.ComponentType<any>}
            options={() => {
              const mergedOptions = mergeOptionsWithDefaults(route.options);
              return {
                ...mergedOptions,
                headerStyle: {
                  backgroundColor: '#F7F8FA',
                },
                headerTitleAlign: 'left',
                headerTitle: () => (
                  <View
                    style={{
                      marginLeft: 15,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      flex: 1,
                    }}
                  >
                    <Text style={{ color: '#4169E1', fontSize: 24, fontWeight: '700' }}>
                      {mergedOptions.title}
                    </Text>
                  </View>
                ),
                headerRight: () =>
                  mergedOptions.showHeaderRight && (
                    <HeaderRight
                      showWhiteNotify
                      showHeaderForPadding
                      showNotification={mergedOptions.showNotification}
                      showShare={mergedOptions.showShare}
                    />
                  ),
                headerTitleStyle: { fontSize: 24, fontWeight: '700' },
                headerTintColor: '#4169E1',
              };
            }}
          />
        ))}
      </Stack.Navigator>
      <Alert options={alertOptions} setOptions={setAlertOptions} />
    </NavigationContainer>
  );
};
