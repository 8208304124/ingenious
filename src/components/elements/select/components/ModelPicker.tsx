import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import useThemedStyles from '../../../../utility/hooks/useThemedStyles';
import { Theme } from '@react-navigation/native';

interface Option {
  [key: string]: unknown;
}

interface ModelPickerProps {
  changeModalVisibility: (visible: boolean) => void;
  onChange: (option: Option) => void;
  options: Option[];
  label: string;
}

const ModelPicker: React.FC<ModelPickerProps> = ({ changeModalVisibility, options, label }) => {
  const style = useThemedStyles(styles);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const onPressItem = () => {
    // onChange(el);
    // changeModalVisibility(false);
  };

  const renderedOptions = options.map((el, index) => (
    <TouchableOpacity style={style.option} key={index} onPress={() => onPressItem(el)}>
      <Text style={style.text}>{el[label]}</Text>
    </TouchableOpacity>
  ));

  return (
    <TouchableOpacity style={style.container} onPress={() => changeModalVisibility(false)}>
      <View style={[style.modal, { width: width - 100 }, { maxHeight: height - 100 }]}>
        <ScrollView>{renderedOptions}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default ModelPicker;

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.MODALBG,
    },
    modal: {
      backgroundColor: theme.colors.BACKGROUND,
      borderRadius: theme.shape.borderRadius.S,
      alignSelf: 'center',
    },
    text: {
      padding: 20,
      // fontSize: theme.typography.size.S,
      color: theme.colors.TEXT,
      borderBottomWidth: theme.shape.borderWidth.M,
      borderColor: 'gray',
    },
  });
