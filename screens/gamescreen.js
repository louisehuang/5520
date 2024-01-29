import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import Card from '../components/Card';
import CustomButton from "../components/CustomButton";

export default function GameScreen({
  playerName,
  correctNumber,
  userGuessedNumber,
  attemptsLeft,
  onTryAgain,
  onIamDone, 
  onThankYou,}) {
  
  let isWinner = false;
  let message = ""

  if (attemptsLeft > 1 && userGuessedNumber < correctNumber) {
    message = "Guess higher!";
    attemptsLeft--;
  } else if (attemptsLeft > 1 && userGuessedNumber > correctNumber) {
    message = "Guess lower!";
    attemptsLeft--;
  } else if (attemptsLeft >= 1 && userGuessedNumber == correctNumber) {
    isWinner = true;
  } else{
    message = ""
    attemptsLeft--;
  }



  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      
      <View style={styles.container}>
        <View style={styles.card}>
        <Card><Text> correct {correctNumber} </Text>
          {isWinner ? (
            <>
              <Text>Congratulations {playerName}! You won!</Text>
              <Button title="Thank You" onPress={onThankYou} />
            </>
          ) : (
            <>
              <Text style={styles.labelText}>Hello, {playerName}</Text>
              <Text style={styles.labelText}>You have chosen {userGuessedNumber}</Text>
              <Text> That's not my number!{message} </Text>
            

              {attemptsLeft > 0 ? (
              <Text>{`You have ${attemptsLeft} attempts left!`}</Text>
            ) : (
              <Text>{`You have no attempts left!`}</Text>
            )}

            <View style={styles.buttonsContainer}>
            <View style={styles.buttonView}>
              <CustomButton title="I am done" onPress={onIamDone} />
            </View>
            <View style={styles.buttonView}>
              <Button title="Let Me Guess Again" onPress={onTryAgain} disabled={attemptsLeft === 0}/>
            </View>
            
          </View>
            
            </>
          )}

         
        </Card>  

        </View>  
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    width: "100%",
    margin: 5,
  },
  buttonsContainer: { flexDirection: "column" },
  input: {
    borderBottomWidth: 20,
    borderBottomColor: "purple",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "lavenderblush",
    alignItems: "center",
    justifyContent: "center",
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