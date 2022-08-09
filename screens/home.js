import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>欢迎来到主页</Text>
      <Text style={styles.contentText}>
        expo-font allows loading fonts from the web and using them in React
        Native components. See more detailed usage information in the Fonts
        guide.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: 'NotoSansTC-Bold',
  },
  contentText: {
    fontFamily: 'Inter-SemiBoldItalic',
  },
});
