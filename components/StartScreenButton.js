import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from
  'react-native';

const StartScreenButton = props => (
  <TouchableOpacity>
    <View style={styles.button}>
      <Text style={styles.textLine1}>{props.textLine1}</Text>
      <Text style={styles.textLine2}>{props.textLine2}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {

  },
  textLine1: {
    fontSize: 24
  },
  textLine2: {
    fontSize: 18
  }
});

export default StartScreenButton;