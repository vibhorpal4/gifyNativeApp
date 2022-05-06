import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainStack from './src/Navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
