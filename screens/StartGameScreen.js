import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import StartScreenButton from '../components/StartScreenButton';

const StartGameScreen = props => {
  const { screen, title, directions, buttonContainer } = styles;

  return (
    <View style={screen}>
      <Text style={title}>Kana Study</Text>
      <Text style={directions}>
        Select either hiragana or katakana to study. Enter your answer in romaji.
      </Text>
      <View>
        <Text>What would you like to study?</Text>
        <View style={buttonContainer}>
          <StartScreenButton textLine1="ひらがな" textLine2="hiragana" />
          <StartScreenButton textLine1="カタカナ" textLine2="katakana" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: 80,
    textTransform: 'uppercase'
  },
  directions: {

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  }
});

export default StartGameScreen;