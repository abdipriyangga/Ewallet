import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

export const getProfile = token => {
  return async dispatch => {
    dispatch({ type: 'SET_GET_PROFILE', payload: true });
    try {
      const { data } = await http(token).get(`${API_URL}/user`);
      console.log('newedata: ', data);
      dispatch({ type: 'SET_GET_PROFILE', payload: data.results });
    } catch (err) {
      dispatch({ type: 'SET_GET_PROFILE', payload: false });
    }
  };
};

export const updateProfile = (
  name,
  email,
  phone,
  images,
  token,
  navigation,
) => {
  return async dispatch => {
    const form = new FormData();
    const limitSize = 2 * 1040 * 1040;
    if (images) {
      if (images.size > limitSize) {
        ToastAndroid.show('Sorry! File to large', ToastAndroid.SHORT);
      }
    }
    try {
      if (name.length < 4) {
        ToastAndroid.show(
          'minimal name at least must be 4 characters',
          ToastAndroid.SHORT,
        );
      } else if (name.length > 25) {
        ToastAndroid.show('maximal name is 25 characters', ToastAndroid.SHORT);
      } else if (!email.includes('@')) {
        ToastAndroid.show('Invalid email format', ToastAndroid.SHORT);
      } else if (!phone.startsWith('08')) {
        ToastAndroid.show(
          'phone number must start with 08',
          ToastAndroid.SHORT,
        );
      } else if (phone.length < 10) {
        ToastAndroid.show(
          'minimum phone number length at least must be 10',
          ToastAndroid.SHORT,
        );
      } else if (phone.length > 12) {
        ToastAndroid.show(
          'maximum phone number length is 12',
          ToastAndroid.SHORT,
        );
      } else {
        form.append('name', name);
        form.append('email', email);
        form.append('phone_number', phone);
        form.append('images', images);
        const { data } = await http(token).patch(`${API_URL}/user`, form);
        dispatch({
          type: 'SET_UPDATE_USER_PROFILE',
          payload: ToastAndroid.show(data.message, ToastAndroid.SHORT),
        });
        dispatch(getProfile(token));
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      }
    } catch (error) {
      return ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
    }
  };
};
