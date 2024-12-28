import React from 'react';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

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
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Feather name={name} size={size * 0.6} color={color} style={{ top: 0 }} />
  </View>
);

export default EntypoWithBack;
