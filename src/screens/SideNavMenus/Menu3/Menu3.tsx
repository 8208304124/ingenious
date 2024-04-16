import { View } from 'react-native';
import React from 'react';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import styles from './styles';
import Text from '../../../components/elements/text';

const Menu3 = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.Menu3Text}>Menu3</Text>
    </View>
  );
};

export default Menu3;
