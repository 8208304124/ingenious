import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { navigate } from '../../../routes/RootNavigation';
import Notification from 'react-native-vector-icons/SimpleLineIcons';

interface HeaderRightProps {
  showNotification: boolean | undefined;
  showShare: boolean | undefined;
  showWhiteNotify?: boolean | undefined;
  showHeaderForPadding?: boolean | undefined;
}

const HeaderRight: React.FC<HeaderRightProps> = ({
  showNotification = true,
  showShare = false,
  showWhiteNotify = false,
  showHeaderForPadding = false,
}) => {
  const handleHomePress = () => {
    navigate('Home');
  };
  return (
    <View style={[styles.container, { marginRight: showHeaderForPadding ? 10 : 25 }]}>
      {showShare && (
        <TouchableOpacity style={styles.icon} onPress={handleHomePress}>
          <Feather size={20} name="share-2" color={'#4169E1'} />
        </TouchableOpacity>
      )}
      {showNotification && (
        <TouchableOpacity
          style={[
            styles.NotificationIcon,
            { backgroundColor: showWhiteNotify ? 'white' : '#eaeaea' },
          ]}
        >
          <Notification
            name="bell"
            size={20}
            color={'#4169E1'}
            // onPress={fetchNotifications}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  icon: {},
  NotificationIcon: {
    padding: 8,
    borderRadius: 30,
  },
});
