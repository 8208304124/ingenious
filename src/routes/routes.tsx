/* eslint-disable @typescript-eslint/no-explicit-any */
import Login from '../screens/login/Login';
// import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import i18next from 'i18next';
import SignUp from '../screens/login/SignUp';
import OTPScreen from '../screens/login/OTPScreen';
import BottomNavTabs from '../screens/BottomNavTabs/BottomNavTabs';
import CourseDetails from '../screens/CourseDetails/CourseDetails';
import Checkout from '../screens/CheckoutFlow/Checkout';

// const screenOptions: NativeStackNavigationOptions = {
//   headerShadowVisible: false,
//   headerTitleAlign: 'center',
// };
const routes = [
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
    key: 'CourseDetails',
    name: 'CourseDetails',
    component: CourseDetails,
    options: {
      headerShadowVisible: false,
      headerShown: true,
      showNotification: true,
      showShare: true,
      showHeaderRight: true,
      title: 'Course',
    },
  },
  {
    key: 'Checkout',
    name: 'Checkout',
    component: Checkout,
    options: {
      headerShadowVisible: false,
      headerShown: true,
      showNotification: true,
      showShare: false,
      showHeaderRight: true,
      title: 'Checkout',
    },
  },
];

export default routes;
