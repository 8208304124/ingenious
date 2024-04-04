import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';

interface User {
  name: string;
  email: string;
  profileIcon: string;
}

interface ProfileEditProps {
  route: {
    params: {
      user: User;
    };
  };
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ route }) => {
  const style = useThemedStyles(styles);
  const navigation = useNavigation();
  const { user } = route.params;
  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);
  const [profileIcon, setProfileIcon] = useState<string>(user.profileIcon);

  const handleProfileIconChange = (iconName: string) => {
    setProfileIcon(iconName);
  };

  const handleUpdateProfile = () => {
    const updatedUser: User = { name, email, profileIcon };
    navigation.navigate('ProfileView', { updatedUser });
  };

  return (
    // profileEdit
    <View style={style.container} testID="profileEdit">
      {/* profileImage */}
      <TouchableOpacity
        testID="profileImage"
        onPress={() => handleProfileIconChange('newIconName')}
        onLongPress={() => console.log('Long pressed')}
        style={style.profileImage}
      >
        <UserIcon name={profileIcon} style={style.profileIcon} />
      </TouchableOpacity>

      {/* name */}
      <TextInput
        testID="name"
        style={style.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />

      {/* email */}
      <TextInput
        testID="email"
        style={style.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      {/* Update Profile */}
      <TouchableOpacity testID="button" style={style.button} onPress={handleUpdateProfile}>
        <Text style={style.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileEdit;
