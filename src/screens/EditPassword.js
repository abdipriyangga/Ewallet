import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InputTrx from '../components/InputTrx';
import { useDispatch, connect } from 'react-redux';
import { getProfile, changePassword } from '../redux/actions/profile';
const EditPassword = props => {
  const [oldPassword, setOldPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const { token } = props.auth;
  const formData = {
    oldPassword: oldPassword,
    newPassword: newPassword,
  };

  const onSubmit = () => {
    if (oldPassword.length < 1) {
      ToastAndroid.show('old password must be filled', ToastAndroid.SHORT);
    } else if (oldPassword.length < 6) {
      ToastAndroid.show(
        'minimum password length must be 6 characters at least',
        ToastAndroid.SHORT,
      );
    } else if (oldPassword.length > 12) {
      ToastAndroid.show(
        'maximum password length is 12 characters',
        ToastAndroid.SHORT,
      );
    } else if (rePassword.length < 1) {
      ToastAndroid.show('password must be filled', ToastAndroid.SHORT);
    } else if (rePassword.length < 6) {
      ToastAndroid.show(
        'minimum password length must be 6 characters at least',
        ToastAndroid.SHORT,
      );
    } else if (rePassword.length > 12) {
      ToastAndroid.show(
        'maximum password length is 12 characters',
        ToastAndroid.SHORT,
      );
    } else if (rePassword !== newPassword) {
      ToastAndroid.show("password doesn't match", ToastAndroid.SHORT);
    } else if (newPassword.length < 1) {
      ToastAndroid.show('password must be filled', ToastAndroid.SHORT);
    } else if (newPassword.length < 6) {
      ToastAndroid.show(
        'minimum password length must be 6 characters at least',
        ToastAndroid.SHORT,
      );
    } else if (newPassword.length > 12) {
      ToastAndroid.show('maximum password length is 12 characters');
    } else {
      dispatch(changePassword(token, formData, props.navigation));
      dispatch({ type: 'GET_TOKEN', payload: null });
      props.navigation.reset({ index: 0, routes: [{ name: 'GetStarted' }] });
    }
  };
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textHead}>Edit Password</Text>
      </View>
      <View style={{ padding: 10, marginTop: 30 }}>
        {/* Update Name */}
        <View style={{ padding: 20, marginTop: -30 }}>
          <View style={{ marginTop: 5, padding: 5 }}>
            <Text style={{ fontSize: 12 }}>Old Password</Text>
          </View>
          <View style={{ marginTop: -28 }}>
            <InputTrx
              value={oldPassword}
              onChangeText={e => setOldPassword(e)}
            />
          </View>
        </View>
        {/* Update Nomor HP */}
        <View style={{ padding: 20, marginTop: -30 }}>
          <View style={{ marginTop: 5, padding: 5 }}>
            <Text style={{ fontSize: 12 }}>New Password</Text>
          </View>
          <View style={{ marginTop: -28 }}>
            <InputTrx
              value={newPassword}
              onChangeText={e => setNewPassword(e)}
            />
          </View>
        </View>
        {/* Update Email */}
        <View style={{ padding: 20, marginTop: -30 }}>
          <View style={{ marginTop: 5, padding: 5 }}>
            <Text style={{ fontSize: 12 }}>Re - new password</Text>
          </View>
          <View style={{ marginTop: -28 }}>
            <InputTrx value={rePassword} onChangeText={e => setRePassword(e)} />
          </View>
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.btnEdit}>
          <Text style={styles.textBtn}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});
const mapDispatchToProps = {
  getProfile,
  changePassword,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPassword);
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
