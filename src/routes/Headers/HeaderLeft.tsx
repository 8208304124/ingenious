import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import BackArrow from '../../assets/images/backArrow.svg';

function HeaderLeft() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
      <BackArrow />
    </TouchableOpacity>
  );
}

export default HeaderLeft;
