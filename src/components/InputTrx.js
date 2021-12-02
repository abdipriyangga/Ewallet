import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
const InputTrx = ({
  state,
  label,
  secureTextEntry,
  placeholder,
  onChangeText,
  value,
  keyboardType,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        keyboardAppearance="light"
        style={{
          width: 350,
          height: 40,
          borderColor: isFocused ? '#13c6dc' : '#C0C0C0',
          borderBottomWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    </View>
  );
};

export default InputTrx;
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: '500',
  },
});
