import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from '../components/styles';

export default function Header({ name }) {
  return (
    <View>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    color: COLORS.header,
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 15,

  },
  
});
