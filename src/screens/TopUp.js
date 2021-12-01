import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
const TopUp = () => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textHead}>Top Up</Text>
      </View>
      <View style={styles.wrapMenu}>
        <View style={styles.row}>
          <TouchableOpacity style={{ marginHorizontal: 60 }}>
            <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>
              Instant Top Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 60 }}>
            <Text style={{ fontSize: 15, color: '#222', fontWeight: 'bold' }}>
              Metode Lain
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ padding: 20, backgroundColor: '#fff' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000' }}>
            Top Up ke
          </Text>
          <View style={styles.boxTopupBalance}>
            <View style={styles.row}>
              <View
                style={{
                  backgroundColor: '#6604c2',
                  width: 40,
                  height: 25,
                  alignItems: 'center',
                  borderRadius: 5,
                  marginHorizontal: 20,
                  marginVertical: 15,
                }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>ODO</Text>
              </View>
              <View>
                <View style={{ marginTop: 5 }}>
                  <Text style={{ fontWeight: 'bold' }}>ODO Cash</Text>
                </View>
                <View style={styles.row}>
                  <Text>Balance Rp.</Text>
                  <Text>50000</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{ padding: 20, backgroundColor: '#fff', marginVertical: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000' }}>
            Pilih Nominal Top Up
          </Text>
          <View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                <Text>Rp.100.000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>Rp.200.000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>Rp.500.000</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontSize: 12 }}>
                Atau masukkan nominal top up di sini
              </Text>
              <View style={{ marginTop: -10 }}>
                <Input placeholder="Minimal Rp.10.000" />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{ padding: 20, backgroundColor: '#fff', marginVertical: 0 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#000' }}>
            Kartu Debit
          </Text>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              backgroundColor: '#eee',
              width: 200,
              height: 100,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#13c6dc',
              borderWidth: 1,
              borderRadius: 10,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="card-outline"
                size={35}
                style={{ color: '#13c6dc' }}
              />
              <Icon
                name="add-circle"
                size={20}
                style={{
                  position: 'absolute',
                  marginTop: 20,
                  marginLeft: 20,
                  color: '#13c6dc',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnTopup}>
            <Text style={styles.textBtn}>Top Up Sekarang</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default TopUp;
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
  },
  wrapText: {
    width: '50%',
    alignContent: 'center',
    marginVertical: 40,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 8,
    marginLeft: 30,
  },
  button: {
    top: 0,
    marginHorizontal: '3%',
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
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
  boxTopupBalance: {
    padding: 10,
    backgroundColor: '#fff',
    width: '90%',
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
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
  wrapMenu: {
    backgroundColor: '#6604c2',
  },
  btnTopup: {
    top: 0,
    marginHorizontal: '8%',
    width: 340,
    height: 80,
    backgroundColor: '#13c6dc',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
});
