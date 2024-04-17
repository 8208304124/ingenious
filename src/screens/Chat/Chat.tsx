import { View } from 'react-native';
import React from 'react';
import Text from '../../components/elements/text';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';

const Chat = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.ChatText}>Chat</Text>
    </View>
  );
};

export default Chat;
