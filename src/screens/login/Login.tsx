import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import Text from '../../components/elements/text';
import Switch_ from '../../components/elements/switch/Switch';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import { commonStyles } from '../../assets/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomDropdown from '../../components/common/dropdown';
import { langList } from '../../constants';
import useLanguage from '../../utility/hooks/useLanguage';
import TextInput from '../../components/elements/input/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import i18next from 'i18next';
import Button from '../../components/elements/button/Button';
import Loader from '../../components/elements/loader';
import Alert from '../../components/elements/alert';
import { AlertOptionsType } from '../../components/elements/alert/Alert';

type loginInfoType = {
  userName: string;
  password: string;
};
type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
  loginInfo: loginInfoType;
};
interface languageType {
  id: number;
  value: string;
  label: string;
}

const Login = ({ navigation }: LoginProps) => {
  const style = useThemedStyles(styles);
  const translate = useLanguage();
  const theme = useTheme();
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const [FormDataInfo, setFormDataInfo] = useState({
    userName: '',
    password: '',
  });

  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });

  useEffect(() => {
    checkToken();
  }, []);
  const handleLangFun = (selectedValue: languageType) => {
    translate.changeLanguage(selectedValue.value);
  };

  const onLoginInfoChange = (text: string, key: string) => {
    setFormDataInfo((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.navigate('DashBoard');
    }
  };

  const handleLogin = async () => {
    setShowLoader(true);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: FormDataInfo.userName,
          password: FormDataInfo.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Save token to AsyncStorage
        await AsyncStorage.setItem('token', data.token);
        navigation.navigate('DashBoard');
      }
    } catch (error) {
      setAlertOptions({
        visible: true,
        title: i18next.t('UNIFY00010'),
        message: i18next.t('UNIFY00009'),
        // error occurred during login
      });
    }
    setShowLoader(false);
  };
  return (
    <GestureHandlerRootView style={commonStyles.Flex1}>
      <SafeAreaView style={[style.container, commonStyles.Flex1]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={style.DropDown}>
            <View style={commonStyles.Flex1}>
              <TouchableOpacity testID="DropDown_BTN">
                <CustomDropdown
                  options={langList}
                  onSelect={handleLangFun}
                  placeholder={'Language'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.IconContainer}>
            <Icon
              testID="icon"
              name={'settings-sharp'}
              size={theme.shape.icon.S}
              color={theme.colors.TEXT}
            />
          </View>
        </View>
        <View style={style.LoginContainer}>
          <View style={style.LoginTextContainer}>
            <Text
              testID={'Login_Text'}
              style={[
                style.loginText,
                { color: theme.colors.TEXT, fontSize: theme.typography.size.M },
              ]}
            >
              {i18next.t('UNIFY00001')}
            </Text>
            {/* Login */}
          </View>
          <View style={style.input}>
            {/* Username */}
            <TextInput
              testID={'Username_Input'}
              placeholder={i18next.t('UNIFY00002')}
              icon={'person'}
              iconAlling="left"
              onChangeText={(text) => onLoginInfoChange(text, 'userName')}
              value={FormDataInfo?.userName}
            />
          </View>
          <View style={style.input}>
            <TextInput
              testID={'Password_Input'}
              placeholder={i18next.t('UNIFY00003')}
              icon={'lock-closed'}
              iconAlling="left"
              onChangeText={(text) => onLoginInfoChange(text, 'password')}
              value={FormDataInfo.password}
            />
          </View>
        </View>
        <View style={style.ButtonContainer}>
          <Button
            testID={'Login_Btn'}
            title={i18next.t('UNIFY00001')}
            onPress={handleLogin}
            addonPrimaryStyle={style.loginButton}
          />
        </View>
        <View style={style.VersionInfoContainer}>
          <TouchableOpacity
            style={style.VersionInfoText}
            onPress={() => navigation.navigate('DashBoard')}
          >
            <Text testID={'VersionInfo_Text'} style={{ color: theme.colors.BUTTON }}>
              {i18next.t('UNIFY00006')}
            </Text>
            {/* Versioninfo */}
          </TouchableOpacity>
          <Text testID={'Theme_Text'} style={style.themeText}>
            {i18next.t('UNIFY00007')}
          </Text>
          {/* Theme */}
          <Switch_
            testID={'switch'}
            onValueChange={theme.toggleTheme}
            value={!theme.isLightTheme}
            style={style.switchstyle}
          />
        </View>
        <Loader loading={showLoader} />
        <Alert options={alertOptions} setOptions={setAlertOptions} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default Login;
