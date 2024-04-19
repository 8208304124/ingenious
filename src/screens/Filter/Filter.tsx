import { View } from 'react-native';
import React from 'react';
import Text from '../../components/elements/text';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import styles from './styles';
import i18next from 'i18next';

const Filter = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.FilterText}>{i18next.t('TEMP00023')}</Text>
    </View>
  );
};

export default Filter;
