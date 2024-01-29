import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children }) => {
  return (
    <Text style={styles.labelText}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: 'purple',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default CustomText;