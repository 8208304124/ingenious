import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Text from '../../elements/text';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerNavigationState, ParamListBase, useNavigation } from '@react-navigation/native';
import Alert from '../../elements/alert';
import { AlertOptionsType } from '../../elements/alert/Alert';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Edit from 'react-native-vector-icons/Feather';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import User from '../../../assets/images/user-profile..svg';
import useTheme from '../../../utility/hooks/useTheme';
import { commonStyles } from '../../../assets/commonStyles';

export type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const CustomDrawer = (props: Props) => {
  const navigation = useNavigation();

  const theme = useTheme();
  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      // Navigate to login screen
      navigation.navigate('Login');
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
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileView')}>
            <User width={50} height={50} />
          </TouchableOpacity>
          <View style={commonStyles.FlexDirectionRow}>
            <View style={styles.profileNameContainer}>
              <Text style={[styles.textColor, { fontSize: theme.typography.size.M }]}>
                John Doe
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit')}>
              <Edit name="edit-3" size={22} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={commonStyles.FlexDirectionRow}>
            <View style={styles.infoContainer}>
              <Text style={styles.textColor}>280 Coins</Text>
            </View>
          </View>
        </View>
        <View style={[styles.drawerItemList, { backgroundColor: theme.colors.BACKGROUND }]}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={[styles.bottomContainer, { borderTopColor: theme.colors.ICON }]}>
        <TouchableOpacity style={{ paddingVertical: theme.shape.padding.M }}>
          <View style={[commonStyles.FlexDirectionRow, commonStyles.AlignItemsCenter]}>
            <Ionicons name="settings-outline" size={22} color={theme.colors.ICON} />
            <View style={[styles.bottomContainerText]}>
              <Text style={{ fontSize: theme.typography.size.SR }}>Settings</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={{ paddingVertical: theme.shape.padding.M }}>
          <View style={[commonStyles.FlexDirectionRow, commonStyles.AlignItemsCenter]}>
            <Ionicons name="exit-outline" size={22} color={theme.colors.ICON} />
            <View style={styles.bottomContainerText}>
              <Text>Log Out</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Alert options={alertOptions} setOptions={setAlertOptions} />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemList: { flex: 1, paddingTop: 10 },
  topContainer: { padding: 10 },
  bottomContainer: { padding: 20, borderTopWidth: 1 },
  bottomContainerText: {
    marginLeft: 5,
  },
  profileNameContainer: {
    marginBottom: 5,
  },
  infoContainer: {
    marginRight: 5,
  },
  textColor: {
    color: '#ffffff',
  },
});
