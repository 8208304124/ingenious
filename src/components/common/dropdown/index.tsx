import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles } from '../../../assets/commonStyles';
import Language from 'react-native-vector-icons/FontAwesome';
import Drop from 'react-native-vector-icons/Ionicons';
import useTheme from '../../../utility/hooks/useTheme';

interface optionsType {
  id: number;
  value: string;
  label: string;
}

interface DropdownProps {
  options: optionsType[];
  onSelect: (value: optionsType) => void;
  placeholder: string;
  dropdownStyle?: object;
  iconStyle?: object;
  textStyle?: object;
}

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder,
  dropdownStyle,
  iconStyle,
  textStyle,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<optionsType | null>(null);
  const theme = useTheme();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (option: optionsType) => {
    setSelectedOption(option);
    setDropdownVisible(false);
    onSelect(option);
  };

  return (
    <View style={[commonStyles.PosRel, commonStyles.FlexDirectionRow]}>
      <Language
        name="language"
        color={theme.colors.TEXT}
        style={[styles.languageIcon, iconStyle]}
      />
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[
          commonStyles.DFlex,
          commonStyles.FlexDirectionRow,
          commonStyles.AlignItemsCenter,
          commonStyles.zIndex9,
        ]}
      >
        <Text style={[{ color: theme.colors.TEXT }, textStyle]}>
          {selectedOption?.label || placeholder}
        </Text>

        <Drop
          onPress={toggleDropdown}
          style={[
            styles.dropIcon,
            {
              color: theme.colors.TEXT,
            },
          ]}
          name="caret-down-sharp"
          size={theme.typography.size.SR}
        />
      </TouchableOpacity>

      {isDropdownVisible && (
        <View
          style={[
            styles.dropdownList,
            commonStyles.PosAbs,
            commonStyles.w100,
            commonStyles.zIndex9,
            {
              backgroundColor: theme.colors.BACKGROUND,
              shadowColor: theme.colors.SHADOW,
            },
            dropdownStyle,
          ]}
        >
          {options.map((option: optionsType, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option)}
              style={[styles.dropdownItem]}
            >
              <Text style={[{ color: theme.colors.TEXT }, textStyle]}>{option?.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdownList: {
    paddingLeft: 28,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
    top: 33,
  },
  dropdownItem: {
    paddingBottom: 10,
    borderBottomWidth: 0.2,
    paddingTop: 2,
  },
  languageIcon: {
    width: 20,
    height: 20,
    marginLeft: 9,
    marginTop: 9,
  },
  dropIcon: {
    marginRight: 5,
    marginTop: 2,
    position: 'absolute',
    marginLeft: 95,
  },
});

export default CustomDropdown;
