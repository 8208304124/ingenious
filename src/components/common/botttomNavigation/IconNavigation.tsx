import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import IconButton from './components/IconButton';
import { isValidArray } from '../../../utility/validations/VariableTypeValidation';
import Button from '../../elements/button/Button';
import { SvgProps } from 'react-native-svg';

interface Icon {
  backHandler?: boolean;
  onPress: () => void;
  vector?: boolean;
  icon: string;
  size?: number;
  useRippleEffect?: boolean;
  label: string;
  showButton?: boolean;
  svgImage?: React.FC<SvgProps>;
}

export interface IconNavigationKProps {
  icons: Icon[];
}

export default function IconNavigation({ icons }: IconNavigationKProps) {
  if (!isValidArray(icons)) return null;

  const style = useThemedStyles(styles);

  const options = icons.map((el, index) =>
    el.showButton ? (
      <View key={index} style={{ flex: 1, marginHorizontal: 15 }}>
        <Button
          title={el.label}
          onPress={el.onPress}
          addonPrimaryStyle={{ borderRadius: 5 }}
        ></Button>
      </View>
    ) : (
      <IconButton el={el} key={index}></IconButton>
    )
  );

  return <View style={[style.container, icons.length === 2 && style.container2]}>{options}</View>;
}
