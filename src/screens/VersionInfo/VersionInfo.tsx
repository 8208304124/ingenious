import React, { useState } from 'react';
import { Text, ScrollView, SafeAreaView, TextInput, View } from 'react-native';
import styles from './styles';
import useLanguage from '../../utility/hooks/useLanguage';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import i18next from 'i18next';

const VersionInfo: React.FC = () => {
  const style = useThemedStyles(styles);
  const translate = useLanguage();
  i18next.t(translate);
  const [productVersion, setProductVersion] = useState('V5.5 R10 SP4');
  const [releaseDate, setReleaseDate] = useState('22-02-2023');
  const [buildNo, setBuildNo] = useState('0.28.0');
  const [buildDate, setBuildDate] = useState('22-02-2023');

  return (
    // versionInfo
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text style={style.header} testID="header_VersionIfo">
          {i18next.t('UNIFY00010')}
        </Text>
        {/* inputContainer */}
        <View>
          {/* Product Version */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00006')}</Text>
            <TextInput
              testID="productVersion"
              style={style.input}
              value={productVersion}
              onChangeText={setProductVersion}
            />
          </View>

          {/* Release Date */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00007')}</Text>
            <TextInput
              testID="releaseDate"
              style={style.input}
              value={releaseDate}
              onChangeText={setReleaseDate}
            />
          </View>

          {/* Build No */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00008')}</Text>
            <TextInput
              testID="buildNo"
              style={style.input}
              value={buildNo}
              onChangeText={setBuildNo}
            />
          </View>

          {/* Build Date */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00009')}</Text>
            <TextInput
              testID="buildDate"
              style={style.input}
              value={buildDate}
              onChangeText={setBuildDate}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VersionInfo;
