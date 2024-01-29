import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  button: {
    padding:8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'firebrick',
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
});

export default CustomButton;
