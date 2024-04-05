import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import Text from '../../components/elements/text';
import Switch_ from '../../components/elements/switch/Switch';
import useThemedStyles from '../../utility/hooks/useThemedStyles';

type loginInfoType = {
  userName: string;
  password: string;
};
type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
  loginInfo: loginInfoType;
};

const Login = ({ navigation }: LoginProps) => {
  const style = useThemedStyles(styles);
  const theme = useTheme();

  return (
    <View style={style.container}>
      <Text style={style.loginText}>Login</Text>
      <Switch_ testID={'switch'} onValueChange={theme.toggleTheme} value={!theme.isLightTheme} />
      <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
        <Text>Navigate to DashBoard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('VersionInfo')}>
        <Text> VersionInfo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileView')}>
        <Text> ProfileView</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
