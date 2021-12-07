import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const History = props => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textHead}>History</Text>
      </View>
      <ScrollView>
        <View />
      </ScrollView>
    </>
  );
};

export default History;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6604c2',
    padding: 10,
    flexDirection: 'row',
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  icon: {
    color: '#fff',
    marginTop: 10,
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
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  btnEdit: {
    top: 0,
    marginHorizontal: '8%',
    width: 340,
    height: 80,
    backgroundColor: '#13c6dc',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000a0',
  },
  wrapperModal: {
    backgroundColor: '#fff',
    height: 130,
    justifyContent: 'center',
    paddingLeft: 30,
  },
});
