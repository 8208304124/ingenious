import React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import MyProfile from '../Settings/MyProfile/MyProfile';
import HeaderLeft from '../../routes/Headers/HeaderLeft';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ProfileEdit from '../Settings/ProfileEdit/ProfileEdit';
export type BottomNavTabsProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MyProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: '#4169E1',
        headerTitleStyle: { fontSize: 24, fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="MyProfileMain"
        component={Settings}
        options={{
          headerBackground: () => <View style={{ flex: 1, backgroundColor: '#F7F8FA' }} />,
          headerBackVisible: true,
          headerLeft: () => <View style={{ paddingLeft: 10 }}></View>,
          headerRight: () => (
            <HeaderRight
              showNotification={true}
              showShare={false}
              showWhiteNotify
              showHeaderForPadding
            />
          ),
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitleText}>My Profile</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          headerBackground: () => <View style={{ flex: 1, backgroundColor: '#F7F8FA' }} />,
          headerLeft: () => <HeaderLeft />,
          headerRight: () => (
            <HeaderRight
              showNotification={true}
              showShare={false}
              showWhiteNotify
              showHeaderForPadding
            />
          ),
          headerTitle: () => (
            <View
              style={[styles.headerTitleContainer, { marginLeft: Platform.OS == 'ios' ? 15 : 25 }]}
            >
              <Text style={styles.headerTitleText}>My Profile</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="MyProfileEdit"
        component={ProfileEdit}
        options={{
          headerBackground: () => <View style={{ flex: 1, backgroundColor: '#F7F8FA' }} />,
          headerLeft: () => <HeaderLeft />,
          headerRight: () => (
            <HeaderRight
              showNotification={true}
              showShare={false}
              showWhiteNotify
              showHeaderForPadding
            />
          ),
          headerTitle: () => (
            <View
              style={[styles.headerTitleContainer, { marginLeft: Platform.OS == 'ios' ? 15 : 25 }]}
            >
              <Text style={styles.headerTitleText}>My Profile</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default function BottomNavTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#50C878',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        headerTitleAlign: 'left',
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
        name="Course"
        component={Books}
        options={{
          headerRight: () => <HeaderRight showNotification={true} showShare={false} />,
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
        name="My Learning"
        component={Video}
        options={{
          headerBackgroundContainerStyle: { backgroundColor: '#F7F8FA' },
          headerRight: () => (
            <HeaderRight showNotification={true} showShare={false} showWhiteNotify />
          ),
          tabBarIcon: ({ color, size }) => (
            <EntypoWithBack
              name={'play-circle'}
              size={size + 15}
              color={'white'}
              backgroundColor={color == '#50C878' ? color : '#4169E1'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Wishlist"
        component={Favourite}
        options={{
          headerBackgroundContainerStyle: { backgroundColor: '#F7F8FA' },
          headerRight: () => (
            <HeaderRight showNotification={true} showShare={false} showWhiteNotify />
          ),
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
        name="My Profiles"
        component={MyProfileStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (color == '#50C878' ? <ColorPerson /> : <Person />),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  headerTitleText: { color: '#4169E1', fontSize: 24, fontWeight: '700' },
});
