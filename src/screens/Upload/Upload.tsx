import { View } from 'react-native';
import React from 'react';
import Text from '../../components/elements/text';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';

const Upload = () => {
  const style = useThemedStyles(styles);
  return (
    <View style={style.container}>
      <Text style={style.UploadText}>Upload</Text>
    </View>
  );
};

export default Upload;
