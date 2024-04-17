import DrawerNavigation from '../components/common/customDrawer/DrawerNavigation';
import Login from '../screens/login/Login';
import VersionInfo from '../screens/VersionInfo/VersionInfo';
import ProfileView from '../screens/ProfileView/ProfileView';
import ProfileEdit from '../screens/ProfileEdit/ProfileEdit';
import ApplicationSetting from '../screens/applicationSetting';

const routes = [
  {
    key: 'Login',
    name: 'Login',
    component: Login, // done
    options: { headerShown: false },
  },
  {
    key: 'DrawerNavigation',
    name: 'DrawerNavigation',
    component: DrawerNavigation, // done
    options: {
      headerShown: false,
    },
  },
  {
    key: 'VersionInfo',
    name: 'VersionInfo',
    component: VersionInfo, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'ProfileView',
    name: 'ProfileView',
    component: ProfileView, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'ProfileEdit',
    name: 'ProfileEdit',
    component: ProfileEdit, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
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
];

export default routes;
