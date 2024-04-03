import React, { useState } from 'react';
import { Text, ScrollView, SafeAreaView, TextInput, View } from 'react-native';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';

const VersionInfo: React.FC = () => {
  const style = useThemedStyles(styles);
  const [productVersion, setProductVersion] = useState('V5.5 R10 SP4');
  const [releaseDate, setReleaseDate] = useState('22-02-2023');
  const [buildNo, setBuildNo] = useState('0.28.0');
  const [buildDate, setBuildDate] = useState('22-02-2023');

  return (
    // versionInfo
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={style.header} testID='header_VersionIfo'>Welcome back! to Mobile Store</Text>
        {/* inputContainer */}
        <View>
          {/* Product Version */}
          <View style={style.inputContainer}>
            <Text style={style.label}>Product Version:</Text>
            <TextInput testID='productVersion'
              style={style.input}
              value={productVersion}
              onChangeText={setProductVersion}
            />
          </View>

          {/* Release Date */}
          <View style={style.inputContainer}>
            <Text style={style.label}>Release Date:</Text>
            <TextInput testID='releaseDate' style={style.input} value={releaseDate} onChangeText={setReleaseDate} />
          </View>

          {/* Build No */}
          <View style={style.inputContainer}>
            <Text style={style.label}>Build No:</Text>
            <TextInput testID='buildNo' style={style.input} value={buildNo} onChangeText={setBuildNo} />
          </View>

          {/* Build Date */}
          <View style={style.inputContainer}>
            <Text style={style.label}>Build Date:</Text>
            <TextInput testID='buildDate' style={style.input} value={buildDate} onChangeText={setBuildDate} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VersionInfo;
