import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Profile from '../../../assets/images/header/profile.svg';
import Notification from '../../../assets/images/header/notification.svg';
import DarkNotification from '../../../assets/images/header/DarkNotification.svg';
import { useRoute } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native'; // Import useTheme from @react-navigation/native

interface HeaderRightProps {
  showProfile: boolean | undefined;
}

const HeaderRight: React.FC<HeaderRightProps> = ({ showProfile }) => {
  const route = useRoute();
  const isDashboard = route.name === 'Dashboard';
  const { dark } = useTheme();
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    setTheme(dark);
  }, [dark]);

  const handleNotificationPress = () => {
    // Add your logic here for the press event
  };

  return (
    <View style={styles.container}>
      {isDashboard || theme ? (
        <TouchableOpacity style={styles.singleIcon} onPress={handleNotificationPress}>
          <Notification height={30} width={30} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleNotificationPress}>
          <DarkNotification height={30} width={30} />
        </TouchableOpacity>
      )}
      {showProfile && <Profile height={30} width={30} />}
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  singleIcon: {
    paddingHorizontal: 15,
  },
});
