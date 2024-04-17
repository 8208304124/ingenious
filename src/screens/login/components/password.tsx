import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useTheme from '../../../utility/hooks/useTheme';

interface PasswordProps {
  testID?: string;
  password: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

const Password: React.FC<PasswordProps> = ({ testID, password, onChange, placeholder }) => {
  const { passwordVisibility, handlePasswordVisibility } = useTogglePasswordVisibility();

  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [bg, setBg] = useState('transparent');

  const onFocus = () => {
    setBg(theme.colors.INPUT_OUTLINE);
  };

  const onBlur = () => {
    setBg('transparent');
  };

  return (
    <View style={[style.inputContainer, { borderColor: bg }]}>
      <Icon
        style={style.icon}
        name="lock-closed"
        size={theme.shape.icon.S}
        color={theme.colors.PLACEHOLDER}
      />
      <TextInput
        testID={testID}
        onFocus={onFocus}
        onBlur={onBlur}
        style={style.inputField}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.PLACEHOLDER}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry={passwordVisibility}
        value={password}
        enablesReturnKeyAutomatically
        onChangeText={(text) => onChange(text)}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <Icon
          name={passwordVisibility ? 'eye' : 'eye-off'}
          size={theme.shape.icon.S}
          color={theme.colors.PLACEHOLDER}
        />
      </Pressable>
    </View>
  );
};

export default Password;
