import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Checkbox from 'expo-checkbox';
import React, { useState } from "react";


export default function StartScreen({ inputHandler,  setAttemptsLeft, dismissModal,setUserData,}) {
  const [text, setText] = useState("");
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  

  function checkNameValidity() {
    setIsValidName(name.length > 1 && !/^\d+$/.test(name));
  }

  function checkNumberValidity() {
    const parsedNumber = parseInt(number, 10);
    setIsValidNumber(
      !isNaN(parsedNumber) && parsedNumber >= 1020 && parsedNumber <= 1029
    );
  }

  function handleReset() {
    setName('');
    setNumber('');
    setIsValidName(true);
    setIsValidNumber(true);
    setIsChecked(false);
  }
  function handleConfirm() {
    if (isValidName && isValidNumber) {
      // Perform actions when both name and number are valid
      // For example, navigate to the next screen or start the game
      setUserData({ userName: name, userNumber: number });
      inputHandler(name, number);
   
    }
  }


  function cancelHandler() {
    // hide the modal
    dismissModal();
  }
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.labelText}>Name:</Text>
        <TextInput
          style={[styles.input, !isValidName && styles.invalidInput]}
          value={name}
      
          onChangeText={(text) => setName(text)}
          onBlur={checkNameValidity}
        />
         {!isValidName && <Text style={styles.errorText}>Invalid Name</Text>}

        <Text style={styles.labelText}>Enter a Number:</Text>
        <TextInput
          style={[styles.input, !isValidNumber && styles.invalidInput]}
          value={number}
          keyboardType="number-pad"
          maxLength={4}
          onChangeText={(text) => setNumber(text)}
          onBlur={checkNumberValidity}
        />
        {!isValidNumber && (<Text style={[styles.errorText, { marginTop: 1 }]}>Please enter a valid number</Text>
        )}
        
        <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.labelText}>I am not a robot</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button title="Reset" onPress={handleReset} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Confirm" onPress={handleConfirm} 
            disabled={!isChecked || !isValidName || !isValidNumber}
              />
          </View>
        </View>
      </View>
    </View> 

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
    height: "100%",
    width: "100%",
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 10,
  },
});