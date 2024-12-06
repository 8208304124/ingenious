import React, { useState, useRef } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import HeadLogo from '../../assets/images/headLogo.svg';
const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>(Array(4).fill(null));
  const style = useThemedStyles(styles);
  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Automatically move to the next input
    if (value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    // Handle backspace: Clear the current input and move focus to the previous input
    if (key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
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
        <Pressable style={style.button}>
          <Text style={style.buttonText}>Verify</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', gap: 5, paddingBottom: 25 }}>
          <Text style={{ color: '#7F8C8D' }}>Didn’t received OTP?</Text>
          <Text style={{ color: '#4169E1', fontWeight: '600' }}>Send OTP again</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}></View>
    </View>
  );
};

export default OTPScreen;
