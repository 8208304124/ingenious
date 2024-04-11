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

function App() {
  return (
    <MultiLanguage>
      <ThemeProvider>
        <RouteNavigater />
      </ThemeProvider>
    </MultiLanguage>
  );
}

export default App;
