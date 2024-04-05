import React, { useMemo, forwardRef, ForwardedRef } from 'react';
import { TextInput, Pressable, TouchableOpacity, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import i18next from 'i18next';
import useLanguage from '../../../utility/hooks/useLanguage';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useTheme from '../../../utility/hooks/useTheme';
import { SvgProps } from 'react-native-svg';

interface Props extends TextInputProps {
  testID?: string;
  icon?: string | null;
  iconAlling?: 'left' | 'right';
  iconButton?: {
    icon?: string | undefined;
    onPress?: () => void;
    color?: string;
  };
  placeholder: string;
  addOnTextInputStyle?: object;
  onIconPress?: () => void;
  iconStyle?: object;
  isCapitalized?: boolean;
  disabled?: boolean;
  onKeyPress?: () => void;
  svgImage?: {
    image?: React.FC<SvgProps>;
    onPress?: () => void;
  };
  borderColor?: string;
}

function TextInput_(
  {
    testID,
    onChangeText,
    value,
    placeholder,
    keyboardType = 'default',
    onTouchStart = () => {
      //nothing to do here
    },
    icon = null,
    iconAlling = 'left',
    iconButton = {
      icon: undefined,
      onPress: () => {
        //
      },
      color: '#fff',
    },
    onFocus,
    onBlur,
    addOnTextInputStyle = {},
    onIconPress = () => {
      /*default param */
    },
    iconStyle,
    maxLength,
    isCapitalized,
    disabled = false,
    onSubmitEditing,
    onKeyPress = () => {
      //nothing to do here
    },
    svgImage = {
      image: undefined,
      onPress: () => {
        //
      },
    },
    borderColor = '#797C8B4D',
  }: Props,
  ref: ForwardedRef<TextInput>
) {
  const translate = useLanguage();
  i18next.t(translate);
  const style = useThemedStyles(styles);
  const theme = useTheme();
  // const [bg, setBg] = useState('#797C8B4D')
  // handles numeric values
  const valueString = useMemo(() => (value ? value.toString() : ''), [value]);

  // const onFocus = () => {
  //   setBg(theme.colors.BUTTON)
  // }
  // const onBlur = () => {
  //   setBg('#797C8B4D')
  // }

  return (
    <TouchableOpacity onPress={onTouchStart} style={[style.section, { borderColor: borderColor }]}>
      {icon && iconAlling === 'left' && (
        <Icon
          onPress={onIconPress}
          style={[style.icon, { ...iconStyle }]}
          name={icon}
          size={20}
          color={theme.colors.PLACEHOLDER}
        />
      )}
      <TextInput
        testID={testID}
        ref={ref}
        onSubmitEditing={onSubmitEditing}
        onKeyPress={() => onKeyPress()}
        onFocus={onFocus}
        onBlur={onBlur}
        onTouchStart={onTouchStart}
        style={[style.input, addOnTextInputStyle]}
        placeholder={i18next.t(placeholder)}
        onChangeText={onChangeText}
        value={valueString}
        keyboardType={keyboardType}
        autoCapitalize={isCapitalized ? 'characters' : 'none'}
        placeholderTextColor={theme.colors.PLACEHOLDER}
        underlineColorAndroid="transparent"
        maxLength={maxLength}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
      {icon && iconAlling === 'right' && (
        <Icon
          onPress={onIconPress}
          style={[style.icon, { ...iconStyle }]}
          name={icon}
          size={20}
          color={theme.colors.PLACEHOLDER}
        />
      )}
      {iconButton.icon && (
        <Pressable onPress={iconButton.onPress} style={style.iconButton}>
          <Icon style={style.icon} name={iconButton.icon} size={20} color={theme.colors.TEXT} />
        </Pressable>
      )}
      {svgImage.image && (
        <Pressable onPress={svgImage.onPress}>
          <svgImage.image />
        </Pressable>
      )}
    </TouchableOpacity>
  );
}

const ForwardedTextInput = forwardRef<TextInput, Props>(TextInput_);
export default ForwardedTextInput;

// Example Usage

{
  /* <View
  style={{
    flexDirection: 'row',
    paddingHorizontal: 15,
  }}
>
  <TextInput disabled={true} value={} onChange={} />
</View>; */
}
