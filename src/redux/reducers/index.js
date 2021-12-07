import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import profile from './profile';
import topup from './topup';
import transfer from './transfer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};
const reducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  profile,
  topup,
  transfer,
});

export default reducers;
