import React, { useState, useEffect } from 'react';
import { View, Modal } from 'react-native';
import Text from '../text';
import Button from '../button/Button';
import { styles } from './styles';
import i18next from 'i18next';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useLanguage from '../../../utility/hooks/useLanguage';

export interface AlertOptionsType {
  visible: boolean;
  title: string;
  message: string;
  buttonText?: string;
  onButtonPress?: () => void;
}
export type SetAlertOptionsType = React.Dispatch<React.SetStateAction<AlertOptionsType>>;

interface AlertProps {
  options: AlertOptionsType;
  setOptions: SetAlertOptionsType;
}

const Alert: React.FC<AlertProps> = ({ options, setOptions }) => {
  const {
    visible = false,
    title,
    message,
    buttonText = 'OK',
    onButtonPress = () => {
      setOptions({ ...options, visible: false });
    },
  } = options;

  const style = useThemedStyles(styles);

  const [filterMsg, setFilterMsg] = useState('');
  const translate = useLanguage();
  i18next.t(translate);

  const onRequestClose = () => {
    setOptions({ ...options, visible: false });
  };

  const changeMsg = () => {
    const replacement = message.split('$#');
    const msg = replacement.shift() as string;

    let message_ = i18next.t(msg);
    replacement.forEach((element) => {
      message_ = message_.replace('$#', element);
    });
    setFilterMsg(message_);
  };

  useEffect(() => {
    if (message) changeMsg();
  }, [message]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onRequestClose}
      >
        <View style={style.parentContainer}>
          <View style={style.modalContainer}>
            <View style={style.horizontalPadding}>
              <Text style={style.title}>{i18next.t(title)}</Text>
              <Text>{filterMsg}</Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-end',
              }}
            >
              <Button
                type="text"
                title={buttonText}
                onPress={onButtonPress}
                addonTextStyle={style.buttonText}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Alert;

/**
 * Sample usage
 * **/
// import Alert, { AlertOptionsType, SetOptionsType } from './Alert';
// declare state as follows -
// const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
//   visible: false,
//   title: '',
//   message: '',
// });

// call component inside JSX as follows -
// <Alert options={alertOptions} setOptions={setAlertOptions} />

// change visibility as follows -
// setAlertOptions({ ...alertOptions, visible: !alertOptions.visible });
// or
// setAlertOptions({
//   visible: true,
//   title: 'Message',
//   message: 'Checkbox is checked ',
//   buttonText: 'Update',
// });
// Note - always use <Alert> at the bottom of the screen
