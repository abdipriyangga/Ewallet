/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#d7d7d7', height: 50, padding: 10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, marginHorizontal: 20, shadowColor: '#222' }}>
            {/* <Text style={{ color: isFocused ? '#04B05D' : '#222' }}>
                {label}
              </Text> */}
            {label === 'scan' ? (
              <View style={{
                position: 'absolute',
                marginTop: -20,
                marginLeft: -5,
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#5d04b0',
                padding: 10,

              }}>
                <Icon
                  name={label}
                  size={30}
                  style={{ color: '#fff' }}

                />
              </View>
            ) : (
              <Icon
                name={label}
                size={25}
                style={{ color: isFocused ? '#5d04b0' : '#222' }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;
