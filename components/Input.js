import { Button, Model, StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input({ inputHandler }) {
  const [text, setText] = useState("");

  // callback handler
  function changeTextHandler(changedText) {
    setText(changedText);
  }

  function confirmHandler() {
    inputHandler(text);
  }
  function cancelHandler(){
    //hide the model
  }

  return (
    <Model visible>
      <View>
        <TextInput
          placeholder="Type something"
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        />
        <View styles = {StyleSheet.create({})}>
          <Button title="Confirm" onPress={confirmHandler} />
          <Button title="Cancel" onPress={confirmHandler} />
        <View/>
      </View>
    <model/>  
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
});
