import React from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import i18next from 'i18next';
import useLanguage from '../../../utility/hooks/useLanguage';
import useTheme from '../../../utility/hooks/useTheme';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';

interface CustomCheckboxProps {
  testID: string;
  label: string;
  value: boolean;
  onChange: () => void;
  borderRadius?: number;
  size?: number;
}

export default function CheckBox({
  testID,
  label,
  value,
  onChange,
  borderRadius = 5,
  size = 20,
}: CustomCheckboxProps) {
  const translate = useLanguage();
  i18next.t(translate);
  const theme = useTheme();
  const styles = useThemedStyles(style);
  const filledColor = value ? theme.colors.CHECKBOX_FILLED : theme.colors.PLACEHOLDER;
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        testID={testID}
        onPress={onChange}
        text={i18next.t(label)}
        isChecked={value}
        fillColor={theme.colors.CHECKBOX_FILLED}
        unFillColor={theme.colors.CHECKBOX_UNFILLED}
        iconStyle={{ borderWidth: 0, borderRadius: borderRadius }}
        innerIconStyle={{ borderRadius: borderRadius, borderColor: filledColor }}
        textStyle={{ textDecorationLine: 'none', color: theme.colors.TEXT }}
        size={size}
        disableBuiltInState={true}
      />
    </View>
  );
}

const style = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
    },
  });
};
