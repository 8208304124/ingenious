import React, { useState } from 'react';
import { Text, ScrollView, SafeAreaView, View } from 'react-native';
import styles from './styles';
import useLanguage from '../../utility/hooks/useLanguage';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import i18next from 'i18next';
import TextInput from '../../components/elements/input/TextInput';

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
        {/* header */}
        <Text style={style.header} testID="header_VersionIfo">
          {i18next.t('UNIFY00016')}
        </Text>
        {/* inputContainer */}
        <View style={style.container}>
          {/* Product Version */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00012')}</Text>
            <View style={style.input}>
              <TextInput
                testID="productVersion"
                value={productVersion}
                onChangeText={setProductVersion}
                placeholder={''}
              />
            </View>
          </View>

          {/* Release Date */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00013')}</Text>
            <View style={style.input}>
              <TextInput
                testID="releaseDate"
                style={style.input}
                value={releaseDate}
                onChangeText={setReleaseDate}
                placeholder={''}
              />
            </View>
          </View>

          {/* Build No */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00014')}</Text>
            <View style={style.input}>
              <TextInput
                testID="buildNo"
                style={style.input}
                value={buildNo}
                onChangeText={setBuildNo}
                placeholder={''}
              />
            </View>
          </View>

          {/* Build Date */}
          <View style={style.inputContainer}>
            <Text style={style.label}>{i18next.t('UNIFY00015')}</Text>
            <View style={style.input}>
              <TextInput
                testID="buildDate"
                style={style.input}
                value={buildDate}
                onChangeText={setBuildDate}
                placeholder={''}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VersionInfo;
