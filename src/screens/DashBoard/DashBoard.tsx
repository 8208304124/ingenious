import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/elements/button/Button';
import i18next from 'i18next';
import styles from './styles';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import Alert from '../../components/elements/alert';
import { AlertOptionsType } from '../../components/elements/alert/Alert';
import { commonStyles } from '../../assets/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenFooter from '../../components/common/screenFooter/ScreenFooter';

type DashboardProps = {
  navigation: NavigationProp<ParamListBase>;
};

const DashBoard = ({ navigation }: DashboardProps) => {
  const style = useThemedStyles(styles);

  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      // Navigate to login screen
      navigation.navigate('login');
    } catch (error) {
      setAlertOptions({
        visible: true,
        title: i18next.t('UNIFY00010'),
        message: i18next.t('UNIFY00011'),
        // error occurred during logout
      });
    }
  };

  return (
    <SafeAreaView style={[commonStyles.Flex1]}>
      <View style={style.container}>
        <Button testID={'Login_Btn'} title={i18next.t('UNIFY00008')} onPress={handleLogout} />
      </View>
      <Alert options={alertOptions} setOptions={setAlertOptions} />
      <ScreenFooter
        showBottomNavigation={true}
        bottomNavigationOptions={{
          icons: [
            {
              label: 'Back',
              icon: 'arrow-back-circle-sharp',
              vector: true,
              useRippleEffect: false,
              onPress: () => {
                //
              },
            },
            {
              label: 'Menu',
              icon: 'menu',
              vector: true,
              useRippleEffect: false,
              onPress: () => {
                //
              },
            },
            {
              label: 'settings',
              icon: 'settings',
              vector: true,
              // showButton: true,
              useRippleEffect: false,
              onPress: () => {
                //
              },
            },
          ],
        }}
      />
    </SafeAreaView>
  );
};

export default DashBoard;
