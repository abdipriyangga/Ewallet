import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStarted from './screens/GetStarted';
import ChooseAuth from './screens/ChooseAuth';
import Login from './screens/Login';
import Register from './screens/Register';
import ButtonTab from './components/BottomTab';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Finance from './screens/Finance';
import Notification from './screens/Notification';
import Scan from './screens/Scan';
import TopUp from './screens/TopUp';
import Transfer from './screens/Transfer';
import TrxSame from './screens/TrxSame';
import { useSelector } from 'react-redux';
import EditProfile from './screens/EditProfile';
import EditPassword from './screens/EditPassword';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonTab {...props} />}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="cash"
        component={Finance}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="scan"
        component={Scan}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="notifications"
        component={Notification}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="person"
        component={Profile}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
};
const Router = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        {token === null ? (
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
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={HomeTabs}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
            <Stack.Screen
              name="TopUp"
              component={TopUp}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
            <Stack.Screen
              name="Transfer"
              component={Transfer}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
            <Stack.Screen
              name="TrxSame"
              component={TrxSame}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
            <Stack.Screen
              name="EditPassword"
              component={EditPassword}
              options={{ headerShown: false, tabBarBadge: 3 }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
