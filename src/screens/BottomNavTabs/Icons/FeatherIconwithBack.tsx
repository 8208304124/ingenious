import React from 'react';
import { View } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';

interface FeatherIconwithBackProps {
  name: string; // The name of the icon (Feather icon name)
  size: number; // The size of the icon (and container)
  color: string; // Color of the icon
  backgroundColor: string; // Background color of the icon
}

const FeatherIconwithBack: React.FC<FeatherIconwithBackProps> = ({
  name,
  size,
  color,
  backgroundColor,
}) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size}>
      <Circle cx={size / 1.8} cy={size / 1.6} r={size / 2.4} fill={backgroundColor} />
    </Svg>
    <Feather
      name={name}
      size={size}
      color={color}
      style={{
        position: 'absolute',
        top: size * 0.01,
        left: size * 0.01,
      }}
    />
  </View>
);

export default FeatherIconwithBack;
