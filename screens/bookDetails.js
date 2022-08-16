import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import imageArr from '../imageLoad';
export default function BookDetails({ route }) {
  const { title, author, rating, introduction, image_url } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Image source={imageArr['img' + image_url]} style={styles.image} />
      <Text style={globalStyles.contentText}>作者：{author}</Text>
      <Text style={globalStyles.contentText}>豆瓣评分：{rating}</Text>
      <Text style={globalStyles.contentText}>简介：{introduction}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
  },
});
