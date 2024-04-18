import { View } from 'react-native';
import React from 'react';
import Text from '../../components/elements/text';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import i18next from 'i18next';

const Upload = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.UploadText}>{i18next.t('TEMP00024')}</Text>
    </View>
  );
};

export default Upload;
