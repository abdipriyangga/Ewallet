/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Modal,
} from 'react-native';
import { DefaultUser } from '../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import InputTrx from '../components/InputTrx';
import { useDispatch, connect } from 'react-redux';
import { getProfile, updateProfile } from '../redux/actions/profile';
import { API_URL } from '@env';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { ToastAndroid } from 'react-native';
const EditProfile = props => {
  const { profile } = props.profile;
  const { token } = props.auth;
  const dispatch = useDispatch();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone_number);
  const [images, setImage] = useState(
    profile.images === null || profile.images === `${API_URL}`
      ? DefaultUser
      : { uri: profile.images },
  );
  useEffect(() => {
    props.getProfile(props.auth.token);
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const addImage = type => {
    setModalVisible(!modalVisible);
    if (type === 'galery') {
      launchImageLibrary(
        { quality: 0.5, maxHeight: 130, maxWidth: 130 },
        response => {
          if (response.didCancel) {
            ToastAndroid.show('You dont choose any image!', ToastAndroid.SHORT);
          } else {
            setImage({ uri: response.assets[0].uri });
            console.log('IMAGES', setImage);
            const dataImage = {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName,
            };
            dispatch({ type: 'SET_IMAGE', payload: dataImage });
            dispatch({ type: 'SET_UPLOAD_STATUS', payload: true });
          }
        },
      );
    } else {
      launchCamera(
        { quality: 0.5, maxHeight: 130, maxWidth: 130 },
        response => {
          if (response.didCancel) {
            ToastAndroid.show('You dont choose any image!', ToastAndroid.SHORT);
          } else {
            setImage({ uri: response?.assets?.uri });
            const dataImage = {
              uri: response?.assets?.uri,
              type: response?.assets?.type,
              name: response?.assets?.fileName,
            };
            dispatch({ type: 'SET_IMAGE', payload: dataImage });
            dispatch({ type: 'SET_UPLOAD_STATUS', payload: true });
          }
        },
      );
    }
  };
  // console.log('IMAGE: ', images.uri);
  const onSubmit = () => {
    dispatch(
      updateProfile(name, email, phone, props.profile, token, props.navigation),
    );
  };
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      {/* Modal Update Image */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.wrapperModal}>
            <TouchableOpacity onPress={() => addImage('galery')}>
              <Text>Choose photo from galery</Text>
            </TouchableOpacity>
            <View style={{ height: 20 }} />
            <TouchableOpacity onPress={() => addImage('take')}>
              <Text>Take a photo</Text>
            </TouchableOpacity>
            <View style={{ height: 20 }} />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={25} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textHead}>Edit Profile</Text>
      </View>
      <ScrollView>
        {/* Foto Profile */}
        <View style={{ padding: 20, marginHorizontal: 10, marginVertical: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={images} style={styles.imageProfile} />
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <Text
                style={{ color: '#13c6dc', fontWeight: 'bold', fontSize: 16 }}>
                Perbarui Foto Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Update Name */}
        <View style={{ padding: 20, marginTop: -30 }}>
          <View style={{ marginTop: 5, padding: 5 }}>
            <Text style={{ fontSize: 12 }}>Nama Lengkap</Text>
          </View>
          <View style={{ marginTop: -28 }}>
            <InputTrx value={name} onChangeText={e => setName(e)} />
          </View>
        </View>
        {/* Update Nomor HP */}
        <View style={{ padding: 20, marginTop: -30 }}>
          <View style={{ marginTop: 5, padding: 5 }}>
            <Text style={{ fontSize: 12 }}>Nomor Ponsel</Text>
          </View>
          <View style={{ marginTop: -28 }}>
            <InputTrx value={phone} onChangeText={e => setPhone(e)} />
          </View>
        </View>
        {/* Update Email */}
        <View style={{ padding: 20, marginTop: -30 }}>
          <View style={{ marginTop: 5, padding: 5 }}>
            <Text style={{ fontSize: 12 }}>Email</Text>
          </View>
          <View style={{ marginTop: -28 }}>
            <InputTrx value={email} onChangeText={e => setEmail(e)} />
          </View>
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.btnEdit}>
          <Text style={styles.textBtn}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});
const mapDispatchToProps = {
  getProfile,
  updateProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
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
