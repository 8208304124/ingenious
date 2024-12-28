import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import styles from './styles';
import Text from '../../components/elements/text';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import { commonStyles } from '../../assets/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from '../../components/elements/input/TextInput';
import Loader from '../../components/elements/loader';
import Alert from '../../components/elements/alert';
import { AlertOptionsType } from '../../components/elements/alert/Alert';
import { useDispatch } from 'react-redux';
import { ApiResponseType, callLogin } from '../../store/reducers/authReducer';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/reducers';
import { UnknownAction } from 'redux';
import HeadLogo from '../../assets/images/headLogo.svg';
import { getStoreLoginUser } from '../../utility/localStorage/localStorage';
export type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Login = ({ navigation }: LoginProps) => {
  const style = useThemedStyles(styles);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const dispatch: ThunkDispatch<RootState, void, UnknownAction> = useDispatch();
  const [FormDataInfo, setFormDataInfo] = useState({
    userName: '',
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
    const requestFormdata = {
      phoneNumber: FormDataInfo.userName,
    };
    const res = await dispatch(
      callLogin({ requestBody: requestFormdata, setAlertOptions, setLoading: setShowLoader })
    );
    const { status, data } = res?.payload as ApiResponseType<{ message: string }>;
    if (status == 200 && data) {
      navigation.navigate('OTPScreen', { phoneNumber: FormDataInfo.userName });
    }
  };
  useEffect(() => {
    const checkLoggedInUser = async () => {
      const loggedInUserDetails = await getStoreLoginUser();
      if (loggedInUserDetails) {
        navigation.navigate('MainDashboard');
      }
    };

    checkLoggedInUser();
  }, [dispatch, navigation]);
  return (
    <GestureHandlerRootView style={commonStyles.Flex1}>
      <SafeAreaView style={[commonStyles.Flex1]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={style.container}>
            <View style={{ alignItems: 'center' }}>
              <HeadLogo />
            </View>
            <View style={style.LoginContainer}>
              <View>
                <Text style={style.headerText}>Login</Text>
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
                  placeholder={'Enter your registered mobile no.'}
                  icon={'person'}
                  iconAlling="left"
                  onChangeText={(text) => onLoginInfoChange(text, 'userName')}
                  value={FormDataInfo?.userName}
                />
              </View>
              <View style={style.ButtonContainer}>
                <Pressable style={style.button} onPress={handleLogin}>
                  <Text style={style.buttonText}>Send OTP</Text>
                </Pressable>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
              <Text style={{ color: '#7F8C8D' }}>Don’t have account?</Text>
              <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: '#4169E1', fontWeight: '600' }}>Sign Up</Text>
              </Pressable>
            </View>
            <Loader loading={showLoader} />
            <Alert options={alertOptions} setOptions={setAlertOptions} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default Login;
