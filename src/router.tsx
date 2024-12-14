import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DonationAppRouter} from 'dolfo-react-native-donation-app';

export function Router() {
  return (
    <NavigationContainer>
      <DonationAppRouter />
    </NavigationContainer>
  );
}
