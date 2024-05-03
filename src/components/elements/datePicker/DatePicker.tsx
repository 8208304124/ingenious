import { Platform, Text, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../../../components/elements/button/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useLanguage from '../../../utility/hooks/useLanguage';
import i18next from 'i18next';
import styles from './styles';

const DatePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>('Empty');
  const style = useThemedStyles(styles);
  const translate = useLanguage();
  i18next.t(translate);

  const onChange = (event: unknown, selectDate?: Date) => {
    const currentDate = selectDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const temDate = new Date(currentDate);
    const fDate = temDate.getDate() + '/' + (temDate.getMonth() + 1) + '/' + temDate.getFullYear();

    setText(fDate + '\n');
  };

  const showMode = (currentMode: 'date') => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <Text style={style.textStyle}>{text}</Text>
      <View style={{ margin: 20 }}>
        <Button title="Select Date" onPress={() => showMode('date')} />
      </View>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
