import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ name }) {
  return (
    <View>
      <Text style={}>Welcome to {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    color:"darkmagenta",
    frontSize:20,
    borderColor:"darkmagenta",
    borderWidth: 2,
    padding:5,
    borderRadius: 5
  }
});
