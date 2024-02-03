import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { COLORS } from '../components/styles';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.darkgray,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.showdow,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  
  },
});

export default Card;