import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Checkbox from 'expo-checkbox';
import React, { useState } from "react";
import Card from '../components/Card';
import CustomButton from "../components/CustomButton";
import { COMMON_STYLES, COLORS, LOCATION } from '../components/styles';



export default function StartScreen({ inputHandler, originalUserName,originalUserNumber,setUserData}) {
  const [name, setName] = useState(originalUserName || '');
  const [number, setNumber] = useState(originalUserNumber ||'');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [confirmPressed, setConfirmPressed] = useState(true);
  
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
    setName(originalUserName || '');
    setNumber(originalUserNumber || '');
    setIsValidName(true);
    setIsValidNumber(true);
    setIsChecked(false);

  }
  
  function handleConfirm() {
    checkNameValidity();
    checkNumberValidity();
  
    if (isChecked && isValidName && isValidNumber) {
      
      inputHandler(name, number);
      setUserData({ userName: name, userNumber: number });
      setConfirmPressed(true);
    } 
  }


  return (
    
    <View style={COMMON_STYLES.container}>
      <Card>
      <Text style={COMMON_STYLES.labelText}>Name:</Text>
        <TextInput
          style={[styles.input, !isValidName && styles.invalidInput]}
          value={name || originalUserName}
          onChangeText={(text) => {
            setName(text);
            checkNameValidity(); // Check the validity on each text change
          }}
          onBlur={checkNameValidity}
        />
        {confirmPressed && !isValidName && <Text style={styles.errorText}>Invalid Name</Text>}

        <Text style={COMMON_STYLES.labelText}>Enter a Number:</Text>
        <TextInput
          style={[styles.input, !isValidNumber && styles.invalidInput]}
          value={number || originalUserNumber}
          keyboardType="number-pad"
          maxLength={4}
          onChangeText={(text) => {
            setNumber(text);
            checkNumberValidity(); // Check the validity on each text change
          }}
          
          onBlur={checkNumberValidity}
        />
        {confirmPressed && !isValidNumber && <Text style={[styles.errorText, { marginTop: 1 }]}>Please enter a valid number</Text>}

        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setIsChecked} />
          <Text style={COMMON_STYLES.labelText}>I am not a robot</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <CustomButton title="Reset" onPress={handleReset} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Confirm" onPress={handleConfirm} disabled={!isChecked} />
          </View>
        </View>
      </Card>
    </View>

  );
}

const styles = StyleSheet.create({
  buttonView: {
    width: "35%",
    margin: 5,
  },
  buttonsContainer: { flexDirection: "row" },
  input: {
    borderBottomWidth: 10,
    borderBottomColor: COLORS.text,
    width: "50%",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.text,
    fontSize: 25, 
    color:COLORS.header,
    marginBottom: 10,
    paddingVertical: 5,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: LOCATION.center,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
});