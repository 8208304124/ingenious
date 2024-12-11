/* eslint-disable @typescript-eslint/no-explicit-any */
import DrawerNavigation from '../components/common/customDrawer/DrawerNavigation';
import Login from '../screens/login/Login';
import VersionInfo from '../screens/VersionInfo/VersionInfo';
import ProfileView from '../screens/ProfileView/ProfileView';
import ProfileEdit from '../screens/ProfileEdit/ProfileEdit';
import ApplicationSetting from '../screens/applicationSetting';
import Dummy from '../screens/Dummy';
import Filter from '../screens/Filter';
import Upload from '../screens/Upload';
import Gift from '../screens/Gift';
import Chat from '../screens/Chat';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import i18next from 'i18next';
import SignUp from '../screens/login/SignUp';
import OTPScreen from '../screens/login/OTPScreen';
import BottomNavTabs from '../screens/BottomNavTabs/BottomNavTabs';

type Route = {
  key: React.Key;
  name: string;
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
};

const screenOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerTitleAlign: 'center',
};
const routes: Route[] = [
  {
    key: 'Login',
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
      title: i18next.t('TEMP00001'),
    },
  },
  {
    key: 'SignUp',
    name: 'SignUp',
    component: SignUp,
    options: {
      headerShown: false,
      title: 'SignUp',
    },
  },
  {
    key: 'MainDashboard',
    name: 'MainDashboard',
    component: BottomNavTabs,
    options: {
      headerShown: false,
    },
  },
  {
    key: 'OTPScreen',
    name: 'OTPScreen',
    component: OTPScreen,
    options: {
      headerShown: false,
      title: 'OTPScreen',
    },
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
      ...screenOptions,
      headerShown: true,
      title: i18next.t('TEMP00006'),
    },
  },
  {
    key: 'ProfileView',
    name: 'ProfileView',
    component: ProfileView,
    options: {
      ...screenOptions,
      headerShown: true,
      title: i18next.t('TEMP00022'),
    },
  },
  {
    key: 'ProfileEdit',
    name: 'ProfileEdit',
    component: ProfileEdit,
    options: {
      ...screenOptions,
      headerShown: true,
      title: i18next.t('TEMP00021'),
    },
  },
  {
    key: 'Filter',
    name: 'Filter',
    component: Filter, // done
    options: {
      ...screenOptions,
      headerShown: true,
      title: i18next.t('TEMP00023'),
    },
  },
  {
    key: 'Upload',
    name: 'Upload',
    component: Upload, // done
    options: {
      ...screenOptions,
      headerShown: true,
      title: i18next.t('TEMP00024'),
    },
  },
  {
    key: 'Gift',
    name: 'Gift',
    component: Gift, // done
    options: {
      ...screenOptions,
      headerShown: true,
      title: i18next.t('TEMP00025'),
    },
  },
  {
    key: 'Chat',
    name: 'Chat',
    component: Chat, // done
    options: {
      ...screenOptions,
      headerShown: true,
      title: i18next.t('TEMP00026'),
    },
  },
  {
    key: 'ApplicationSetting',
    name: 'ApplicationSetting',
    component: ApplicationSetting, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'Dummy',
    name: 'Dummy',
    component: Dummy, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
];

export default routes;
