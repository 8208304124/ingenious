import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import Text from '../../../components/elements/text';

const Menu2 = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.Menu2Text}>Menu2</Text>
    </View>
  );
};

export default Menu2;
