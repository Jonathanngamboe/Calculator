import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import RoundButton from './components/common/roundButton';

export default function App() {

  const [result, setResult] = useState(0);
  const [input, setInput] = useState([]);

  const calculate = ({
    
  });

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={{fontSize: 80, color: 'white'}}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='C' color='#D4D4D2' textSize='30' textColor='black' onPress={() => console.log('Button pressed')} />
          <RoundButton title='+/-' color='#D4D4D2' textSize='25' textColor='black' onPress={() => console.log('Button pressed')} />
          <RoundButton title='%' color='#D4D4D2' textSize='30' textColor='black' onPress={() => console.log('Button pressed')} />
          <RoundButton title='÷' color='#ff9f0a' textColor='white' onPress={() => console.log('Button pressed')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='7' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='8' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='9' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='×' color='#ff9f0a' onPress={() => console.log('Button pressed')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='4' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='5' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='6' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='-' color='#ff9f0a' onPress={() => console.log('Button pressed')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RoundButton title='1' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='2' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='3' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='+' color='#ff9f0a' onPress={() => console.log('Button pressed')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Pressable style={styles.zeroButton} onPress={() => console.log('Button pressed')}>
              <Text style={[{ color: 'white', fontSize: 40 }]}>0</Text>
          </Pressable>
          <RoundButton title='.' color='#333333' onPress={() => console.log('Button pressed')} />
          <RoundButton title='=' color='#ff9f0a' onPress={() => console.log('Button pressed')} />
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
    width: '77%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
  }
});