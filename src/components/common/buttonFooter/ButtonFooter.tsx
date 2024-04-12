import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../../elements/button/Button';

import { moderateScale } from 'react-native-size-matters';
import { isValidArray } from '../../../utility/validations/VariableTypeValidation';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useTheme from '../../../utility/hooks/useTheme';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';

interface ButtonProps {
  title: string;
  type?: 'default' | 'outline' | 'text';
  onPress: () => void;
  backHandler?: boolean;
  addonOutlineTextStyle?: object;
  addonOutlineStyle?: object;
  addonPrimaryTextStyle?: object;
  addonPrimaryStyle?: object;
  antIcon?: boolean;
  showButtonsWithIcon?: boolean;
}

export interface ButtonFooterProps {
  buttons: ButtonProps[];
}
const ButtonFooter: React.FC<ButtonFooterProps> = ({ buttons }) => {
  if (!isValidArray(buttons)) return null;

  const style = useThemedStyles(styles);
  const theme = useTheme();

  const buttonsView = buttons.map((item, i) => {
    // margins if 2 buttons are present
    let marginLeft = 0,
      marginRight = 0;
    if (buttons.length === 2) {
      if (i === 0) marginRight = 8;
      else marginLeft = 8;
    }

    // addon outline text styles
    let addonOutlineTextStyle = {
      fontSize: moderateScale(theme.typography.size.SM),
    };
    if (Object.prototype.hasOwnProperty.call(item, 'addonOutlineTextStyle')) {
      addonOutlineTextStyle = {
        ...addonOutlineTextStyle,
        ...item.addonOutlineTextStyle,
      };
    }

    // addon outline button style
    let addonOutlineStyle = {};
    if (Object.prototype.hasOwnProperty.call(item, 'addonOutlineStyle')) {
      addonOutlineStyle = { ...addonOutlineStyle, ...item.addonOutlineStyle };
    }

    // addon primary text styles
    let addonPrimaryTextStyle = {
      fontSize: moderateScale(theme.typography.size.SM),
    };
    if (Object.prototype.hasOwnProperty.call(item, 'addonPrimaryTextStyle')) {
      addonPrimaryTextStyle = {
        ...addonPrimaryTextStyle,
        ...item.addonPrimaryTextStyle,
      };
    }

    // addon primary button style
    let addonPrimaryStyle = {};
    if (Object.prototype.hasOwnProperty.call(item, 'addonPrimaryStyle')) {
      addonPrimaryStyle = { ...addonPrimaryStyle, ...item.addonPrimaryStyle };
    }

    // addon icons for buttons
    let antIcon = false;
    if (Object.prototype.hasOwnProperty.call(item, 'antIcon')) {
      antIcon = item.antIcon || false; // Setting default to false if antIcon is undefined
    }

    return (
      <View key={i} style={[style.singleButtonContainer, { marginLeft, marginRight }]}>
        <Button
          title={item.title}
          type={item.type}
          onPress={item.onPress}
          backHandler={item.backHandler}
          addonOutlineTextStyle={addonOutlineTextStyle}
          addonOutlineStyle={addonOutlineStyle}
          addonPrimaryTextStyle={addonPrimaryTextStyle}
          addonPrimaryStyle={addonPrimaryStyle}
          antIcon={antIcon}
        />
      </View>
    );
  });

  return <View style={style.buttonContainer}>{buttonsView}</View>;
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    buttonContainer: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginVertical: 10,
      backgroundColor: theme.colors.BACKGROUND,
    },
    singleButtonContainer: { flex: 1, marginHorizontal: 8 },
  });

export default ButtonFooter;
