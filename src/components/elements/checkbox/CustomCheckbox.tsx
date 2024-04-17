import React from 'react';
import { View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import useTheme from '../../../utility/hooks/useTheme';
import useLanguage from '../../../utility/hooks/useLanguage';
import i18next from 'i18next';

interface CustomCheckboxProps {
  testID?: string;
  label: string;
  value: boolean;
  onChange: () => void;
  borderRadius?: number;
  size?: number;
}

export default function CustomCheckbox({
  testID,
  label,
  value,
  onChange,
  borderRadius = 2,
  size = 20,
}: CustomCheckboxProps) {
  const translate = useLanguage();
  i18next.t(translate);
  const theme = useTheme();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <BouncyCheckbox
        testID={testID}
        onPress={onChange}
        text={i18next.t(label)}
        isChecked={value}
        fillColor={theme.colors.PRIMARY}
        unfillColor={theme.colors.CHECKBOX_UNFILLED}
        iconStyle={{ borderWidth: 0, borderRadius: borderRadius }}
        textStyle={{ textDecorationLine: 'none', color: theme.colors.TEXT }}
        size={size}
        disableBuiltInState={true}
      />
    </View>
  );
}
