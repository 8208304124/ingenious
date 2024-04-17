import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import Loading from '../../components/elements/loader/Loader';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import SettingForms from './SettingForms';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type ApplicationSettingProps = {
  navigation: NavigationProp<ParamListBase>;
};

// ApplicationSetting
const ApplicationSetting: React.FC<ApplicationSettingProps> = () => {
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [loading] = useState<boolean>(false);

  return (
    // container
    <SafeAreaView style={style.container}>
      <StatusBar
        backgroundColor={theme.colors.HEADER_COLOR}
        barStyle={theme.isLightTheme ? 'dark-content' : 'light-content'}
      />
      <View style={style.body}>
        {loading && <Loading loading={false} />}
        <SettingForms />
      </View>
    </SafeAreaView>
  );
};

export default ApplicationSetting;
