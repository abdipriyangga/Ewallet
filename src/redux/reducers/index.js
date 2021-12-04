import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import profile from './profile';
import topup from './topup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};
const reducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  profile,
  topup,
});

export default reducers;
