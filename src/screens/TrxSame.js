import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import InputTrx from '../components/InputTrx';
import { TextInput } from 'react-native-gesture-handler';
const TrxSame = props => {
  const [value, setValue] = useState('Rp0');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textHead}> KE SESAMA ODO</Text>
      </View>
      <ScrollView>
        {/* Input Phone number */}
        <View style={{ flexDirection: 'row', width: '90%', padding: 10 }}>
          <InputTrx placeholder="Masukkan nama atau nomor ponsel" />
          <View
            style={{
              padding: 10,
              marginVertical: 25,
              width: 50,
              height: 50,
            }}>
            <FaIcon
              name="address-book"
              size={25}
              style={{ color: '#C0C0C0' }}
            />
          </View>
        </View>
        {/* Source Balance */}
        <View style={{ padding: 10 }}>
          <Text>Sumber Dana</Text>
        </View>
        <View style={styles.boxSourceBalance}>
          <View style={styles.row}>
            <View
              style={{
                backgroundColor: '#6604c2',
                width: 40,
                height: 30,
                alignItems: 'center',
                borderRadius: 5,
                marginHorizontal: 20,
                marginVertical: 8,
              }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 3 }}>
                ODO
              </Text>
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
        {/* Nominal Transfer */}
        <View
          style={{
            width: '90%',
            height: 100,
            padding: 10,
            backgroundColor: '#eeeeee',
            marginVertical: 40,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <View style={{ padding: 10 }}>
            <Text style={{ color: '#999999' }}>Nominal Transfer</Text>
          </View>
          <View style={{ marginHorizontal: 5, marginTop: -15 }}>
            <TextInput
              keyboardType="number-pad"
              value={value}
              keyboardAppearance="light"
              style={{ color: '#222', fontSize: 22 }}
              onChangeText={val => setValue(val)}
            />
          </View>
        </View>
        {/* Pesan Opsional */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, marginTop: -30 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                padding: 24,
                flex: 1,
                justifyContent: 'space-around',
              }}>
              <TextInput
                placeholder="pesan opsional"
                style={{
                  width: 350,
                  height: 40,
                  borderColor: isFocused ? '#13c6dc' : '#C0C0C0',
                  borderBottomWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 50,
                }}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <View>
          <TouchableOpacity style={styles.btnTransfer}>
            <Text style={styles.textBtn}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrxSame;
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
  boxSourceBalance: {
    padding: 10,
    backgroundColor: '#fff',
    width: '90%',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginTop: 5,
    borderRadius: 10,
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
    marginVertical: -3,
  },
  wrapMenu: {
    backgroundColor: '#6604c2',
  },
  btnTransfer: {
    marginHorizontal: '8%',
    width: 340,
    height: 80,
    backgroundColor: '#13c6dc',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
});
