import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Detalhes" component={ Details } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}