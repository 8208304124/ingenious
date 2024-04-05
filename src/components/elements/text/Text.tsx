import React from 'react';
import { Text, TextStyle } from 'react-native';
import useTheme from '../../../utility/hooks/useTheme';

interface TextProps {
  testID?: string;
  children: React.ReactNode;
  style?: TextStyle[] | TextStyle;
  numberOfLines?: number;
}

export default function Text_({ testID, children, style, numberOfLines }: TextProps) {
  const theme = useTheme();
  return (
    <Text
      testID={testID}
      // style={{ color: theme.colors.TEXT, ...style }}
      style={[
        { color: theme.colors.TEXT },
        ...(Array.isArray(style) ? style : [style]), // Ensure style is an array
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
}
