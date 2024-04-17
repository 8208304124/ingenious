import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import i18next from 'i18next';
import ModelPicker from './components/ModelPicker';
import FullModelPicker from './components/FullModelPicker';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import useTheme from '../../../utility/hooks/useTheme';
import styles from './styles';

interface Option {
  [key: string]: unknown;
}

interface Props {
  testID: string;
  placeholder?: string;
  choseData: unknown[];
  onChange: (data: unknown) => void;
  label: string;
  descLabel?: string;
  options: Option[];
  onClick?: () => void;
  id?: string;
  type?: 'checkboxSelect' | 'radioSelect' | 'short';
  disabled?: boolean;
}

const Select: React.FC<Props> = ({
  testID,
  placeholder = 'select',
  choseData,
  onChange,
  label,
  descLabel,
  options,
  onClick = () => {
    //
  },
  id,
  type = 'short',
  disabled = false,
}) => {
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);

  const changeModalVisibility = (bool: boolean) => {
    setShowModal(bool);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity
        testID={testID}
        style={style.touchableOpacity}
        onPress={() => {
          onClick();
          if (!disabled) {
            changeModalVisibility(true);
          }
        }}
      >
        {type === 'checkboxSelect' ? (
          <Text style={choseData.length > 0 ? style.text : style.placeholder}>
            {choseData.length > 0
              ? `${choseData[0][label]} ${
                  choseData.length > 1 ? '+ ' + (choseData.length - 1) : ''
                }`
              : i18next.t(placeholder)}
          </Text>
        ) : type === 'radioSelect' ? (
          <Text style={choseData.length > 0 ? style.text : style.placeholder}>
            {choseData.length > 0 ? `${choseData[0][label]}` : i18next.t(placeholder)}
          </Text>
        ) : (
          <Text style={choseData ? style.text : style.placeholder}>
            {choseData ? choseData[label] : i18next.t(placeholder)}
          </Text>
        )}

        <Icon
          name="chevron-down-outline"
          size={theme.shape.icon.S}
          color={theme.colors.PLACEHOLDER}
        />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={showModal}
        onRequestClose={() => changeModalVisibility(false)}
      >
        {type === 'checkboxSelect' ? (
          <FullModelPicker
            onChange={onChange}
            options={options}
            changeModalVisibility={changeModalVisibility}
            label={label}
            descLabel={descLabel}
            choseData={choseData}
            id={id}
          />
        ) : (
          <ModelPicker
            changeModalVisibility={changeModalVisibility}
            onChange={onChange}
            options={options}
            label={label}
          />
        )}
      </Modal>
    </View>
  );
};

export default Select;
