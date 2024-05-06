import React, { useEffect, useState } from 'react';
import { View, Modal } from 'react-native';
import Text from '../text';
import Button from '../button/Button';
import styles from './styles';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useLanguage from '../../../utility/hooks/useLanguage';
import i18next from 'i18next';

interface ConfirmProps {
  showConfirm: boolean;
  title?: string;
  message?: string;
  noText?: string;
  onNoPress?: () => void;
  yesText?: string;
  onYesPress?: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({
  showConfirm,
  title,
  message = '',
  noText = '',
  onNoPress = () => {
    /*default param */
  },
  yesText = '',
  onYesPress = () => {
    /*default param */
  },
}) => {
  const translate = useLanguage();
  i18next.t(translate);
  const style = useThemedStyles(styles);
  const [filterMsg, setFilterMsg] = useState('');

  const changeMsg = () => {
    const replacement = message.split('$#');
    const msg = replacement.shift();

    let message_ = i18next.t(msg);
    replacement.forEach((element) => {
      message_ = message_.replace('$#', element);
    });
    setFilterMsg(message_);
  };

  useEffect(() => {
    if (message) changeMsg();
  }, [message]);

  return (
    <Modal animationType="fade" visible={showConfirm} transparent={true}>
      <View style={style.modalContainer}>
        <View style={style.contentContainer}>
          {title && <Text style={style.title}>{i18next.t(title)}</Text>}
          <Text style={style.editText}>{i18next.t(filterMsg)}</Text>
          <View style={style.editButtons}>
            <View style={style.button1}>
              <Button onPress={onNoPress} type="text" title={i18next.t(noText)} />
            </View>
            <View style={style.button2}>
              <Button onPress={onYesPress} type="text" title={i18next.t(yesText)} color="primary" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Confirm;
