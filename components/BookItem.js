import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function BookItem({ item }) {
  return (
    <View style={styles.container}>
      {/* 书的封面 */}
      <Image source={require(item.image_url)} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>书名:{item.title}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>评分：{item.rating}</Text>
          <Text>作者：{item.author}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 350,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 500,
    elevation: 3,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  info: {
    flexDirection: 'row',
  },

  rating: {
    color: 'gold',
    marginRight: 10,
    fontWeight: 'bold',
  },
});
