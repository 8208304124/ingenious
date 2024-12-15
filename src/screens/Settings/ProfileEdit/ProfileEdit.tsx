import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './Style';
import InputTextCustom from './Components/InputTextCustom';

function ProfileEdit() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 25 }}>
          <View style={{ flex: 1, marginBottom: 50 }}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                style={styles.imageStyle}
                source={{
                  uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
                }}
              />
              <TouchableOpacity>
                <Text style={styles.profileText}>Edit Profile image</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
              <InputTextCustom label="Name" value="Sia Jerks" onChangeText={() => null} />
              <InputTextCustom
                label="Mobile Number"
                value="+91 9999 999 999"
                onChangeText={() => null}
              />
              <InputTextCustom label="Education" value="B.Tech Cs" onChangeText={() => null} />
              <InputTextCustom label="Email" value="siajerks@gmail.com" onChangeText={() => null} />
              <InputTextCustom
                label="Address"
                value="Baner"
                onChangeText={() => null}
                multiline={true}
                numberOfLines={4}
              />
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default ProfileEdit;
