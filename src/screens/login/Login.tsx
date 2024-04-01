import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useTheme from '../../utility/hooks/useTheme';

import Switch_ from '../../components/elements/switch/Switch';

type LoginProps = {
  navigation: NavigationProp<ParamListBase>; // You should replace 'any' with the correct navigation prop type.
};

const Login = ({ navigation }: LoginProps) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <Switch_ testID={'switch'} onValueChange={theme.toggleTheme} value={!theme.isLightTheme} />
      <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
        <Text>Navigate to DashBoard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Login;
