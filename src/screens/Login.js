import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import { Login as loginAction } from '../redux/actions/auth';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const form = {
    email: email,
    password: password,
  };
  const onSubmit = () => {
    dispatch(loginAction(form));
  };
  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> Login </Text>
        </View>
        <View style={{ width: '80%' }}>
          <Text
            style={{
              fontSize: 16,
              color: '#0d0d14',
              textAlign: 'center',
            }}>
            Silahkan login dengan menggunakan email dan password yang terdaftar!
          </Text>
        </View>
        <View style={styles.formInput}>
          <Input
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            placeholder="enter your email address"
            variant="underlined"
          />
          <Input
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder="enter your password"
            variant="underlined"
            color="#000"
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.textBtn}>Login </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  wrapText: {
    width: '50%',
    alignContent: 'center',
    marginVertical: 40,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0d0d14',
  },
  textSubHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
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
  formInput: {
    padding: 10,
    width: 352,
    marginVertical: 70,
    marginHorizontal: '1%',
  },
  textInput: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    borderColor: '#000',
    marginLeft: 10,
  },
});
