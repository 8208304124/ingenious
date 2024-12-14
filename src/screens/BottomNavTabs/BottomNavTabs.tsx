import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../Settings/Settings';
import Books from '../Books/Books';
import FeatherIconwithBack from './Icons/FeatherIconwithBack';
import FeatherIconBook from './Icons/FeatherIconBook';
import EntypoWithBack from './Icons/EntypoWithBack';
import Favourite from '../Favourite/Favourite';
import { scale } from 'react-native-size-matters';
import HeartBackgroundIcon from './Icons/HeartBackgroundIcon';
import Person from '../../assets/images/Person.svg';
import ColorPerson from '../../assets/images/colorPerson.svg';
import Video from '../Video/Video';
import HeaderRight from './Headers/HeaderRight';
import Home from '../Home/Home';
export type BottomNavTabsProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export default function BottomNavTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#50C878',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        headerTitleContainerStyle: { paddingHorizontal: 10 },
        headerTintColor: '#4169E1',
        headerTitleStyle: { fontSize: 24, fontWeight: '700' },
        tabBarStyle: {
          borderWidth: 1,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          borderColor: '#50C878',
          backgroundColor: 'white',
          height: scale(55),
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="VishwaLaw"
        component={Home}
        options={{
          headerRight: () => <HeaderRight showNotification={true} showShare={false} />,
          tabBarIcon: ({ color, size }) => (
            <FeatherIconwithBack
              name={'home'}
              size={size}
              color={'#4169E1'}
              backgroundColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={Books}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FeatherIconBook
              name={'book-open'}
              size={size}
              color={'#4169E1'}
              backgroundColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EntypoWithBack
              name={'play'}
              size={size + 15}
              color={'white'}
              backgroundColor={color == '#50C878' ? color : '#4169E1'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HeartBackgroundIcon
              size={size}
              backgroundColor={color}
              iconColor={'#4169E1'}
              iconName={'heart'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (color == '#50C878' ? <ColorPerson /> : <Person />),
        }}
      />
    </Tab.Navigator>
  );
}
