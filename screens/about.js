import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>欢迎来到关于我们</Text>
    </View>
  );
}
