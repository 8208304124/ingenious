import React from 'react';
import { View, Pressable } from 'react-native';
import LightLogo from '../../../assets/images/etpLogo.svg';

const HeaderLeft: React.FC = () => {
  return (
    <View>
      <Pressable>
        <LightLogo height={30} width={126} />
      </Pressable>
    </View>
  );
};

export default HeaderLeft;
