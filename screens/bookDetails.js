import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
export default function BookDetails({ route }) {
  const { title, author, rating, introduction } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.contentText}>{author}</Text>
      <Text style={globalStyles.contentText}>{rating}</Text>
      <Text style={globalStyles.contentText}>{introduction}</Text>
    </View>
  );
}
