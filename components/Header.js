import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ name }) {
  return (
    <View>
      <Text style={styles.header}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({


  header: {
    color: "mediumpurple",
    fontSize: 30,
  },
  
});
