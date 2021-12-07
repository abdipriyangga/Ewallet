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
const ChooseAuth = ({ navigation }) => {
  return (
    <ScrollView vertical={true}>
      <StatusBar backgroundColor="#5d04b0" animated={true} />
      <View style={styles.container}>
        <View style={{ marginTop: '10%' }}>
          <Text style={styles.textHead}> ODO </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textBtn}>Login</Text>
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 16 }}>Atau</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textBtn}>Register</Text>
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
export default ChooseAuth;
