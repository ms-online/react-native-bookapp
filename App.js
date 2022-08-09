import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'NotoSansTC-Regular': require('./assets/fonts/NotoSansTC-Regular.otf'),
    'NotoSansTC-Bold': require('./assets/fonts/NotoSansTC-Bold.otf'),
    'Inter-SemiBoldItalic':
      'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Home />;
}
