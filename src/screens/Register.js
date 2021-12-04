import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import { Register as registerAction } from '../redux/actions/auth';
const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const form = {
    name: name,
    email: email,
    password: password,
    phone_number: phone_number,
  };
  const onSubmit = () => {
    dispatch(registerAction(form, navigation));
  };
  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> Register </Text>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formInput}>
            <Input
              value={name}
              onChangeText={val => setName(val)}
              keyboardType="default"
              placeholder="enter your fullname"
              variant="underlined"
            />
            <Input
              value={email}
              onChangeText={val => setEmail(val)}
              keyboardType="email-address"
              placeholder="enter your email address"
              variant="underlined"
            />
            <Input
              value={password}
              onChangeText={val => setPassword(val)}
              placeholder="enter your password"
              variant="underlined"
              color="#000"
              secureTextEntry
            />
            <Input
              value={phone_number}
              onChangeText={val => setPhoneNumber(val)}
              keyboardType="number-pad"
              placeholder="enter your phone number"
              variant="underlined"
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.textBtn}> Create Account </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
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
    fontSize: 50,
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
    top: 0,
    marginHorizontal: '3%',
    width: 340,
    height: 80,
    backgroundColor: '#6604c2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
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
