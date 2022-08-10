import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookDetails from '../screens/bookDetails';
import DrawerScreen from './drawer';

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='DrawerScreen'>
      <Stack.Screen
        name='DrawerScreen'
        component={DrawerScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='好书详情'
        component={BookDetails}
        options={{
          title: '书单详情',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
