import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { commonStyles } from '../../../assets/commonStyles';
import useTheme from '../../../utility/hooks/useTheme';
import styles from './styles';
import useThemedStyles from '../../../utility/hooks/useThemedStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import i18next from 'i18next';

interface OptionType {
  id: string;
  value: string;
  label: string;
}

interface DropdownProps {
  options: OptionType[];
  onSelect: (value: OptionType) => void;
  placeholder: string;
  dropdownStyle?: object;
  iconStyle?: object;
  textStyle?: object;
}

const SelectOption: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const theme = useTheme();
  const style = useThemedStyles(styles);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option: OptionType) => {
    setSelectedOption(option);
    setModalVisible(false);
    onSelect(option);
  };

  const { width, height } = Dimensions.get('window');

  return (
    <View style={[commonStyles.PosRel, commonStyles.FlexDirectionRow]}>
      <TouchableOpacity onPress={toggleModal} style={[style.boxStyle]}>
        <Text style={[{ color: theme.colors.PLACEHOLDER, fontSize: theme.typography.size.S }]}>
          {selectedOption ? selectedOption.label : i18next.t('UNIFY00024')}
        </Text>
        <Icon
          name="chevron-down-outline"
          size={theme.shape.icon.S}
          color={theme.colors.PLACEHOLDER}
        />
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={style.container}>
          <View style={[style.modal, { width: width - 100, maxHeight: height - 100 }]}>
            {options.map((option: OptionType, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionSelect(option)}
                style={[style.dropdownItem]}
              >
                <Text style={{ color: theme.colors.TEXT }}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SelectOption;
