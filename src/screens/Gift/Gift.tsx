import { View } from 'react-native';
import React from 'react';
import Text from '../../components/elements/text';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import i18next from 'i18next';

const Gift = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.GiftText}>{i18next.t('TEMP00025')}</Text>
    </View>
  );
};

export default Gift;
