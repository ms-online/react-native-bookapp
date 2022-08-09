import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
export default function BookDetails() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>欢迎来到好书详情</Text>
    </View>
  );
}
