import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function FinalScreen({ isWinner, onRestartGame }) {
  return (
    <View style={styles.container}>
      <Text>{isWinner ? "Congratulations!" : "Better luck next time!"}</Text>

      {isWinner ? (
        <Image
          source={{ uri: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/100/100` }}
          style={styles.image}
        />
      ) : (
        <Image source={require("../assets/Sad-face.png")} style={styles.image} />
      )}

      <Button title="Start Again" onPress={onRestartGame} />
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
    marginVertical: 10,
  },
});