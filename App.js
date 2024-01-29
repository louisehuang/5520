import React, { useState, useEffect } from "react";
import { StatusBar, View,SafeAreaView } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/startscreen";
import GameScreen from "./screens/gamescreen";
import FinalScreen from "./screens/finalscreen";
import { COMMON_STYLES } from './components/styles';
import { KeyboardAvoidingView, Platform } from 'react-native';

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
    <SafeAreaView style={COMMON_STYLES.container}>
      <View style={COMMON_STYLES.topView}>
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

            //the name and number entered previously will be displayed in textInput
            originalUserName={userData.userName}
            originalUserNumber={userData.userNumber}
            correctNumber={correctNumber} 

          />
        )}


        {screen === "game" && (
          <GameScreen
            //// Pass the player name and number
            playerName={userData.userName}   
            userGuessedNumber ={userData.userNumber}
            correctNumber={correctNumber}
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

      <View style={COMMON_STYLES.bottomView}>
       
      </View>   
    </SafeAreaView>
  );
}

