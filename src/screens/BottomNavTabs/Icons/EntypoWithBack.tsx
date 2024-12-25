import React from 'react';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/EvilIcons';

interface FeatherIconwithBackProps {
  name: string;
  size: number;
  color: string;
  backgroundColor: string;
}

const EntypoWithBack: React.FC<FeatherIconwithBackProps> = ({
  name,
  size,
  color,
  backgroundColor,
}) => (
  <View
    style={{
      width: size,
      height: size,
      backgroundColor: backgroundColor,
      borderRadius: 20,
    }}
  >
    <Feather
      name={name}
      size={size * 0.7}
      color={color}
      style={{
        position: 'absolute',
        top: size * 0.2,
        height: size,
        left: size * 0.17,
      }}
    />
  </View>
);

export default EntypoWithBack;
