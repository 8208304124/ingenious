import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';

interface HeartBackgroundIconProps {
  size: number;
  backgroundColor: string;
  iconColor: string;
  iconName: string;
  style?: StyleProp<ViewStyle>;
}

const HeartBackgroundIcon: React.FC<HeartBackgroundIconProps> = ({
  size,
  backgroundColor,
  iconColor,
  iconName,
  style,
}) => {
  const heartPath = `
    M 50 15 
    C 35 0, 0 25, 25 50 
    L 50 75 
    L 75 50 
    C 100 25, 65 0, 50 15 
    Z
  `;

  return (
    <View style={[{ width: size, height: size }, style]}>
      <Svg width={size} height={size} viewBox="5 4 90 80" style={{ position: 'absolute' }}>
        <Path d={heartPath} fill={backgroundColor} />
      </Svg>
      <Feather name={iconName} size={size} color={iconColor} style={{ position: 'absolute' }} />
    </View>
  );
};

export default HeartBackgroundIcon;
