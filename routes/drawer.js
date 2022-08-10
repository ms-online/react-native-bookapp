import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/about';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='主页' component={Home} />
      <Drawer.Screen name='关于我们' component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
