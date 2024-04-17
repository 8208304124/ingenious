import { View } from 'react-native';
import React from 'react';
import Text from '../../components/elements/text';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import styles from './styles';

const Filter = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.FilterText}>Filter</Text>
    </View>
  );
};

export default Filter;
