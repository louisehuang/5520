import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COMMON_STYLES, COLORS, LOCATION } from '../components/styles';

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
    alignItems: LOCATION.center,
  },
  buttonText: {
    color: COLORS.button,
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: COLORS.grey,
  },
});

export default CustomButton;
