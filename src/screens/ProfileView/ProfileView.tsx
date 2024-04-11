// ProfileView.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import User from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface UserType {
  name: string;
  email: string;
  profileIcon: string;
}

interface ProfileViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const user: UserType = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profileIcon: 'user-large',
};

const ProfileView: React.FC<ProfileViewProps> = ({ navigation }) => {
  const style = useThemedStyles(styles);

  const handleEditProfile = () => {
    navigation.navigate('ProfileEdit', { user });
  };

  return (
    // ProfileView
    <View style={style.container} testID="ProfileView">
      {/* profileImage */}
      <User name={user.profileIcon} style={style.profileImage} testID="profileIcon" />

      {/* name */}
      <Text testID="name" style={style.name}>
        {user.name}
      </Text>

      {/* email */}
      <Text testID="email" style={style.email}>
        {user.email}
      </Text>

      {/* handleEditProfile */}
      <TouchableOpacity testID="button" style={style.button} onPress={handleEditProfile}>
        <Text style={style.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileView;
