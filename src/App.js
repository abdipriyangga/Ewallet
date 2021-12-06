/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';
import { Provider } from 'react-redux';
import reduxConfig from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import PushNotification from 'react-native-push-notification';
const redux = reduxConfig();

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
    redux.store.dispatch({ type: 'REGISTER_TOKEN', payload: token });
  },
});

PushNotification.createChannel({
  channelId: 'general',
  channelName: 'general notification',
});
const App = () => {
  return (
    <>
      <Provider store={redux.store}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
    // <>
    //   <Router />
    // </>
  );
};

export default App;
