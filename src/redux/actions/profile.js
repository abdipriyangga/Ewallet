import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

export const getProfile = token => {
  console.log('URL Profile: ', API_URL);
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

export const updateProfile = (data, token, images, navigation) => {
  return async dispatch => {
    const form = new FormData();
    const limitSize = 2 * 1040 * 1040;
    if (images) {
      if (images.size > limitSize) {
        ToastAndroid.show('Sorry! File to large', ToastAndroid.SHORT);
      }
    }
    try {
      form.append('name', data.name);
      form.append('email', data.email);
      form.append('phone_number', data.phone);
      form.append('balance', data.balance);
      form.append('images', images);
      const { data: updateData } = await http(token).patch(
        `${API_URL}/user`,
        form,
      );
      dispatch({
        type: 'SET_UPDATE_USER_PROFILE',
        payload: ToastAndroid.show(updateData.message, ToastAndroid.SHORT),
      });
      dispatch(getProfile(token));
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    } catch (error) {
      return ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  };
};
