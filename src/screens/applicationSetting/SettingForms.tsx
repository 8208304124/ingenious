import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import TextInput from '../../components/elements/input';
import Text from '../../components/elements/text';
import useTheme from '../../utility/hooks/useTheme';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import useLanguage from '../../utility/hooks/useLanguage';
import i18next from 'i18next';
import Select from '../../components/elements/select';
import Switch_ from '../../components/elements/switch/Switch';
import { langList, payment } from '../../constants';
import ScreenFooter from '../../components/common/screenFooter/ScreenFooter';
import LanguageChange from './component/LanguageChange';

interface CompanyInfo {
  CompanyID?: string;
  Division?: string;
  Warehouse?: string;
  counterNumber?: string;
}

interface ServerInfo {
  ServiceUrl?: string;
  ServicePort?: string;
  MacId?: string;
  PaymentMode?: string;
  language?: string;
}

interface Props {
  navigation: unknown;
  CompanyInfo: CompanyInfo;
  setCompanyInfo: React.Dispatch<React.SetStateAction<CompanyInfo>>;
  ServerInfo: ServerInfo;
  setServerInfo: React.Dispatch<React.SetStateAction<ServerInfo>>;
  disableForm: boolean;
}

const SettingFormView: React.FC<Props> = () => {
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

  const resetForm = () => {
    setServiceURL('');
    setPort('');
    setMacId('');
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.formContainer}>
        <View>
          <View style={style.row3}>
            <View style={style.serviceUrl}>
              <TextInput
                testID={'ServiceURL'}
                placeholder={i18next.t('UNIFY00021')}
                value={serviceURL}
                onChangeText={setServiceURL}
              />
            </View>
            <Text style={style.colon}>:</Text>
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

          <View style={style.macId}>
            <TextInput
              testID={'MacId'}
              placeholder={i18next.t('UNIFY00023')}
              value={macId}
              onChangeText={setMacId}
            />
          </View>

          <View style={style.payment}>
            <Select
              testID={'paymentMode'}
              placeholder={i18next.t('UNIFY00024')}
              options={payment}
              label="label"
            />
          </View>

          <View style={style.language}>
            <LanguageChange
              testID={'languages'}
              placeholder={i18next.t('UNIFY00025')}
              options={langList}
              onSelect={handleLangFun}
              label="label"
            />
          </View>

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

export default SettingFormView;
