import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from './screens/bookDetails';
import About from './screens/about';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'NotoSansTC-Regular': require('./assets/fonts/NotoSansTC-Regular.otf'),
    'NotoSansTC-Bold': require('./assets/fonts/NotoSansTC-Bold.otf'),
    // 'Inter-SemiBoldItalic':
    //   'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='主页'>
        <Stack.Screen name='主页' component={Home} />
        <Stack.Screen name='好书详情' component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
