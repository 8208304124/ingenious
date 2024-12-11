import React from 'react';
import { View } from 'react-native';
import { Svg, Rect } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';

interface FeatherIconwithBackProps {
  name: string;
  size: number;
  color: string;
  backgroundColor: string;
}

const FeatherIconBook: React.FC<FeatherIconwithBackProps> = ({
  name,
  size,
  color,
  backgroundColor,
}) => (
  <View style={{ width: size, height: size }}>
    <Svg width={size} height={size}>
      <Rect
        x="5"
        y="5"
        width={size / 1.3}
        height={size / 1.5}
        rx={size * 0.1}
        fill={backgroundColor}
      />
    </Svg>
    <Feather
      name={name}
      size={size}
      color={color}
      style={{
        position: 'absolute',
        top: size * 0.1,
        left: size * 0.1,
      }}
    />
  </View>
);

export default FeatherIconBook;
