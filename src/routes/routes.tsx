import DrawerNavigation from '../components/common/customDrawer/DrawerNavigation';

import Login from '../screens/login';

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
];

export default routes;
