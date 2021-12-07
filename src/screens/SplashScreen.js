/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { IconCoffee } from '../assets';
import { useSelector } from 'react-redux';
const SplashScreen = props => {
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    setTimeout(() => {
      if (token !== null) {
        props.navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      } else {
        props.navigation.replace('GetStarted');
      }
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5d04b0" animated={true} />
      <Text style={styles.textHead}>ODO</Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginRight: 0,
    backgroundColor: '#5d04b0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHead: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 0,
  },
});
