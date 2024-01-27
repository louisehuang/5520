import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View,SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/startscreen";
import GameScreen from "./screens/gamescreen";
import FinalScreen from "./screens/finalscreen";

export default function App() {
  const appName = "Guess My Number";
  const [text, setText] = useState("");
  const [screen, setScreen] = useState("start"); // start, game, final
  const [guessNumber, setGuessNumber] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [userData, setUserData] = useState({ userName: "", userNumber: "" });

  function startGame(name) {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1020;
    setUserData({ userName: name, userNumber: newRandomNumber });
    // Generate a new random number for the user to guess
    
    setPlayerName(name);
    setGuessNumber(newRandomNumber);
    setAttemptsLeft(2);
    setScreen("game");
  }

  function handlePlayAgain () {
    // Generate a new random number for the user to guess
    const newRandomNumber = Math.floor(Math.random() * 10) + 1020;
    setGuessNumber(newRandomNumber);
    setAttemptsLeft(2);
    setScreen("start");
  };


  function receiveInput(data) {
    console.log("receive input ", data);
    setText(data);
    setScreen("game");
  }

  function dismissModal() {
    setScreen("start");
  }

  function handleThankYou() {
    setPlayerName("");
    setGuessNumber("");
    setAttemptsLeft(2);
    setScreen("final");
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />
        <Header name={appName} version={2} />

        {screen === "start" && (
          <StartScreen
            inputHandler={receiveInput}
            modalVisible={screen === "game"}
            dismissModal={dismissModal}
            setUserData={setUserData} 
          />
        )}

        {screen === "game" && (
          <GameScreen
            playerName={userData.userName} // Pass the player name dynamically
            correctNumber={guessNumber}
            userGuessedNumber ={userData.number}
            attemptsLeft={attemptsLeft}
            onPlayAgain={handlePlayAgain}
            onThankYou={handleThankYou}
          />
        )}

        {screen === "final" && <FinalScreen onRestartGame={dismissModal} />}
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavenderblush",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "lavenderblush",
    justifyContent: "space-around",
  },
  bottomView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "purple",
  },
});