import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './routes/stack';

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
      <StackScreen />
    </NavigationContainer>
  );
}
