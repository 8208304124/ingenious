import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoard from '../../../screens/DashBoard';
import CustomDrawer, { Props } from './CustomDrawer';
import Profile from '../../../screens/SideNavMenus/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: Props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: true, headerTitleAlign: 'center' }}
    >
      <Drawer.Screen name="Dashboard" component={DashBoard} />
      <Drawer.Screen name="Menu 2 " component={Profile} />

      {/* <Drawer.Screen name="Menu2" component={DashBoard} />
      <Drawer.Screen name="Menu3" component={DashBoard} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
