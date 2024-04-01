import { Switch, ViewStyle } from 'react-native';
import React from 'react';
import useTheme from '../../../utility/hooks/useTheme';
import { StyleProp } from 'react-native';

interface SwitchProps {
  testID?: string;
  onValueChange?: (value: boolean) => void;
  value?: boolean | undefined;
  style?: StyleProp<ViewStyle>;
}

const Switch_: React.FC<SwitchProps> = ({ testID, onValueChange, value = false, style }) => {
  const theme = useTheme();
  return (
    <Switch
      testID={testID}
      onValueChange={onValueChange}
      value={value}
      trackColor={{ true: theme.colors.PRIMARY, false: 'grey' }}
      thumbColor="#FFF"
      style={style}
    />
  );
};

export default Switch_;
