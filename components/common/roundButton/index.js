import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const RoundButton = ({title, onPress, color = '#505050', textColor = 'white', size = 85, textSize = 40}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[
        styles.button, 
        { backgroundColor: color, width: size, height: size, borderRadius: size / 2 }
      ]}
    >
      <Text style={{ color: textColor, fontSize: textSize}}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default RoundButton;
