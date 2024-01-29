import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import Card from '../components/Card';

export default function FinalScreen({ isWinner, onRestartGame }) {
  const headerTwo = "Game Is Over!";
  return (
    <View style={styles.container}>
      
      <Card>
        <Text>Here's your picture</Text>
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
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});