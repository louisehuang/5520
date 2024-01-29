import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View,SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/startscreen";
import GameScreen from "./screens/gamescreen";
import FinalScreen from "./screens/finalscreen";

export default function App() {
  const [screen, setScreen] = useState("start"); // start, game, final
  const [correctNumber, setCorrectNumber] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [userData, setUserData] = useState({ userName: "", userNumber: "" });
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    setCorrectNumber(generateRandomNumber());
  }, []);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1020;
  }

  function startGame(name,number) {
    // Reset userData for a new game
    setUserData({ userName: name, userNumber: number });

    // If correctNumber is not set, generate a new random number
    if (!correctNumber) {
      setCorrectNumber(generateRandomNumber());
    }
    else{
      setCorrectNumber(correctNumber)
    }

    setScreen("game");
  }


  function handleTryAgain () {
    // Generate a new random number for the user to guess
    startGame(userData.userName, userData.userNumber);
    setAttemptsLeft(attemptsLeft - 1);
    setScreen("start");
    
  };


  function receiveInput(name,number) {
    setUserData({ userName: name, userNumber: number });
    setScreen("game");
  }

  function restartGame() {
    setScreen("start");
    setUserData({ userName: "", userNumber: "" });
    setAttemptsLeft(3);
    setCorrectNumber(generateRandomNumber());
  }

  function handleIamDone() {
    setScreen("final");
    setIsWinner(false)
  }

  function handleThankYou() {
    setIsWinner(true);
    setScreen("final");
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />
        {screen === "final" && (
          <Header name="Game Is Over!" version={2} />
        )}
        {screen === "start" && (
          <Header name="Guess My Number" version={2} />
        )}
        {screen === "start" && (
          <StartScreen
            inputHandler={receiveInput}
            modalVisible={screen === "game"}
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
            onThankYou={handleThankYou}
          />
        )}

        {screen === "final" && <FinalScreen
        isWinner={isWinner} 
        
        onRestartGame={restartGame} />}
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
    justifyContent: "center",
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