import { StyleSheet, View } from 'react-native';
import Text from '../../elements/text';
import { moderateScale } from 'react-native-size-matters';
import React from 'react';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useLanguage from '../../../utility/hooks/useLanguage';
import { ThemeType } from '../../../utility/interfaces/themeInterfaces/ThemeInterfaces';
import useTheme from '../../../utility/hooks/useTheme';

export interface SummaryOptions {
  labelLeft: string;
  amountLeft: string;
  labelRight: string;
  amountRight: string;
  summaryBackgroundColor?: string;
}

interface Props {
  barcodeFooter: boolean;
  summaryOptions: SummaryOptions;
}

const SummaryFooter: React.FC<Props> = ({ barcodeFooter, summaryOptions }) => {
  const theme = useTheme();
  const {
    labelLeft = '',
    amountLeft = '',
    labelRight = '',
    amountRight = '',
    summaryBackgroundColor = theme.colors.SUMMARY_VIEW_BACKGROUND,
  } = summaryOptions;
  const style = useThemedStyles(styles);
  const { t } = useLanguage();

  return (
    <View style={[style.container, { backgroundColor: summaryBackgroundColor }]}>
      {barcodeFooter && Object.keys(summaryOptions).length !== 0 ? (
        <>
          <View>
            <Text style={style.amount}>{t(labelLeft)}</Text>
            <Text style={style.amount}>{amountLeft}</Text>
          </View>

          <View>
            <Text
              style={{
                ...style.amountGreen,
                ...{
                  textAlign: 'right',
                },
              }}
            >
              Savings :<Text style={{ ...style.amountGreen }}>{t(labelRight)}</Text>
            </Text>

            <Text
              style={{
                ...style.amount,
                ...{
                  textAlign: 'right',
                },
              }}
            >
              {amountRight}
            </Text>
          </View>
        </>
      ) : (
        <>
          <View>
            <Text style={style.label}>{t(labelLeft)}</Text>
            <Text style={style.amount}>{amountLeft}</Text>
          </View>
          <View>
            <Text
              style={{
                ...style.label,
                ...{
                  textAlign: 'right',
                },
              }}
            >
              {t(labelRight)}
            </Text>
            <Text
              style={{
                ...style.amount,
                ...{
                  textAlign: 'right',
                },
              }}
            >
              {amountRight}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
    label: {
      // color: theme.colors.SUMMARY_HEADING,
      color: theme.colors.SUMMARY_AMOUNT,
      fontSize: moderateScale(theme.typography.size.XS),
      fontWeight: 'bold',
    },
    amount: {
      color: theme.colors.SUMMARY_AMOUNT,
      fontSize: moderateScale(theme.typography.size.SR),
      fontWeight: 'bold',
      marginTop: 5,
    },
    rightTextColor: { color: theme.colors.TEXT_SUCCESS },
    amountGreen: {
      color: '#55EA28',
      fontSize: moderateScale(theme.typography.size.SR),
      fontWeight: 'bold',
      marginTop: 5,
    },
  });

export default SummaryFooter;
