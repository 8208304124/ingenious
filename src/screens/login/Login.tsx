/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import { loginValidation } from '../../utility/validations/Validations';
import Text from '../../components/elements/text';
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
import Password from './components/password';
import { useDispatch } from 'react-redux';
import { callLogin, loginPayloadType } from '../../store/reducers/authReducer';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/reducers';
import { UnknownAction } from 'redux';

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
  const dispatch: ThunkDispatch<RootState, void, UnknownAction> = useDispatch();
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
      };
      const payload: loginPayloadType = {
        requestBody: requestBody,
        setLoading: setShowLoader,
        setAlertOptions: setAlertOptions,
      };
      const response = (await dispatch(callLogin(payload))).payload;
      setShowLoader(false);
      if (response && response?.token) {
        await AsyncStorage.setItem('token', response.token);
        navigation.navigate('DrawerNavigation');
      }
    } catch (error: any) {
      setShowLoader(false);
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
            <TouchableOpacity
              onPress={() => navigation.navigate('ApplicationSetting')}
              testID="icon"
            >
              <Icon name={'settings-sharp'} size={theme.shape.icon.S} color={theme.colors.TEXT} />
            </TouchableOpacity>
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
              testID={'Password_Input'}
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
        </View>
        <Loader loading={showLoader} />
        <Alert options={alertOptions} setOptions={setAlertOptions} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default Login;
