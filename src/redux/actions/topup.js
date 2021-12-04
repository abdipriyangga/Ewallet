import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

export const topup = (data, token, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('topupBalance', data.balance);
    form.append('transactionFee', data.transactionFee);
    console.log('data balance: ', data.balance);
    console.log('data trxFee: ', data.transactionFee);
    dispatch({ type: 'SET_TOPUP_SUCCESS', payload: true });
    try {
      const { data: newData } = await http(token).post(
        `${API_URL}/topup`,
        form,
      );
      dispatch({ type: 'SET_TOPUP_SUCCESS', payload: false });
      console.log(newData);
      ToastAndroid.show('Topup Success!', ToastAndroid.SHORT);
      navigation.navigate('Home');
    } catch (err) {
      // FlashMessage(err?.response?.data?.message);
      ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
      dispatch({ type: 'SET_TOPUP_FAILED', payload: false });
    }
  };
};
