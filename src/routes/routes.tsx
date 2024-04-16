import DrawerNavigation from '../components/common/customDrawer/DrawerNavigation';
import Login from '../screens/login/Login';
import VersionInfo from '../screens/VersionInfo/VersionInfo';
import ProfileView from '../screens/ProfileView/ProfileView';
import ProfileEdit from '../screens/ProfileEdit/ProfileEdit';
import CustomerFilter from '../screens/CustomerFilter';
import Upload from '../screens/Upload';
import Gift from '../screens/Gift';
import Chat from '../screens/Chat';

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
    key: 'CustomerFilter',
    name: 'CustomerFilter',
    component: CustomerFilter, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'Upload',
    name: 'Upload',
    component: Upload, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'Gift',
    name: 'Gift',
    component: Gift, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
  {
    key: 'Chat',
    name: 'Chat',
    component: Chat, // done
    options: {
      headerShown: true,
      headerShadowVisible: false,
    },
  },
];

export default routes;
