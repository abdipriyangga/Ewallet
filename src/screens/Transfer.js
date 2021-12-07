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

const Transfer = props => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textHead}>TRANSFER</Text>
      </View>
      <View style={styles.wrapMenu}>
        <View style={styles.row}>
          <TouchableOpacity style={{ marginHorizontal: 60 }}>
            <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>
              Penerima Baru
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 60 }}>
            <Text
              style={{ fontSize: 15, color: '#c0c0c0', fontWeight: 'bold' }}>
              Favorit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* Transfer ke sesama ODO */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TrxSame')}
          style={styles.boxTransfer}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="phone-portrait-sharp"
                size={30}
                style={{ color: '#13c6dc' }}
              />
              <View style={{ marginTop: 5, marginLeft: 10 }}>
                <Text style={{ fontWeight: '500', color: '#000' }}>
                  Ke Sesama ODO
                </Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-forward-outline" size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* Transfer ke Rekening Bank */}
        <TouchableOpacity style={styles.boxTransfer}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="card-sharp" size={30} style={{ color: '#13c6dc' }} />
              <View style={{ marginTop: 5, marginLeft: 10 }}>
                <Text style={{ fontWeight: '500', color: '#000' }}>
                  Ke Rekening Bank
                </Text>
              </View>
            </View>
            <View>
              <Icon name="chevron-forward-outline" size={30} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Transfer;
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
  boxTransfer: {
    padding: 20,
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
    borderRadius: 5,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
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
