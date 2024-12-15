import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Style';
import { navigate } from '../../routes/RootNavigation';

function Checkout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.safeContainer}>
        <View style={{ flex: 1, marginTop: 15, gap: 20 }}>
          <Text style={styles.simpleFontheader}>Order Details</Text>
          <View style={styles.orderInnerContainer}>
            <Image
              resizeMode="cover"
              style={styles.imageStyle}
              source={{
                uri: 'https://img.freepik.com/free-photo/view-professional-handshake-business-people_23-2150917018.jpg?t=st=1734238034~exp=1734241634~hmac=1e95892fd1ccec42d8329ff941f228f37b0a0307149602384bcb6df26e325b20&w=1060',
              }}
            />
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={styles.orderText}>
                Advanced Training Program on Mergers and Acquisition Law
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.orderPrice}>₹12500</Text>
              <Text style={styles.orderSubPrice}>₹23999</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 20, gap: 20, marginBottom: 150 }}>
          <Text style={styles.simpleFontheader}>Summary</Text>
          <View style={styles.summaryContainer}>
            <View style={styles.FlexJustifySpaceCenter}>
              <Text style={styles.summaryTextBold}>Original price</Text>
              <Text style={styles.summaryTextBold}>₹23999</Text>
            </View>
            <View style={styles.FlexJustifySpaceCenter}>
              <View style={styles.FlexAlignCenter}>
                <Text style={styles.summaryTextBold}>Discount </Text>
                <Text style={{ color: '#61636E', fontSize: 12 }}>(50% OFF)</Text>
              </View>
              <Text style={styles.summaryTextBold}>₹11499</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#94F1DE', height: 1 }}></View>
            <View style={styles.FlexJustifySpaceCenter}>
              <Text style={[styles.orderPrice, { fontSize: 14 }]}>TOTAL</Text>
              <Text style={[styles.orderPrice, { fontSize: 18 }]}>₹12500</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'flex-end' }}>
          <Text style={styles.footerPriceText}>₹12500</Text>
          <Text style={styles.smallText}>(incl. taxes)</Text>
        </View>
        <TouchableOpacity style={styles.primaryButton} onPress={() => navigate('MainDashboard')}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '500' }}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Checkout;
