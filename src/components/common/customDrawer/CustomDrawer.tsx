import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Modal } from 'react-native';
import Text from '../../elements/text';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import Alert from '../../elements/alert';
import { AlertOptionsType } from '../../elements/alert/Alert';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Edit from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-vector-icons/MaterialIcons';
import Gallery from 'react-native-vector-icons/Entypo';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import User from '../../../assets/images/profile-image.svg';
import useTheme from '../../../utility/hooks/useTheme';
import { commonStyles } from '../../../assets/commonStyles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../store/reducers';

export type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

interface UserType {
  name: string;
  email: string;
  profileIcon: string;
}

const user: UserType = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profileIcon: 'user-large',
};
const CustomDrawer = ({ navigation, state, descriptors }: Props) => {
  // const userData = useSelector((state: RootState) => state.auth);
  // console.log('user data from redux', userData);

  const theme = useTheme();

  const [cameraPhoto, setCameraPhoto] = useState<string | undefined>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pickerOptions, setPickerOptions] = useState<boolean>(true);
  const [preview, setPreview] = useState<string | undefined>('');
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const [alertOptions, setAlertOptions] = useState<AlertOptionsType>({
    visible: false,
    title: '',
    message: '',
  });

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      // Navigate to login screen
      navigation.navigate('Login');
    } catch (error) {
      setAlertOptions({
        visible: true,
        title: i18next.t('TEMP00010'),
        message: i18next.t('TEMP00011'),
        // error occurred during logout
      });
    }
  };

  const handleEditProfileImage = () => {
    setModalVisible(true);
  };

  const openCamera = () => {
    setModalVisible(!modalVisible);
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        // console.log('error');
      }
      const result = response.assets?.[0]?.uri;
      const handlePickerOptions = () => {
        setPickerOptions(false);
        setModalVisible(true);
      };
      handlePickerOptions();
      setPreview(result);
      setShowPreview(true);
    });

    //navigation.navigate('ProfileEdit', { user });
  };

  const openGallery = () => {
    setModalVisible(!modalVisible);
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        // console.log('error');
      }
      // console.log('Image selected:', response.assets?.[0]?.uri);
      const result = response.assets?.[0]?.uri;
      const handlePickerOptions = () => {
        setPickerOptions(false);
        setModalVisible(true);
      };
      handlePickerOptions();
      setPreview(result);
      setShowPreview(true);
    });
  };

  const handleOnUpload = () => {
    setModalVisible(!modalVisible);
    setPickerOptions(true);
    setShowPreview(false);
    setCameraPhoto(preview);
  };

  const handleOnCancel = () => {
    setModalVisible(!modalVisible);
    setPickerOptions(true);
    setShowPreview(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND }]}>
      <DrawerContentScrollView
        {...{ navigation, state, descriptors }}
        contentContainerStyle={{ backgroundColor: '#8200d6' }}
      >
        <View style={[styles.topContainer]}>
          <View style={[commonStyles.FlexDirectionRow, commonStyles.JustifyContentFlexSpaceAround]}>
            <View style={commonStyles.FlexDirectionRow}>
              <TouchableOpacity onPress={() => navigation.navigate('ProfileView', { user })}>
                {cameraPhoto ? (
                  <Image
                    style={styles.profileImage}
                    width={65}
                    height={65}
                    source={{ uri: cameraPhoto }}
                  />
                ) : (
                  <User width={65} height={65} />
                )}
              </TouchableOpacity>
              <View style={styles.editButton}>
                <TouchableOpacity
                  style={[commonStyles.JustifyContentFlexEnd, styles.plusIconBtn]}
                  onPress={handleEditProfileImage}
                >
                  <Edit style={styles.plusIcon} name="plus-circle" size={18} color={'#fff'} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[commonStyles.FlexDirectionColumn, styles.userDetails]}>
              <View style={commonStyles.FlexDirectionRow}>
                <View style={styles.profileNameContainer}>
                  <Text style={[styles.textColor, { fontSize: theme.typography.size.M }]}>
                    John Doe
                  </Text>
                </View>
              </View>
              <View style={commonStyles.FlexDirectionRow}>
                <View style={styles.infoContainer}>
                  <Text style={styles.textColor}>280 Coins</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.drawerItemList, { backgroundColor: theme.colors.BACKGROUND }]}>
          <DrawerItemList {...{ navigation, state, descriptors }} />
        </View>
      </DrawerContentScrollView>
      <View style={[styles.bottomContainer, { borderTopColor: theme.colors.ICON }]}>
        <TouchableOpacity style={{ paddingVertical: theme.shape.padding.M }}>
          <View style={[commonStyles.FlexDirectionRow, commonStyles.AlignItemsCenter]}>
            <Ionicons name="settings-outline" size={22} color={theme.colors.ICON} />
            <View style={[styles.bottomContainerText]}>
              <Text style={{ fontSize: theme.typography.size.SR }}>Settings</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={{ paddingVertical: theme.shape.padding.M }}>
          <View style={[commonStyles.FlexDirectionRow, commonStyles.AlignItemsCenter]}>
            <Ionicons name="exit-outline" size={22} color={theme.colors.ICON} />
            <View style={styles.bottomContainerText}>
              <Text>Log Out</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Alert options={alertOptions} setOptions={setAlertOptions} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        style={styles.centeredView}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              { backgroundColor: theme.colors.BACKGROUND, shadowColor: theme.colors.SHADOW },
            ]}
          >
            {pickerOptions && (
              <View>
                <View style={styles.pickerOptions}>
                  <TouchableOpacity onPress={openCamera}>
                    <View style={commonStyles.AlignItemsCenter}>
                      <Camera name="add-a-photo" size={50} color={theme.colors.ICON} />
                    </View>
                    <Text>Take a photo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginLeft: theme.shape.margin.L }}
                    onPress={openGallery}
                  >
                    <View style={commonStyles.AlignItemsCenter}>
                      <Gallery name="images" size={50} color={theme.colors.ICON} />
                    </View>
                    <Text>Upload a photo</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: theme.shape.margin.S }}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.textAlignCenter,
                        { fontSize: theme.typography.size.S, marginTop: theme.shape.margin.M },
                      ]}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View>
              {preview && showPreview ? (
                <View>
                  <Text
                    style={[{ fontSize: theme.typography.size.M }, commonStyles.textAlignCenter]}
                  >
                    Preview
                  </Text>

                  <Image
                    style={{ marginVertical: theme.shape.margin.L }}
                    width={300}
                    height={300}
                    source={{ uri: preview }}
                  />
                  <View
                    style={[
                      commonStyles.FlexDirectionRow,
                      commonStyles.JustifyContentFlexSpaceAround,
                      { marginVertical: theme.shape.margin.S },
                    ]}
                  >
                    <TouchableOpacity style={[styles.modalButtons]} onPress={handleOnCancel}>
                      <Text style={styles.modalText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOnUpload}>
                      <Text style={styles.modalText}>Upload</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemList: {
    flex: 1,
    paddingTop: 10,
  },
  topContainer: {
    padding: 10,
  },
  bottomContainer: {
    padding: 20,
    borderTopWidth: 1,
  },
  bottomContainerText: {
    marginLeft: 5,
  },
  profileNameContainer: {
    marginBottom: 5,
    marginVertical: 5,
  },
  infoContainer: {
    marginRight: 5,
  },
  textColor: {
    color: '#ffffff',
  },
  editButton: {
    flexDirection: 'row',
  },
  pickerOptions: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtons: {
    borderRadius: 5,
  },
  modalText: {
    fontSize: 20,
  },
  userDetails: {
    marginLeft: '15%',
  },
  profileImage: {
    borderRadius: 50,
  },
  plusIconBtn: {
    zIndex: 1,
    right: 20,
    bottom: 1,
  },
  plusIcon: { backgroundColor: '#000', paddingHorizontal: 2, borderRadius: 15 },
});
