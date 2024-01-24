import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Text } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "My awesome app";
  //cons [isModelVisible,]
  function recieveInput(data) {
    console.log("recieve input")
  }
  // const [text, setText] = useState("");

  // if setIsModalVisible(tru) in Button onPress will not work
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} />
      
      <Button title="add a goal" onPress={()=> setIsModelVisible(true)}/>
      
    
      <Input inputHandler={recieveInput} modalVisible={isModelVisible}/>
      {/* <Text>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
