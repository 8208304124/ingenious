/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { RouteNavigater } from './src/routes/RoutNavigater';
import ThemeProvider from './src/theme/themeProvider/ThemeProvider';
// import { Provider } from "react-redux";
import MultiLanguage from './src/utility/langSupport/MultiLanguage';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <Provider store={store}>
      <MultiLanguage>
        <ThemeProvider>
          <RouteNavigater />
        </ThemeProvider>
      </MultiLanguage>
    </Provider>
  );
}

export default App;
