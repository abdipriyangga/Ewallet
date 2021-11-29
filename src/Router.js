import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './screens/GetStarted';
import ChooseAuth from './screens/ChooseAuth';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <>
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false, tabBarBadge: 3 }}
          />
          <Stack.Screen
            name="ChooseAuth"
            component={ChooseAuth}
            options={{ headerShown: false, tabBarBadge: 3 }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false, tabBarBadge: 3 }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false, tabBarBadge: 3 }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
