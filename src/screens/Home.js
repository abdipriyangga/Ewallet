import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Console, Invest, More, Phone, Promo, Thunder, Tv } from '../assets';
const Home = props => {
  return (
    <>
      <StatusBar backgroundColor="#5d04b0" animated={true} />
      <View style={styles.header}>
        <Text style={styles.textHead}>ODO</Text>
        <TouchableOpacity>
          <Icon name="notifications" size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.wrapBalance}>
          <Text style={styles.textBalance}>ODO Cash</Text>
          <View style={styles.balance}>
            <Text style={{ fontSize: 12, color: '#fff', fontWeight: '500' }}>
              Rp
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '700',
                marginLeft: 3,
              }}>
              50000
            </Text>
          </View>
          <View style={styles.balance}>
            <Text style={styles.textBalance}>ODO Points</Text>
            <Text
              style={{
                color: '#bf9000',
                fontWeight: '900',
                marginTop: 8,
                marginLeft: 4,
              }}>
              100
            </Text>
          </View>
        </View>
        {/* Fitur */}
        <View style={styles.boxFitur}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TopUp')}
            style={{ marginHorizontal: 35, marginTop: 3 }}>
            <View style={styles.circle}>
              <Icon size={25} name="add-outline" style={{ color: '#6604c2' }} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#6604c2' }}>
              Top Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Transfer')}
            style={{ marginHorizontal: 35, marginTop: 3 }}>
            <View style={styles.circle}>
              <Icon
                size={25}
                name="arrow-up-outline"
                style={{ color: '#6604c2' }}
              />
            </View>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#6604c2' }}>
              Transfer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 35, marginTop: 3 }}>
            <View style={styles.circle}>
              <Icon
                size={25}
                name="timer-outline"
                style={{ color: '#6604c2' }}
              />
            </View>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#6604c2' }}>
              History
            </Text>
          </TouchableOpacity>
        </View>
        {/* Buying */}
        <View style={styles.boxBuying}>
          <View style={styles.row}>
            <TouchableOpacity style={{ marginHorizontal: 25, marginTop: 3 }}>
              <View>
                <Image source={Thunder} style={{ width: 30, height: 30 }} />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>
                PLN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 25, marginTop: 3 }}>
              <View>
                <Image source={Phone} style={{ width: 30, height: 30 }} />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>
                Pulsa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 25, marginTop: 3 }}>
              <View>
                <Image
                  source={Console}
                  style={{ width: 30, height: 30, marginLeft: 8 }}
                />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>
                Games
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 25, marginTop: 3 }}>
              <View>
                <Image
                  source={Invest}
                  style={{ width: 30, height: 30, marginLeft: 8 }}
                />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>
                Invest
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={{ marginHorizontal: 25, marginTop: 3 }}>
              <View>
                <Icon
                  name="newspaper"
                  size={30}
                  style={{ width: 30, height: 30, color: '#cc0000' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#222',
                }}>
                Kredit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10, marginTop: 3 }}>
              <View>
                <Image
                  source={Tv}
                  style={{ width: 30, height: 30, marginLeft: 8 }}
                />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>
                Internet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 28, marginTop: 3 }}>
              <View>
                <Icon
                  name="umbrella"
                  size={30}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                    color: '#6604c2',
                  }}
                />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>
                Proteksi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 3 }}>
              <View>
                <Image
                  source={More}
                  style={{ width: 30, height: 30, marginLeft: 8 }}
                />
              </View>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#222' }}>
                Lainnya
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Promo dan Info */}
        <View style={styles.boxPromo}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
              Info dan Promo Spesial
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 12, fontWeight: '500', color: '#18d7ea' }}>
                Lihat semua
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={Promo}
            style={{ width: 350, height: 150, marginTop: 10 }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6604c2',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapText: {
    width: '50%',
    alignContent: 'center',
    marginVertical: 40,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    top: 20,
    marginHorizontal: '3%',
    width: 340,
    height: 80,
    backgroundColor: '#6604c2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
  },
  icon: {
    color: '#fff',
    marginTop: 10,
  },
  balance: {
    flexDirection: 'row',
  },
  wrapBalance: {
    backgroundColor: '#6604c2',
    padding: 10,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 150,
  },
  textBalance: {
    color: '#fff',
    fontWeight: '500',
    marginVertical: 7,
    fontSize: 12,
  },
  boxFitur: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    width: '90%',
    height: 80,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginTop: -30,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  circle: {
    alignItems: 'center',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#6604c2',
    borderRadius: 20,
    marginLeft: 10,
  },
  boxBuying: {
    padding: 10,
    backgroundColor: '#fff',
    width: '90%',
    height: 150,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginTop: 15,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  boxPromo: {
    padding: 10,
    backgroundColor: '#fff',
    width: '90%',
    height: 200,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    marginTop: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
