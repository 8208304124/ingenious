import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import TextInput from '../../components/elements/input';
import Text from '../../components/elements/text';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import useLanguage from '../../utility/hooks/useLanguage';
import i18next from 'i18next';
import SelectOption from '../../components/elements/select/SelectOption';
import Switch_ from '../../components/elements/switch/Switch';
import { langList, payment } from '../../constants';
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
  const [macId, setMacId] = useState<string>('');

  // resetForm
  const resetForm = () => {
    setServiceURL('');
    setPort('');
    setMacId('');
  };

  return (
    // container
    <SafeAreaView style={style.container}>
      {/* formContainer */}
      <ScrollView contentContainerStyle={style.formContainer}>
        <View>
          <View style={style.row3}>
            {/* serviceUrl */}
            <View style={style.serviceUrl}>
              <TextInput
                testID={'ServiceURL'}
                placeholder={i18next.t('UNIFY00021')}
                value={serviceURL}
                onChangeText={setServiceURL}
              />
            </View>
            <Text style={style.colon}>:</Text>

            {/* servicePort */}
            <View style={style.servicePort}>
              <TextInput
                testID={'port'}
                placeholder={i18next.t('UNIFY00022')}
                value={port}
                onChangeText={setPort}
                maxLength={4}
              />
            </View>
          </View>

          {/* macId */}
          <View style={style.macId}>
            <TextInput
              testID={'macId'}
              placeholder={i18next.t('UNIFY00023')}
              value={macId}
              onChangeText={setMacId}
            />
          </View>

          {/* payment */}
          <View style={style.payment}>
            <SelectOption
              placeholder={i18next.t('UNIFY00024')}
              options={payment}
              onSelect={handleLangFun}
            />
          </View>

          {/* language */}
          <View style={style.language}>
            <LanguageChange
              placeholder={i18next.t('UNIFY00025')}
              options={langList}
              onSelect={handleLangFun}
            />
          </View>

          {/* theme */}
          <View style={style.theme}>
            <View>
              <Text style={style.themeText}>
                {i18next.t('Theme')}
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
