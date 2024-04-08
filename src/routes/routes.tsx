import Login from '../screens/login/Login';
import DashBoard from '../screens/DashBoard';

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
];

export default routes;
