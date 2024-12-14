import React from 'react';
import {Router} from './router';
import {DolfoReactNativeUIProvider} from 'dolfo-react-native-ui';

export default function App() {
  return (
    <DolfoReactNativeUIProvider>
      <Router />
    </DolfoReactNativeUIProvider>
  );
}
