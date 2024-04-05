import React, { useEffect } from 'react';
import { Text, View, BackHandler } from 'react-native';
import { styles } from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';
import i18next from 'i18next';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useTheme from '../../../utility/hooks/useTheme';
import useLanguage from '../../../utility/hooks/useLanguage';

interface ButtonProps {
  testID?: string;
  title: string;
  onPress?: () => void;
  type?: 'default' | 'outline' | 'text';
  color?: 'white' | 'primary';
  addonOutlineStyle?: object;
  addonOutlineTextStyle?: object;
  addonPrimaryStyle?: object;
  addonPrimaryTextStyle?: object;
  addonTextStyle?: object;
  antIcon?: boolean;
  backHandler?: boolean;
}

export default function Button_({
  testID,
  title,
  onPress = () => {
    /*default params */
  },
  type = 'default',
  color = 'white',
  addonOutlineStyle = {},
  addonOutlineTextStyle = {},
  addonPrimaryStyle = {},
  addonPrimaryTextStyle = {},
  addonTextStyle = {},
  antIcon = false,
  backHandler = false,
}: ButtonProps) {
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const translate = useLanguage();
  i18next.t(translate);

  useEffect(() => {
    if (backHandler) {
      BackHandler.addEventListener('hardwareBackPress', () => {
        onPress();
        return true;
      });
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', () => {
          onPress();
          return true;
        });
      };
    }
  }, []);

  if (type === 'outline')
    return (
      <Ripple
        testID={testID}
        rippleColor={theme.colors.PRIMARY}
        style={[style.outline, addonOutlineStyle]}
        onPress={onPress}
      >
        <Text style={[style.outlineText, addonOutlineTextStyle]}>{i18next.t(title)}</Text>
      </Ripple>
    );

  return type === 'text' ? (
    <Ripple
      testID={testID}
      rippleColor={theme.colors.PRIMARY}
      style={style.textButton}
      onPress={onPress}
    >
      <Text
        style={{
          ...style.text,
          color: color == 'primary' ? theme.colors.PRIMARY : theme.colors.TEXT,
          ...addonTextStyle,
        }}
      >
        {i18next.t(title)}
      </Text>
    </Ripple>
  ) : (
    <Ripple
      testID={testID}
      rippleColor={theme.colors.PRIMARY}
      rippleDuration={700}
      onPress={onPress}
      style={[style.button, addonPrimaryStyle]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[style.text, addonPrimaryTextStyle]}>{i18next.t(title)}</Text>
        {antIcon && (
          <AntIcon
            style={{ marginLeft: 2 }}
            name="arrowright"
            size={theme.shape.icon.XS}
            color="#ffffff"
          />
        )}
      </View>
    </Ripple>
  );
}
