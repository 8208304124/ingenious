import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { getCompanyinfo, getUserInfo } from '../../../services/localStorage';
import { moderateScale } from 'react-native-size-matters';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

export default function AppFooter() {
  const styles = useThemedStyles(style);
  const [loginName, setLoginName] = useState<string>('');
  const [warehouseName, setWarehouseName] = useState<string>('');
  const [shift, setshift] = useState<string>('');

  useEffect(() => {
    setLoginName('SLY009-Sylphy Retail Chennai');

    setshift('Shift: 8');
    setWarehouseName('Counter: 3');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{loginName}</Text>
      <Text style={styles.text}>{warehouseName}</Text>
      <Text style={styles.text}>{shift}</Text>
    </View>
  );
}

const style = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.APP_FOOTER_BG,
      paddingHorizontal: 16,
      paddingVertical: 7,
      width: '100%',
      // position:'absolute',
      // bottom: 0,
    },
    text: {
      color: theme.colors.APP_FOOTER_TEXT,
      fontSize: moderateScale(theme.typography.size.FOOTER_FONT_SIZE),
    },
  });
};
