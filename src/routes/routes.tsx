/* eslint-disable @typescript-eslint/no-explicit-any */
import DrawerNavigation from '../components/common/customDrawer/DrawerNavigation';
import Login from '../screens/login/Login';
import VersionInfo from '../screens/VersionInfo/VersionInfo';
import ProfileView from '../screens/ProfileView/ProfileView';
import ProfileEdit from '../screens/ProfileEdit/ProfileEdit';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type Route = {
  key: React.Key;
  name: string;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};
const routes: Route[] = [
  {
    key: 'Login',
    name: 'Login',
    component: Login,
    options: { headerShown: false },
  },
  {
    key: 'DrawerNavigation',
    name: 'DrawerNavigation',
    component: DrawerNavigation,
    options: {
      headerShown: false,
    },
  },
  {
    key: 'VersionInfo',
    name: 'VersionInfo',
    component: VersionInfo,
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'ProfileView',
    name: 'ProfileView',
    component: ProfileView,
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'ProfileEdit',
    name: 'ProfileEdit',
    component: ProfileEdit,
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
];

export default routes;
