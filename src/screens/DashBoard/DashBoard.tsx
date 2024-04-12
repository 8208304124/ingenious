import React from 'react';
import { View } from 'react-native';
import Text from '../../components/elements/text';
import styles from './styles';
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import { commonStyles } from '../../assets/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenFooter from '../../components/common/screenFooter/ScreenFooter';

// type DashboardProps = {
//   navigation: NavigationProp<ParamListBase>;
// };

const DashBoard = () => {
  const style = useThemedStyles(styles);

  return (
    <SafeAreaView style={[commonStyles.Flex1]}>
      <View style={style.container}>
        <Text style={style.DashBoardText}>DashBoard</Text>
      </View>

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
