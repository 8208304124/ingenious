import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Toast, { BaseToastProps, ErrorToast, ToastConfig } from 'react-native-toast-message';

import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

import i18next from 'i18next';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useTheme from '../../../utility/hooks/useTheme';
import useLanguage from '../../../utility/hooks/useLanguage';
import { ToastPosition } from './types';

export default function Toast_() {
  const styles = useThemedStyles(style);
  const theme = useTheme();

  const [filterMsg, setFilterMsg] = useState('');
  const [message, setMessage] = useState('');
  const translate = useLanguage();
  i18next.t(translate);

  const changeMsg = () => {
    const replacement = message.split('$#');
    const msg = replacement.shift();

    if (msg) {
      let message_ = i18next.t(msg);
      replacement.forEach((element) => {
        message_ = message_.replace('$#', element);
      });
      setFilterMsg(message_);
    }
  };

  useEffect(() => {
    if (message) changeMsg();
  }, [message]);

  const toastConfig: ToastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: ({
      text1 = '',
      props,
    }: {
      text1?: string;
      props: { uuid: string; LeadingIconColor: string };
    }) => {
      useEffect(() => {
        setMessage(text1);
      }, [text1]);
      return (
        <View style={styles.container}>
          <Icon
            name={'checkmark-circle'}
            size={theme.shape.icon.S}
            color={props.LeadingIconColor}
          />
          <Text style={styles.text}>{filterMsg}</Text>
          <Text>{props.uuid}</Text>
        </View>
      );
    },
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props: BaseToastProps) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
  };

  return <Toast config={toastConfig} />;
}
export const showToast = (
  msg: string,
  position: ToastPosition = 'top',
  LeadingIconColor: string
) => {
  Toast.show({
    type: 'success',
    text1: msg,
    position: position,
    swipeable: true,
    props: { LeadingIconColor: LeadingIconColor },
  });
};
// sample usage
//  showToast('ok called', 'bottom', theme.colors.BUTTON_SUCCESS);
