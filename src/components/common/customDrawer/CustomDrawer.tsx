import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerNavigationState, ParamListBase, useNavigation } from '@react-navigation/native';
import Alert from '../../elements/alert';
import { AlertOptionsType } from '../../elements/alert/Alert';
import Ionicons from 'react-native-vector-icons/Ionicons';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import User from '../../../assets/images/user-profile..svg';

export type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const CustomDrawer = (props: Props) => {
  const navigation = useNavigation();
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
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
        <ImageBackground
          source={require('../../../assets/images/profile-svgrepo-com.svg')}
          style={{ padding: 20 }}
        >
          <View style={{}}>
            <User width={50} height={50} color={'#ffffff'} />
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,

              marginBottom: 5,
            }}
          >
            John Doe
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                marginRight: 5,
              }}
            >
              280 Coins
            </Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Settings
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Alert options={alertOptions} setOptions={setAlertOptions} />
    </View>
  );
};

export default CustomDrawer;
