/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { RouteNavigater } from './src/routes/RoutNavigater';
import ThemeProvider from './src/theme/themeProvider/ThemeProvider';
// import { Provider } from "react-redux";
import MultiLanguage from './src/utility/langSupport/MultiLanguage';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
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
