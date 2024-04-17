/* eslint-disable @typescript-eslint/no-explicit-any */
import DrawerNavigation from '../components/common/customDrawer/DrawerNavigation';
import Login from '../screens/login/Login';
import VersionInfo from '../screens/VersionInfo/VersionInfo';
import ProfileView from '../screens/ProfileView/ProfileView';
import ProfileEdit from '../screens/ProfileEdit/ProfileEdit';
import Filter from '../screens/Filter';
import Upload from '../screens/Upload';
import Gift from '../screens/Gift';
import Chat from '../screens/Chat';
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
  {
    key: 'Filter',
    name: 'Filter',
    component: Filter, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
      headerTitleAlign: 'center',
    },
  },
  {
    key: 'Upload',
    name: 'Upload',
    component: Upload, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
      headerTitleAlign: 'center',
    },
  },
  {
    key: 'Gift',
    name: 'Gift',
    component: Gift, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
      headerTitleAlign: 'center',
    },
  },
  {
    key: 'Chat',
    name: 'Chat',
    component: Chat, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
      headerTitleAlign: 'center',
    },
  },
];

export default routes;
