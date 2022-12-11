/**
 * Wolt - Open hours
 */

import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/navigation';

const App = () => {
  useEffect(() => {
    //hides the splash screen on app load.
    SplashScreen.hide();
  }, []);

  return <AppNavigator />;
};

export default App;
