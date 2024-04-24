import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import useThemedStyles from '../../../../utility/hooks/useThemedStyles';
import TextInput from '../../input';
import useLanguage from '../../../../utility/hooks/useLanguage';
// import { useKeyboard } from '../../../../hooks';
import i18next from 'i18next';
import { Theme } from '@react-navigation/native';

interface Option {
  [key: string]: unknown;
}

interface Props {
  changeModalVisibility: (visible: boolean) => void;
  onChange: (selected: Option[]) => void;
  options: Option[];
  label: string;
  descLabel: string;
  id: string;
  choseData: Option[];
  modalTitle?: string;
  showSearch?: boolean;
  loadMore?: () => void;
}

const ModelRadioPicker: React.FC<Props> = ({ modalTitle = '', showSearch = true }) => {
  const translate = useLanguage();
  i18next.t(translate);
  // const keyboardStatus = useKeyboard();
  const width = Dimensions.get('window').width;
  const styles = useThemedStyles(style);
  const [searchText] = useState<string>('');

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.header}>
        <Text style={styles.title}> {i18next.t(modalTitle)}</Text>
        {showSearch && (
          <View style={styles.search}>
            <TextInput
              placeholder="MPOSL00105"
              icon="search-outline"
              // onChange={onSearch}
              value={searchText}
              iconAlling="right"
            />
          </View>
        )}
      </View>

      <View style={[styles.modal, { width: width }]}>
        {/* <InfiniteScroll
          data={filterItem}
          renderData={renderItem}
          keyExtractor={(item, i) => i.toString()}
          loadMore={loadMore}
        /> */}
      </View>

      {/* <ScreenFooter
        showBottomNavigation={!keyboardStatus}
        showAppFooter={!keyboardStatus}
        bottomNavigationOptions={{
          icons: icons,
        }}
      /> */}
    </SafeAreaView>
  );
};

export default ModelRadioPicker;

const style = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.BACKGROUND,
    },
    modal: {
      flex: 1,
      // backgroundColor: theme.colors.BACKGROUND,
      borderRadius: 10,
      alignSelf: 'center',
    },
    search: {
      // flex:1,
      marginHorizontal: 16,
      height: 50,
    },
    singleItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      marginHorizontal: 16,
      // fontSize: theme.typography.size.S,
      borderBottomWidth: theme.shape.borderWidth.M,
      borderColor: theme.colors.BORDER,
    },
    title: {
      // fontSize: theme.typography.size.M,
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
      // fontSize: theme.typography.size.S,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      padding: 16,
      bottom: 0,
      backgroundColor: theme.colors.BACKGROUND,
    },
    itemContainer: {
      // borderBottomWidth: 1,
      // borderColor: theme.colors.BORDER,
      flex: 1,
    },
  });
