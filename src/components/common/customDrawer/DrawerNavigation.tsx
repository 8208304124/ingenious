import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoard from '../../../screens/DashBoard';
import CustomDrawer, { Props } from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: Props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen name="DashBoard" component={DashBoard} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
