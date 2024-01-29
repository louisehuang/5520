import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS, LOCATION} from '../components/styles';

const CustomText = ({ children }) => {
  return (
    <Text style={styles.labelText}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: COLORS.text,
    fontSize: 25,
    textAlign: LOCATION.center,
  },
});

export default CustomText;