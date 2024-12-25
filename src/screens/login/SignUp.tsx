import React, { useState } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Pressable, ScrollView, View } from 'react-native';
import styles from './styles';
import Text from '../../components/elements/text';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import { commonStyles } from '../../assets/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextInput from '../../components/elements/input/TextInput';
import Alert from '../../components/elements/alert';
import { AlertOptionsType } from '../../components/elements/alert/Alert';
import HeadLogo from '../../assets/images/headLogo.svg';
import { useDispatch } from 'react-redux';
import { UnknownAction } from 'redux';
import { RootState } from '../../store/reducers';
import { ThunkDispatch } from 'redux-thunk';
import { ApiResponseType, callLogin } from '../../store/reducers/authReducer';
import Loader from '../../components/elements/loader';
export type LoginProps = {
  navigation: NavigationProp<ParamListBase>;
};
function SignUp({ navigation }: LoginProps) {
  const style = useThemedStyles(styles);
  const [FormDataInfo, setFormDataInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
  });
  const dispatch: ThunkDispatch<RootState, void, UnknownAction> = useDispatch();
  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const onLoginInfoChange = (text: string, key: string) => {
    setFormDataInfo((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };
  const handleContinue = async () => {
    const requestFormdata = {
      ...FormDataInfo,
    };
    const res = await dispatch(
      callLogin({ requestBody: requestFormdata, setAlertOptions, setLoading })
    );
    const { data } = res?.payload as ApiResponseType<{ Message: string }>;
    if (data && data.length > 0 && data[0].Message) {
      navigation.navigate('OTPScreen');
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
                onChangeText={(text) => onLoginInfoChange(text, 'fullName')}
                value={FormDataInfo?.fullName}
              />
            </View>
            <View style={style.input}>
              {/* Username */}
              <TextInput
                testID={'Username_Input'}
                placeholder={'Enter your Email'}
                icon={'person'}
                iconAlling="left"
                onChangeText={(text) => onLoginInfoChange(text, 'email')}
                value={FormDataInfo?.email}
              />
            </View>
            <View style={style.input}>
              {/* Username */}
              <TextInput
                testID={'Username_Input'}
                placeholder={'Enter your mobile no.'}
                icon={'person'}
                iconAlling="left"
                onChangeText={(text) => onLoginInfoChange(text, 'phoneNumber')}
                value={FormDataInfo?.phoneNumber}
              />
            </View>
            <View style={style.ButtonContainer}>
              <Pressable style={style.button} onPress={handleContinue}>
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
      {/* <Loader loading={showLoader} /> */}
      {loading && <Loader loading={loading} />}
      <Alert options={alertOptions} setOptions={setAlertOptions} />
    </SafeAreaView>
  );
}

export default SignUp;
