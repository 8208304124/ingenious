import React, { useState } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Pressable, ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { loginValidation } from '../../utility/validations/Validations';
import Text from '../../components/elements/text';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import { commonStyles } from '../../assets/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from '../../components/elements/input/TextInput';
import Loader from '../../components/elements/loader';
import Alert from '../../components/elements/alert';
import { AlertOptionsType } from '../../components/elements/alert/Alert';
import { useDispatch } from 'react-redux';
import { callLogin, loginPayloadType } from '../../store/reducers/authReducer';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/reducers';
import { UnknownAction } from 'redux';
import HeadLogo from '../../assets/images/headLogo.svg';
export type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
};
function SignUp({ navigation }: LoginProps) {
  const style = useThemedStyles(styles);
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
    } catch (error) {
      setShowLoader(false);
    }
  };
  return (
    <SafeAreaView style={[commonStyles.Flex1]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={style.container}>
          <View style={{ alignItems: 'center' }}>
            <HeadLogo />
          </View>
          <View style={style.LoginContainer}>
            <View>
              <Text style={style.headerText}>Sign up</Text>
            </View>
            <View>
              <Text style={style.loginSubText}>
                Create your account to access expert-led courses and unlock your potential in law.
              </Text>
            </View>
            <View style={style.input}>
              {/* Username */}
              <TextInput
                testID={'Username_Input'}
                placeholder={'Enter your Full name'}
                icon={'person'}
                iconAlling="left"
                onChangeText={(text) => onLoginInfoChange(text, 'userName')}
                value={FormDataInfo?.userName}
              />
            </View>
            <View style={style.input}>
              {/* Username */}
              <TextInput
                testID={'Username_Input'}
                placeholder={'Enter your Email'}
                icon={'person'}
                iconAlling="left"
                onChangeText={(text) => onLoginInfoChange(text, 'userName')}
                value={FormDataInfo?.userName}
              />
            </View>
            <View style={style.input}>
              {/* Username */}
              <TextInput
                testID={'Username_Input'}
                placeholder={'Enter your mobile no.'}
                icon={'person'}
                iconAlling="left"
                onChangeText={(text) => onLoginInfoChange(text, 'userName')}
                value={FormDataInfo?.userName}
              />
            </View>
            <View style={style.ButtonContainer}>
              <Pressable style={style.button} onPress={handleLogin}>
                <Text style={style.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
            <Text style={{ color: '#7F8C8D' }}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#4169E1', fontWeight: '600' }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <Loader loading={showLoader} />
      <Alert options={alertOptions} setOptions={setAlertOptions} />
    </SafeAreaView>
  );
}

export default SignUp;
