import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

export const Register = (data, navigation) => {
  return async dispatch => {
    dispatch({ type: 'SET_REGISTER', payload: true });
    const form = new URLSearchParams();
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('password', data.password);
    form.append('phone_number', data.phone_number);
    try {
      const { data: newData } = await http().post(
        `${API_URL}/auth/register`,
        form,
      );
      dispatch({ type: 'SET_REGISTER', payload: false });
      console.log('Ini data  form: ', newData);
      // FlashMessage('Register Success!', 'success');
      ToastAndroid.show('Register Success!', ToastAndroid.SHORT);
      navigation.navigate('Login');
    } catch (err) {
      // FlashMessage(err?.response?.newData?.message, 'danger');
      ToastAndroid.show(err?.response?.data?.message, ToastAndroid.SHORT);
      dispatch({ type: 'SET_REGISTER', payload: false });
    }
  };
};

export const Login = data => {
  return async dispatch => {
    dispatch({ type: 'SET_LOGIN', payload: true });
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const { data: newData } = await http().post(
        `${API_URL}/auth/login`,
        form,
      );
      dispatch({ type: 'GET_TOKEN', payload: newData.results.token });
      dispatch({ type: 'SET_LOGIN', payload: false });
      console.log(newData);
      ToastAndroid.show('Login Success!', ToastAndroid.SHORT);
    } catch (err) {
      // FlashMessage(err?.response?.data?.message);
      ToastAndroid.show(err?.response?.data?.message, ToastAndroid.SHORT);
      dispatch({ type: 'SET_LOGIN', payload: false });
    }
  };
};

export const authLogout = () => {
  return async dispatch => {
    dispatch({ type: 'SET_AUTH_LOGOUT' });
    dispatch({ type: 'SET_CLEAR_HISTORY' });
    dispatch({ type: 'CLEAR_CHAT' });
  };
};

export const registerToken = (authToken, notifToken) => {
  return async dispatch => {
    const form = new URLSearchParams({ token: notifToken });
    if (authToken) {
      const { data } = await http(authToken).post(
        `${API_URL}/auth/registerToken`,
        form,
      );
    }
    dispatch({ type: 'AUTH_REGISTER_TOKEN', payload: notifToken });
  };
};
