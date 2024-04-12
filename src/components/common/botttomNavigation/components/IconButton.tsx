import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import Ripple from 'react-native-material-ripple';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import i18next from 'i18next';
import Text from '../../../elements/text';
import useTheme from '../../../../utility/hooks/useTheme';
import useLanguage from '../../../../utility/hooks/useLanguage';
import useThemedStyles from '../../../../utility/hooks/useThemedStyles';
import { SvgProps } from 'react-native-svg';

interface IconButtonProps {
  el: {
    icon: string;
    size?: number;
    vector?: boolean;
    onPress: () => void;
    backHandler?: boolean;
    useRippleEffect?: boolean;
    label: string;
    svgImage?: React.FC<SvgProps>;
  };
}

const IconButton: React.FC<IconButtonProps> = ({ el }) => {
  const [pressedIcon, setPressedIcon] = useState(false);
  const theme = useTheme();
  const translate = useLanguage();
  i18next.t(translate);
  const style = useThemedStyles(styles);

  useEffect(() => {
    if (el.backHandler) {
      BackHandler.addEventListener('hardwareBackPress', () => {
        el.onPress();
        return true;
      });
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', () => {
          el.onPress();
          return true;
        });
      };
    }
  }, []);

  let Icon: React.ReactNode;

  if (el.vector) {
    Icon = (
      <Ionicons
        color={pressedIcon ? theme.colors.PRIMARY : theme.colors.GRAY_ICON}
        style={style.icon}
        name={el.icon}
        size={el.size ?? theme.shape.icon.L}
      />
    );
  } else if (el.svgImage) {
    const SvgImage = el.svgImage;
    Icon = <SvgImage width={30} height={30} />;
  }

  return (
    <Ripple
      style={[style.iconContainer, style.ripple]}
      rippleColor="#808080"
      rippleDuration={el.icon === 'arrow-back-circle-sharp' || !el.useRippleEffect ? 0 : 700}
      rippleContainerBorderRadius={30}
      onPress={el.onPress}
      onPressIn={() => setPressedIcon(true)}
      onPressOut={() => {
        setTimeout(() => {
          setPressedIcon(false);
        }, 320);
      }}
    >
      {Icon}
      <Text style={style.label}>{i18next.t(el.label)}</Text>
    </Ripple>
  );
};

export default IconButton;
