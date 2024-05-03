import React, { useRef } from 'react';
import { Animated, Dimensions, FlatList, ImageProps, View, Image } from 'react-native';
import styles from './styles';
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
import useThemedStyles from '../../utility/hooks/useThemedStyles';
import { commonStyles } from '../../assets/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenFooter from '../../components/common/screenFooter/ScreenFooter';
import Paginator from '../../components/common/carousel/Paginator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useTheme from '../../utility/hooks/useTheme';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type DashboardProps = {
  navigation: NavigationProp<ParamListBase>;
};
interface CarouselItem {
  id: number;
  image: ImageProps;
}

const DashBoard = ({ navigation }: DashboardProps) => {
  const style = useThemedStyles(styles);
  const scrollX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const carouselItemWidth = screenWidth - 20;
  const carouselItemHeight = screenHeight / 4;
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const theme = useTheme();

  const scrollToNextItem = (index: number) => {
    const nextIndex = index + 1;
    if (nextIndex <= 3) {
      flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
    } else {
      // handle else here
    }
  };

  const carouselData: CarouselItem[] = [
    { id: 1, image: require('../../assets/images/discountBanner.png') },
    { id: 2, image: require('../../assets/images/discountBanner.png') },
    { id: 3, image: require('../../assets/images/discountBanner.png') },
    { id: 4, image: require('../../assets/images/discountBanner.png') },
  ];

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => (
    <TouchableOpacity
      testID={'Carousel_Btn'}
      style={[style.carouselTap, { width: carouselItemWidth }]}
      onPress={() => scrollToNextItem(index)}
      activeOpacity={1}
    >
      <Image
        testID={'Carousel_IMG'}
        style={{ width: carouselItemWidth, height: carouselItemHeight }}
        resizeMode="stretch"
        source={item.image}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[commonStyles.Flex1]}>
      <View
        style={[
          style.container,
          {
            padding: theme.shape.padding.L,
          },
        ]}
      >
        <View style={style.carousel}>
          <FlatList
            style={{ width: carouselItemWidth }}
            data={carouselData}
            ref={flatListRef}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={true}
            scrollEventThrottle={20}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
          />
        </View>
        <View
          style={[
            commonStyles.AlignItemsCenter,
            commonStyles.JustifyContentFlexCenter,
            {
              marginTop: theme.shape.margin.S,
            },
          ]}
        >
          <Paginator data={carouselData} scrollX={scrollX} />
        </View>
      </View>

      <ScreenFooter
        showBottomNavigation={true}
        bottomNavigationOptions={{
          icons: [
            {
              label: 'filter',
              icon: 'filter',
              vector: true,
              useRippleEffect: false,
              onPress: () => {
                navigation.navigate('Dummy');
                //
              },
            },
            {
              label: 'Upload',
              icon: 'cloud-upload',
              vector: true,
              useRippleEffect: false,
              onPress: () => {
                //
                navigation.navigate('Upload');
              },
            },
            {
              label: 'Gift',
              icon: 'gift',
              vector: true,
              // showButton: true,
              useRippleEffect: false,
              onPress: () => {
                //
                navigation.navigate('Gift');
              },
            },
            {
              label: 'Chat',
              icon: 'chatbubbles-sharp',
              vector: true,
              // showButton: true,
              useRippleEffect: false,
              onPress: () => {
                //
                navigation.navigate('Chat');
              },
            },
          ],
        }}
      />
    </SafeAreaView>
  );
};

export default DashBoard;
