import React from 'react';

import { StyleSheet, View } from 'react-native';
import IconNavigation, { IconNavigationKProps } from '../botttomNavigation/IconNavigation';
import AppFooter from '../appFooter';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import ButtonFooter, { ButtonFooterProps } from '../buttonFooter/ButtonFooter';
import SummaryFooter, { SummaryOptions } from '../summaryFooter/SummaryFooter';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';
interface Props {
  testID?: string;
  showSummary?: boolean;
  showAppFooter?: boolean;
  showButtons?: boolean;
  showBottomNavigation?: boolean;
  summaryOptions?: SummaryOptions;
  buttonsOptions?: ButtonFooterProps;
  bottomNavigationOptions?: IconNavigationKProps;
  barcodeFooter?: boolean;
}

const ScreenFooter: React.FC<Props> = ({
  testID,
  showSummary = false,
  showAppFooter = false,
  showButtons = false,
  showBottomNavigation = false,
  summaryOptions = {
    labelLeft: '',
    amountLeft: '',
    labelRight: '',
    amountRight: '',
  },
  buttonsOptions = {
    buttons: [
      {
        title: '',
        type: 'default',
        onPress: () => {
          //
        },
        backHandler: false,
        addonOutlineTextStyle: {},
        addonOutlineStyle: {},
        addonPrimaryTextStyle: {},
        addonPrimaryStyle: {},
        antIcon: false,
        showButtonsWithIcon: false,
      },
    ],
  },
  bottomNavigationOptions = {
    icons: [
      {
        backHandler: false,
        onPress: () => {
          //
        },
        vector: false,
        icon: '',
        size: 0,
        useRippleEffect: false,
        label: '',
        showButton: false,
      },
    ],
  },
  barcodeFooter = false,
}) => {
  const styles = useThemedStyles(style);
  return (
    <View testID={testID} style={styles.container}>
      {showSummary && (
        <SummaryFooter barcodeFooter={barcodeFooter} summaryOptions={summaryOptions} />
      )}
      {showButtons && <ButtonFooter buttons={buttonsOptions.buttons} />}
      {showBottomNavigation && <IconNavigation icons={bottomNavigationOptions.icons} />}
      {showAppFooter && <AppFooter />}
    </View>
  );
};

export default ScreenFooter;
const style = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      backgroundColor: theme.colors.SUMMARY_VIEW_BACKGROUND,
    },
  });
};

// Sample Usage

{
  /* <ScreenFooter
        showButtons={true}
        showBottomNavigation={true}
        showSummary={true}
        summaryOptions={{
          labelLeft: 'Products',
          amountLeft: '30.00',
          labelRight: 'Savings',
          amountRight: '100.00',
        }}
        showAppFooter={true}
        buttonsOptions={{
          buttons: [
            {
              title: 'Cancel',
              type: 'outline',
              onPress: () => {
                console.log('outlined called');
              },
            },
            {
              title: 'OK',
              onPress: () => {
                console.log('ok called');
              },
            },
          ],
        }}
        bottomNavigationOptions={{
          icons: [
            {
              label: 'Back',
              icon: 'arrow-back-circle-sharp',
              vector: true,
              useRippleEffect: false,
              onPress: () => {
                //
              },
            },
            {
              label: 'New Cust.',
              icon: 'person-add-outline',
              vector: true,
              useRippleEffect: false,
              onPress: () => {
                //
              },
            },
            {
              label: 'New Cust.',
              icon: 'person-add-outline',
              vector: true,
              // showButton: true,
              useRippleEffect: false,
              onPress: () => {
                //
              },
            },
          ],
        }}
      /> */
}
