import { View } from 'react-native';
import React from 'react';
import styles from './styles';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import Text from '../../../components/elements/text';

const Profile = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.Menu1Text}>MENU 1</Text>
    </View>
  );
};

export default Profile;
