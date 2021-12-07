import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
const windowHeight = Dimensions.get('screen').height;
const GetStarted = ({ navigation }) => {
  return (
    <ScrollView vertical={true}>
      <StatusBar backgroundColor="#5d04b0" animated={true} />
      <View style={styles.container}>
        <View style={{ marginTop: '5%' }}>
          <Text style={styles.textHead}> ODO </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                width: '80%',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 22, color: '#fff', fontWeight: '900' }}>
                Solusi Cerdas Finansial
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '400',
                  textAlign: 'center',
                }}>
                Nikmati berbagai layanan finansial dan kemudahan pembayaran
                dalam genggaman
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ChooseAuth')}>
              <Text style={styles.textBtn}>Lanjutkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#5d04b0',
    height: windowHeight,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    marginHorizontal: '8%',
    marginVertical: '8%',
    width: 340,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#6604c2',
  },
});

export default GetStarted;
