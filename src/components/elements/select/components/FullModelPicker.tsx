import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import useThemedStyles from '../../../../utility/hooks/useThemedStyles';
import TextInput from '../../input';
import CustomCheckbox from '../../checkbox';
import arrObjectSearch from '../../../../utility/validations/arrObjectSearch';
import { t } from 'i18next';
import ScreenFooter from '../../../common/screenFooter/ScreenFooter';
import { Theme } from '@react-navigation/native';

interface Option {
  [key: string]: unknown;
}

interface Props {
  changeModalVisibility: (visibility: boolean) => void;
  onChange: (selected: Option[]) => void;
  options: Option[];
  label: string;
  descLabel: string;
  id: string;
  choseData: Option[];
}

const FullModelPicker = ({
  changeModalVisibility,
  onChange,
  options,
  label,
  descLabel,
  id,
  choseData,
}: Props) => {
  const [selected, setSelected] = useState<Option[]>([...choseData]);
  const width = Dimensions.get('window').width;
  const styles = useThemedStyles(style);
  const [filterItem, setFilterItem] = useState<Option[]>(options);
  const [searchText, setSearchText] = useState<string>('');

  const onPressItem = (el: Option) => {
    const elIndex = indexInSelected(el);
    const preSelected = selected;
    if (elIndex === -1) {
      preSelected.push(el);
    } else {
      preSelected.splice(elIndex, 1);
    }
    setSelected([...preSelected]);
  };

  const indexInSelected = (el: Option) => {
    return selected.findIndex((option) => option[id] == el[id]);
  };

  const isSelected = (el: Option) => {
    return indexInSelected(el) !== -1;
  };

  const onSearch = (text: string) => {
    setSearchText(text);
    setFilterItem([...arrObjectSearch(options, text)]);
  };

  const renderItem = ({ item }: { item: Option }) => {
    return (
      <TouchableOpacity key={item[id]} style={styles.singleItem} onPress={() => onPressItem(item)}>
        <View>
          <Text style={styles.name}>{item[label]}</Text>
          <Text style={styles.description}>{item[descLabel]}</Text>
        </View>
        <CustomCheckbox value={isSelected(item)} onChange={() => onPressItem(item)} label={''} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('MPOSL00158')}</Text>
        <View style={styles.search}>
          <TextInput
            placeholder="MPOSL00105"
            icon="search-outline"
            onChange={onSearch}
            value={searchText}
            iconAlling="right"
          />
        </View>
      </View>

      <View style={[styles.modal, { width: width }]}>
        <FlatList
          data={filterItem}
          renderItem={renderItem}
          keyExtractor={(item, i) => {
            return i.toString();
          }}
        />
      </View>

      <ScreenFooter
        showBottomNavigation={true}
        showButtons={true}
        showAppFooter={false}
        buttonsOptions={{
          buttons: [
            {
              title: 'MPOSL00097',
              type: 'outline',
              onPress: () => changeModalVisibility(false),
            },
            {
              title: 'MPOSL00098',
              onPress: () => {
                onChange([...selected]);
                changeModalVisibility(false);
              },
            },
          ],
        }}
      />
    </SafeAreaView>
  );
};

export default FullModelPicker;

const style = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
    },
    modal: {
      alignSelf: 'center',
      // paddingBottom: 170,
      flex: 1,
    },
    search: {
      marginHorizontal: 16,
      height: 50,
    },

    singleItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      marginHorizontal: 16,
      fontSize: theme.typography.size.S,
      borderBottomWidth: theme.shape.borderWidth.M,
      borderColor: theme.colors.BORDER,
    },
    title: {
      fontSize: theme.typography.size.M,
      color: theme.colors.TEXT,
      fontWeight: 'bold',
      padding: 16,
      paddingBottom: 10,
    },
    header: {
      backgroundColor: theme.colors.BACKGROUND,
      borderBottomWidth: theme.shape.borderWidth.M,
      paddingBottom: 10,
      borderBottomColor: '#91919145',
    },
    description: {
      marginTop: 3,
      color: 'gray',
    },
    name: {
      color: theme.colors.TEXT,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      paddingHorizontal: 16,
      paddingBottom: 10,
      bottom: 0,
      backgroundColor: theme.colors.BACKGROUND,
    },
  });
