import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import { loginValidation } from '../../utility/validations/Validations';
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
import { post } from '../../Services/HttpServices';
import i18next from 'i18next';
import Button from '../../components/elements/button/Button';
import Loader from '../../components/elements/loader';
import Alert from '../../components/elements/alert';
import { AlertOptionsType } from '../../components/elements/alert/Alert';
import Password from './components/password';

export type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
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

  // useEffect(() => {
  //   checkToken();
  // }, []);
  const handleLangFun = (selectedValue: languageType) => {
    translate.changeLanguage(selectedValue.value);
  };

  const onLoginInfoChange = (text: string, key: string) => {
    setFormDataInfo((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  const handleLogin = async () => {
    setShowLoader(true);

    if (!loginValidation(FormDataInfo.userName, FormDataInfo.password, setAlertOptions)) {
      // Validation failed, return early
      setShowLoader(false);
      return;
    }
    try {
      setShowLoader(true);
      const requestBody = {
        username: FormDataInfo.userName,
        password: FormDataInfo.password,
        expiresInMins: 30,
      };
      const response = await post(requestBody, setShowLoader, setAlertOptions);

      setShowLoader(false);
      if (response && response.token) {
        await AsyncStorage.setItem('token', response.token);

        navigation.navigate('DrawerNavigation');
      } else {
        // Handle case where token is not present in the response
        setAlertOptions({
          visible: true,
          title: i18next.t('TEMP00010'),
          message: 'Token not found in response',
        });
      }
    } catch (error) {
      setShowLoader(false);
      setAlertOptions({
        visible: true,
        title: i18next.t('TEMP00010'),
        message: i18next.t('TEMP00020'),
      });
    }
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
              {i18next.t('TEMP00001')}
            </Text>
            {/* Login */}
          </View>
          <View style={style.input}>
            {/* Username */}
            <TextInput
              testID={'Username_Input'}
              placeholder={i18next.t('TEMP00002')}
              icon={'person'}
              iconAlling="left"
              onChangeText={(text) => onLoginInfoChange(text, 'userName')}
              value={FormDataInfo?.userName}
            />
          </View>
          <View style={style.input}>
            <Password
              testID={'password'}
              placeholder={i18next.t('TEMP00003')}
              password={FormDataInfo.password}
              onChange={(text: string) => onLoginInfoChange(text, 'password')}
            />
          </View>
        </View>
        <View style={style.ButtonContainer}>
          <Button
            testID="Login_Btn"
            title={i18next.t('TEMP00001')}
            onPress={handleLogin}
            addonPrimaryStyle={style.loginButton}
          />
        </View>
        <View style={style.VersionInfoContainer}>
          <TouchableOpacity
            testID="Version_Btn"
            style={style.VersionInfoText}
            onPress={() => navigation.navigate('VersionInfo')}
          >
            <Text testID={'VersionInfo_Text'} style={{ color: theme.colors.BUTTON }}>
              {i18next.t('TEMP00006')}
            </Text>
            {/* Versioninfo */}
          </TouchableOpacity>
          <Text testID={'Theme_Text'} style={style.themeText}>
            {i18next.t('TEMP00007')}
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
