import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authorization from './src/screens/authorization';
import Goods from './src/screens/goods/index';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authorization"
          component={Authorization}
          options={{
            title: 'Authorization',
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Goods"
          component={Goods}
          options={{
            title: 'Goods',
            headerShown: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
