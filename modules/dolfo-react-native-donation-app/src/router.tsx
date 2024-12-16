import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CatalogScreen} from './screens/catalog-screen';
import {ServiceDependenciesProvider} from './contexts/service-dependencies';
import {PetCatalogMemoryService} from './services/memory/pet-catalog-memory-service';
import {PetScreen} from './screens/pet-screen';
import {CheckoutScreen} from './screens/checkout-screen';

export type DonationAppStackParamList = {
  CatalogScreen: undefined;
  PetScreen: undefined;
  CheckoutScreen: undefined;
};

const Stack = createNativeStackNavigator();

const petCatalogHttpService = new PetCatalogMemoryService();

export function DonationAppRouter() {
  return (
    <ServiceDependenciesProvider petCatalogService={petCatalogHttpService}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
        <Stack.Screen name="PetScreen" component={PetScreen} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      </Stack.Navigator>
    </ServiceDependenciesProvider>
  );
}
