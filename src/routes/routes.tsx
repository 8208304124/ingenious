import DashBoard from '../screens/DashBoard/DashBoard';
import Login from '../screens/login/Login';
import VersionInfo from '../screens/VersionInfo/VersionInfo';
import ProfileView from '../screens/ProfileView/ProfileView';
import ProfileEdit from '../screens/ProfileEdit/ProfileEdit';

const routes = [
  {
    key: 'login',
    name: 'login',
    component: Login, // done
    options: { headerShown: false },
  },
  {
    key: 'DashBoard',
    name: 'DashBoard',
    component: DashBoard, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
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
];

export default routes;
