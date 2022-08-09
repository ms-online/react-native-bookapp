import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>欢迎来到关于我们</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
