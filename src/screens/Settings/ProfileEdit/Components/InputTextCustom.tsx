import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput, View } from 'react-native';

interface InputTextCustomType {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  placeholder?: string;
}

function InputTextCustom({
  label,
  value,
  onChangeText,
  multiline = false,
  numberOfLines = 1,
  placeholder = 'Enter text here',
}: InputTextCustomType) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={[styles.input]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
      />
    </View>
  );
}

export default InputTextCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: '#50C878',
    borderRadius: 7,
  },
  input: {
    padding: 0,
    fontSize: 16,
    marginTop: 5,
    height: 'auto',
    fontWeight: '500',
    textAlignVertical: 'top',
  },
  labelText: {
    color: '#757575',
    fontSize: 12,
  },
});
