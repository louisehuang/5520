import React from "react";
import { Button, Modal, StyleSheet, View } from "react-native";
import Card from '../components/Card';
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import { COMMON_STYLES, COLORS } from '../components/styles';

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
  } else {
    message = ""
    attemptsLeft--;
  }



  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      
      <View style={COMMON_STYLES.container}>
        <View>
        <Card>
          {isWinner ? (
            <>
              <CustomText style={{textAlign: 'center' }}>Congratulations {playerName}! You won!</CustomText>
              <Button title="Thank You" onPress={onThankYou} />
            </>
          ) : (
            <>
              <CustomText style={{ fontWeight: 'bold' }} >Hello, {playerName}</CustomText>
              <CustomText>You have chosen {userGuessedNumber}</CustomText>
              <CustomText>That's not my number!</CustomText>
              <CustomText>{message} </CustomText>

              {attemptsLeft > 0 ? (
              <CustomText>{`You have ${attemptsLeft} attempts left!`} </CustomText>
            ) : (
              <CustomText>{`You have no attempts left!`}</CustomText>
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
    borderBottomColor: COLORS.text,
    width: "50%",
  },

});