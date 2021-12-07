import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

export const transfer = (data, token, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('phoneRecipient', data.phone);
    form.append('deductedBalance', data.balance);
    form.append('transactionFee', data.transactionFee);
    dispatch({ type: 'SET_TRANSFER_SUCCESS', payload: true });
    try {
      const { data: newData } = await http(token).post(
        `${API_URL}/transfer`,
        form,
      );
      dispatch({ type: 'SET_TRANSFER_SUCCESS', payload: false });
      console.log(newData);
      ToastAndroid.show('Transfer Success!', ToastAndroid.SHORT);
      navigation.navigate('Home');
    } catch (err) {
      // FlashMessage(err?.response?.data?.message);
      ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
      dispatch({ type: 'SET_TRANSFER_FAILED', payload: false });
    }
  };
};
