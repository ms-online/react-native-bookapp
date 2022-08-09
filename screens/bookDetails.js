import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
export default function BookDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>欢迎来到好书详情</Text>
      <Button
        title='进入好书详情'
        onPress={() => navigation.navigate('好书详情')}
      />
      <Button
        title='进入好书详情'
        onPress={() => navigation.push('好书详情')}
      />
      <Button title='进入主页' onPress={() => navigation.popToTop('主页')} />
    </View>
  );
}

//注意：
//navigation Prop可用于所有屏幕组件（在路由配置中定义为Screen屏幕的组件）。
//navigation.navigate('RouteName')如果它不在堆栈中，则将新路由推送到本机堆栈导航器，否则它会跳转到该屏幕。
//navigation.push('RouteName')可以多次推送路由，即便已经存在。
//默认标题栏将自动显示一个后退按钮，但你可以通过调用navigation.goBack()以编程方式返回。
//navigation.popToTop()返回到堆栈中的第一个屏幕。
