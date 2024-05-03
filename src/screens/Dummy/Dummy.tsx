import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import Button from '../../components/elements/button/Button';
import styles from './styles';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import DatePicker from '../../components/elements/datePicker/DatePicker';
import Confirm from '../../components/elements/confirm/Confirm';
import KeyboardAvoidingViewCustom from '../../components/common/keyboardAvoidingView/KeyboardAvoidingViewCustom';
import AnimationLoader from '../../components/elements/animationLoder/animationLoder';

const Dummy: React.FC = () => {
  const style = useThemedStyles(styles);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const handleConfirm = () => {
    setShowConfirm(true);
  };

  const handleYesPress = () => {
    setShowConfirm(false);
  };

  const handleNoPress = () => {
    setShowConfirm(false);
  };

  return (
    <View style={style.container}>
      {Platform.OS === 'ios' && <KeyboardAvoidingViewCustom />}
      <Confirm
        showConfirm={showConfirm}
        title="Confirm Title"
        message="Confirmation message with parameters: $# and $#"
        noText="No"
        yesText="Yes"
        onNoPress={handleNoPress}
        onYesPress={handleYesPress}
      />

      <View style={{ marginTop: 20, padding: 20 }}>
        <Button title="Show Confirm" onPress={handleConfirm} />
      </View>
      <View style={{ marginTop: 20 }}>
        <DatePicker />
      </View>
      <AnimationLoader />
    </View>
  );
};

export default Dummy;
