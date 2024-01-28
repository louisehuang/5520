import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, View,SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/startscreen";
import GameScreen from "./screens/gamescreen";
import FinalScreen from "./screens/finalscreen";

export default function App() {
  const appName = "Guess My Number";
  const [screen, setScreen] = useState("start"); // start, game, final
  const [correctNumber, setCorrectNumber] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [userData, setUserData] = useState({ userName: "", userNumber: "" });

  useEffect(() => {
    // Generate initial random number when the component mounts
    setCorrectNumber(generateRandomNumber());
  }, []);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1020;
  }

  function startGame(name) {
    // Reset userData for a new game
    setUserData({ userName: name, userNumber: "" });

    // If correctNumber is not set, generate a new random number
    if (!correctNumber) {
      setCorrectNumber(generateRandomNumber());
    }
    else{
      setCorrectNumber(correctNumber)
    }

    setAttemptsLeft(2);
    setScreen("game");
  }


  function handleTryAgain () {
    // Generate a new random number for the user to guess
    startGame(userData.userName);
    setAttemptsLeft(attemptsLeft - 1);
    setScreen("start");
    
  };


  function receiveInput(name,number) {
    setUserData({ userName: name, userNumber: number });
    setScreen("game");
  }

  function dismissModal() {
    setScreen("start");
  }

  function handleIamDone() {
    setUserData({ userName: "", userNumber: "" });
    setCorrectNumber("");
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
            startGame={startGame} 
            setUserData={setUserData} 
            originalUserName={userData.userName}
            correctNumber={correctNumber} 

          />
        )}


        {screen === "game" && (
          <GameScreen
            playerName={userData.userName} // Pass the player name dynamically
            correctNumber={correctNumber}
            userGuessedNumber ={userData.userNumber}
            attemptsLeft={attemptsLeft}
            onTryAgain={handleTryAgain}
            onIamDone={handleIamDone}
          />
        )}

        {screen === "final" && <FinalScreen onRestartGame={dismissModal} />}
      </View>

      <View style={styles.bottomView}>
       
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