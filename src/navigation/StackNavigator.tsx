import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import StarshipDetailsScreen from '../properties/StarshipDetails';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Go back"
        component={TabsNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StarshipDetails"
        component={StarshipDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
