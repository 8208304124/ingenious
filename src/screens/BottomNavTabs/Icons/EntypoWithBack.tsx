import React from 'react';
import { View } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
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
    }}
  >
    <Svg width={size * 1.4} height={size * 1.4}>
      <Circle cx={size / 1.89} cy={size / 1.7} r={size / 2} fill={backgroundColor} />
    </Svg>
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
