import React, { useState, useRef } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadLogo from '../../assets/images/headLogo.svg';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { ApiResponseType, callLogin, callOtpVerify } from '../../store/reducers/authReducer';
import Alert, { AlertOptionsType } from '../../components/elements/alert/Alert';
import { UnknownAction } from 'redux';
import { RootState } from '../../store/reducers';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import Loader from '../../components/elements/loader';
import { AuthUserResponse, storeLoginUser } from '../../utility/localStorage/localStorage';

export type OtpScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { phoneNumber: string } }, 'params'>;
};

const OTPScreen = ({ navigation, route }: OtpScreenProps) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>(Array(6).fill(null));
  const style = useThemedStyles(styles);
  const dispatch: ThunkDispatch<RootState, void, UnknownAction> = useDispatch();
  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { phoneNumber } = route.params;

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const requestFormdata = {
      otp: otp.join('').trim(),
      phoneNumber: phoneNumber,
    };
    const res = await dispatch(
      callOtpVerify({ requestBody: requestFormdata, setAlertOptions, setLoading })
    );
    const { status, data } = res?.payload as ApiResponseType<AuthUserResponse>;
    if (status == 200) {
      await storeLoginUser(data);
      navigation.navigate('MainDashboard');
    }
  };
  const handleOtpsendAgain = async () => {
    const requestFormdata = {
      phoneNumber: phoneNumber,
    };
    const res = await dispatch(
      callLogin({ requestBody: requestFormdata, setAlertOptions, setLoading: setLoading })
    );
    const { status } = res?.payload as ApiResponseType<{ Message: string }>;
    if (status == 200) {
      setAlertOptions({ title: 'Success', message: 'Otp sent successfully', visible: true });
    }
  };
  return (
    <View style={style.otpMain}>
      <View style={{ alignItems: 'center' }}>
        <HeadLogo />
      </View>
      <View style={style.otpContainer}>
        <View style={{ width: '100%', alignItems: 'flex-end' }}>
          <Icon name="close" size={18} color={'#717171'} />
        </View>
        <View>
          <Text style={style.otpheaderText}>Verify Your Mobile No.</Text>
          <Text style={style.subText}>OTP is sent on your registered mobile number</Text>
        </View>
        <View style={style.otpBox}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={style.inputText}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleChange(index, value)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
              accessible
              accessibilityLabel={`OTP digit ${index + 1}`}
            />
          ))}
        </View>
        <Pressable style={style.button} onPress={handleVerify}>
          <Text style={style.buttonText}>Verify</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', gap: 5, paddingBottom: 25 }}>
          <Text style={{ color: '#7F8C8D' }}>Didn’t received OTP?</Text>
          <Text style={{ color: '#4169E1', fontWeight: '600' }} onPress={handleOtpsendAgain}>
            Send OTP again
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}></View>
      {loading && <Loader loading={loading} />}
      <Alert options={alertOptions} setOptions={setAlertOptions} />
    </View>
  );
};

export default OTPScreen;
