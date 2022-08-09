import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>欢迎来到主页</Text>
      <Text style={globalStyles.contentText}>
        expo-font allows loading fonts from the web and using them in React
        Native components. See more detailed usage information in the Fonts
        guide.
      </Text>
    </View>
  );
}
