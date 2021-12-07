import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

export const getHistory = token => {
  return async dispatch => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data: newData } = await http().get(`${API_URL}/transaction`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('newedata: ', newData);
      dispatch({ type: 'SET_HISTORY', payload: newData.results });
    } catch (err) {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };
};
