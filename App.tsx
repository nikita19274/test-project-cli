import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './src/navigation/TabsNavigator';
import StackNavigator from './src/navigation/StackNavigator';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
