import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function BookDetails() {
  return (
    <View style={styles.container}>
      <Text>欢迎来到好书详情</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
