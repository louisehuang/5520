import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import Card from '../components/Card';
import CustomText from "../components/CustomText";

export default function FinalScreen({ isWinner, onRestartGame }) {
  return (
    <View style={styles.container}>
      
      <Card>
        <CustomText>Here's your picture</CustomText>
        {isWinner ? (
        <Image
          source={{ 
            uri: "https://picsum.photos/id/1024/100/100", }}
          style={styles.image}
        />
      ) : (
      
        <Image source={require("../assets/Sad-face.png")} style={styles.image} />
      )}

      <Button title="Start Again" onPress={onRestartGame} /></Card>
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 50,
    marginHorizontal: 50,
  },
  labelText: {
    color: 'purple',
    fontSize: 30,
  },
});