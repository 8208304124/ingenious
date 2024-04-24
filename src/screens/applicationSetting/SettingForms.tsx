import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import TextInput from '../../components/elements/input';
import Text from '../../components/elements/text';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import useLanguage from '../../utility/hooks/useLanguage';
import i18next from 'i18next';
import Switch_ from '../../components/elements/switch/Switch';
import { langList } from '../../constants';
import ScreenFooter from '../../components/common/screenFooter/ScreenFooter';
import LanguageChange from './component/LanguageChange';

// SettingForm
const SettingForm: React.FC = () => {
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const translate = useLanguage();
  i18next.t(translate);
  const handleLangFun = (selectedValue: { value: string }) => {
    translate.changeLanguage(selectedValue.value);
  };

  const [serviceURL, setServiceURL] = useState<string>('');
  const [port, setPort] = useState<string>('');

  // resetForm
  const resetForm = () => {
    setServiceURL('');
    setPort('');
  };

  return (
    // container
    <SafeAreaView style={style.container}>
      {/* formContainer */}
      <ScrollView contentContainerStyle={style.formContainer}>
        <View>
          {/* ServiceURL */}
          <View style={style.commonStyle}>
            <TextInput
              testID={'ServiceURL'}
              placeholder={i18next.t('TEMP00029')}
              value={serviceURL}
              onChangeText={setServiceURL}
            />
          </View>
          {/* port */}
          <View style={style.commonStyle}>
            <TextInput
              testID={'port'}
              placeholder={i18next.t('TEMP00030')}
              value={port}
              onChangeText={setPort}
            />
          </View>

          {/* language */}
          <View style={style.language}>
            <LanguageChange
              placeholder={i18next.t('TEMP00031')}
              options={langList}
              onSelect={handleLangFun}
            />
          </View>

          {/* theme */}
          <View style={style.theme}>
            <View>
              <Text style={style.themeText}>
                {i18next.t('TEMP00032')}
                {/* Dark Theme */}
              </Text>
            </View>
            <View style={style.themeSwitch}>
              <Switch_
                testID={'switch'}
                onValueChange={theme.toggleTheme}
                value={!theme.isLightTheme}
                style={style.switchStyle}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <ScreenFooter
        showButtons={true}
        buttonsOptions={{
          buttons: [
            {
              title: 'Cancel',
              type: 'outline',
              onPress: () => {
                resetForm();
              },
            },
            {
              title: 'Done',
              onPress: () => {
                //
              },
            },
          ],
        }}
      />
    </SafeAreaView>
  );
};

export default SettingForm;
