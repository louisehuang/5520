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
  const [correctNumber, setCorrectNumber] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(2);
  const [userData, setUserData] = useState({ userName: "", userNumber: "" });

  function startGame() {
    // Reset userData for a new game
    setUserData({ userName: "", userNumber: "" });

    // If correctNumber is not set, generate a new random number
    if (!correctNumber) {
      const newRandomNumber = Math.floor(Math.random() * 10) + 1020;
      setCorrectNumber(newRandomNumber);
    }
    else{
      setCorrectNumber(correctNumber)

    }
    setScreen("game");
  }


  function handleTryAgain () {
    // Generate a new random number for the user to guess
    //setUserData({ userName: userData.userName, userNumber: "" });
    //setCorrectNumber(correctNumber);
    //setScreen("start");

    
    setCorrectNumber(correctNumber);
    setAttemptsLeft(2);
    setScreen("start");
    
  };


  function receiveInput(name,number) {
    console.log("receive input ", name,number);
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
            setUserData={setUserData} 
            startGame={startGame}
            
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