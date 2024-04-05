import React from 'react';
import { View, TextStyle } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

interface LoaderProps {
  loading: boolean;
  textContent?: string;
  textStyle?: TextStyle;
}

const Loader: React.FC<LoaderProps> = ({ loading, textContent = '', textStyle = {} }) => {
  return (
    <View>
      {loading && (
        <Spinner visible={loading} textContent={textContent || ''} textStyle={textStyle || {}} />
      )}
    </View>
  );
};

export default Loader;
