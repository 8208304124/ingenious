import { View } from 'react-native';
import React from 'react';
import Text from '../../components/elements/text';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import i18next from 'i18next';

const Chat = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.ChatText}>{i18next.t('TEMP00026')}</Text>
    </View>
  );
};

export default Chat;
