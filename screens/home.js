import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>欢迎来到主页</Text>
      <Text style={globalStyles.contentText}>
        expo-font allows loading fonts from the web and using them in React
        Native components. See more detailed usage information in the Fonts
        guide.
      </Text>
      <Button
        title='进入好书详情'
        onPress={() => navigation.navigate('好书详情')}
      />
    </View>
  );
}
