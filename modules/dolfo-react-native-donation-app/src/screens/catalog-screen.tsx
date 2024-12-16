import React from 'react';
import {useListPetsCatalog} from '../hooks/use-list-pets-catalog';
import {ItemTile, List, ScreenContainer} from 'dolfo-react-native-ui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DonationAppStackParamList} from '../router';
import {RouteProp} from '@react-navigation/native';

type CatalogScreenNavigationProp = NativeStackScreenProps<
  DonationAppStackParamList,
  'CatalogScreen'
>;

type CatalogScreenRouteProp = RouteProp<
  DonationAppStackParamList,
  'CatalogScreen'
>;

type CatalogScreenProps = {
  navigation: CatalogScreenNavigationProp;
  route: CatalogScreenRouteProp;
};

export function CatalogScreen({navigation}: CatalogScreenProps) {
  const {catalog} = useListPetsCatalog();

  function onPressPet() {
    navigation.navigate('PetScreen');
  }

  return (
    <ScreenContainer type="view">
      <List
        contentContainerStyle={{gap: 16, paddingHorizontal: 24}}
        data={catalog}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <ItemTile
            onPress={onPressPet}
            paragraph={item.about}
            title={item.name}
          />
        )}
      />
    </ScreenContainer>
  );
}
