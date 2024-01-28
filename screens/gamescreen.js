import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

export default function GameScreen({
  playerName,
  correctNumber,
  userGuessedNumber,
  attemptsLeft,
  onTryAgain,
  onIamDone, }) {
  
    let isWinner = false;

  if (userGuessedNumber < correctNumber) {
    message = "That's not my number! Guess higher!";
    attemptsLeft--;
  } else if (userGuessedNumber > correctNumber) {
    message = "That's not my number! Guess lower!";
    attemptsLeft--;
  } else {
    isWinner = true;
  }


  function handlePlayAgain () {
    onPlayAgain(attemptsLeft);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      
      <View style={styles.container}>
        <View style={styles.card}>

        <Text> correct {correctNumber} </Text>
          {isWinner ? (
            <>
              <Text>Congratulations {playerName}! You won!</Text>
            </>
          ) : (
            <>
              <Text style={styles.labelText}>Hello, {playerName}</Text>
              <Text style={styles.labelText}>You have chosen {userGuessedNumber}</Text>
              <Text> {message} </Text>
              

              <Text>{`You have ${attemptsLeft} attempts left!`}</Text>
            
            </>
          )}


          <View style={styles.buttonsContainer}>
            <View style={styles.buttonView}>
              <Button title="Let Me Guess Again" onPress={onTryAgain} />
            </View>
            <View style={styles.buttonView}>
              <Button title="I am done" onPress={onIamDone} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    width: "30%",
    margin: 5,
  },
  buttonsContainer: { flexDirection: "row" },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  //这是中间的框，不知道干嘛的
  container: {
    flex: 1,
    backgroundColor: "lavenderblush",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 100, height: 100 },
  card: {
    height: "50%",
    width: "50%",
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'c0c0c0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Change this color as needed
    marginBottom: 10,
    paddingVertical: 5,
  },
  invalidInput: {
    borderColor: 'red',
  },
  labelText: {
    color: 'purple',
    fontSize: 25,
  },

});