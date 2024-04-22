import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import UserIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import TextInput from '../../components/elements/input/TextInput';
import i18next from 'i18next';

interface User {
  name: string;
  email: string;
  profileIcon: string;
}

export interface ProfileEditProps {
  route: {
    params: {
      user: User;
    };
  };
  navigation: NavigationProp<ParamListBase>;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ navigation, route }) => {
  const style = useThemedStyles(styles);
  const { user } = route.params;
  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);
  const [profileIcon, setProfileIcon] = useState<string>(user.profileIcon);

  const handleProfileIconChange = (iconName: string) => {
    setProfileIcon(iconName);
  };

  const handleUpdateProfile = () => {
    navigation.goBack();
  };

  return (
    // profileEdit
    <View style={style.container} testID="profileEdit">
      {/* profileImage */}
      <TouchableOpacity
        testID="profileImage"
        onPress={() => handleProfileIconChange('newIconName')}
        // onLongPress={() => console.log('Long pressed')}
        style={style.profileImage}
      >
        <UserIcon name={profileIcon} style={style.profileIcon} />
      </TouchableOpacity>

      {/* name */}
      <View style={style.input}>
        <TextInput testID="name" value={name} onChangeText={setName} placeholder="Name" />
      </View>

      {/* email */}
      <View style={style.input}>
        <TextInput testID="email" value={email} onChangeText={setEmail} placeholder="Email" />
      </View>
      {/* Update Profile */}
      <TouchableOpacity testID="button" style={style.button} onPress={handleUpdateProfile}>
        <Text style={style.buttonText}>{i18next.t('TEMP00028')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileEdit;
