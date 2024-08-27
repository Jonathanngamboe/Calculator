import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import RoundButton from '../components/common/roundButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [inputs, setInputs] = useState([]);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setDisplayValue(inputs[inputs.length - 1] || '0');
  }, [inputs]);

  const handleInput = (value) => {
    if (typeof value === "number" || value === '.') {
      if (waitingForOperand) {
        setInputs(prev => [...prev, value.toString()]);
        setWaitingForOperand(false);
      } else {
        setInputs(prev => {
          const newInputs = [...prev];
          const lastIndex = newInputs.length - 1;
          if (lastIndex === -1 || typeof newInputs[lastIndex] !== "string" || !newInputs[lastIndex].match(/^[0-9.]+$/)) {
            return [...newInputs, value.toString()];
          } else {
            if (value === '.' && newInputs[lastIndex].includes('.')) {
              return newInputs;
            }
            newInputs[lastIndex] += value.toString();
            return newInputs;
          }
        });
      }
    } else {
      switch (value) {
        case 'AC':
          setInputs([]);
          setWaitingForOperand(false);
          break;
        case '=':
          calculate();
          setWaitingForOperand(true);
          break;
        case '+/-':
          setInputs(prev => {
            const newInputs = [...prev];
            const lastIndex = newInputs.length - 1;
            if (lastIndex >= 0 && typeof newInputs[lastIndex] === "string" && newInputs[lastIndex].match(/^-?[0-9.]+$/)) {
              newInputs[lastIndex] = (-parseFloat(newInputs[lastIndex])).toString();
            }
            return newInputs;
          });
          break;
        case '%':
          setInputs(prev => {
            const newInputs = [...prev];
            const lastIndex = newInputs.length - 1;
            if (lastIndex >= 0 && typeof newInputs[lastIndex] === "string" && newInputs[lastIndex].match(/^-?[0-9.]+$/)) {
              newInputs[lastIndex] = (parseFloat(newInputs[lastIndex]) / 100).toString();
            }
            return newInputs;
          });
          break;
        default:
          setInputs(prev => {
            const newInputs = [...prev];
            const lastIndex = newInputs.length - 1;
            if (lastIndex === -1 || typeof newInputs[lastIndex] !== "string" || newInputs[lastIndex].match(/^-?[0-9.]+$/)) {
              return [...newInputs, value];
            } else {
              newInputs[lastIndex] = value;
              return newInputs;
            }
          });
          setWaitingForOperand(true);
      }
    }
  };

  const calculate = () => {
    let total = 0;
    let operator = '+';
    inputs.forEach((input) => {
      if (typeof input === "string" && ['+', '-', '×', '÷'].includes(input)) {
        operator = input;
      } else {
        const inputValue = parseFloat(input);
        switch (operator) {
          case '+':
            total += inputValue;
            break;
          case '-':
            total -= inputValue;
            break;
          case '×':
            total *= inputValue;
            break;
          case '÷':
            total /= inputValue;
            break;
        }
      }
    });

    setInputs([total.toString()]);
    setHistory(prevHistory => [...prevHistory, { key: inputs.join(' ') + ' = ' + total }]); 
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Icon
            size={30}
            color="white"
            name="history"
            onPress={() => navigation.navigate('History', { history })}
            style={styles.icon}
            />
        <Text style={{fontSize: 80, color: 'white'}}>{displayValue}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='AC' color='#D4D4D2' textSize='30' textColor='black' onPress={() => handleInput('AC')} />
          <RoundButton title='+/-' color='#D4D4D2' textSize='25' textColor='black' onPress={() => handleInput('+/-')} />
          <RoundButton title='%' color='#D4D4D2' textSize='30' textColor='black' onPress={() => handleInput('%')} />
          <RoundButton title='÷' color='#ff9f0a' textColor='white' onPress={() => handleInput('÷')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='7' color='#333333' onPress={() => handleInput(7)} />
          <RoundButton title='8' color='#333333' onPress={() => handleInput(8)} />
          <RoundButton title='9' color='#333333' onPress={() => handleInput(9)} />
          <RoundButton title='×' color='#ff9f0a' onPress={() => handleInput('×')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='4' color='#333333' onPress={() => handleInput(4)} />
          <RoundButton title='5' color='#333333' onPress={() => handleInput(5)} />
          <RoundButton title='6' color='#333333' onPress={() => handleInput(6)} />
          <RoundButton title='-' color='#ff9f0a' onPress={() => handleInput('-')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='1' color='#333333' onPress={() => handleInput(1)} />
          <RoundButton title='2' color='#333333' onPress={() => handleInput(2)} />
          <RoundButton title='3' color='#333333' onPress={() => handleInput(3)} />
          <RoundButton title='+' color='#ff9f0a' onPress={() => handleInput('+')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Pressable style={styles.zeroButton} onPress={() => handleInput(0)}>
              <Text style={[{ color: 'white', fontSize: 40 }]}>0</Text>
          </Pressable>
          <RoundButton title='.' color='#333333' onPress={() => handleInput('.')} />
          <RoundButton title='=' color='#ff9f0a' onPress={() => handleInput('=')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 60,
    },
    resultContainer: {
      flex: 2,
      width: '80%',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      position: 'relative',
    },
    buttonsContainer: {
      flex: 3,
      flexDirection: 'column',
    },
    zeroButton: {
      backgroundColor: '#333333',
      width: 190,
      height: 85,
      borderRadius: 50,
      justifyContent: 'center',
      paddingLeft: 30,
    },
    icon : {
      position: 'absolute',  
      top: 100,               
      left: 0,              
    }  
  });