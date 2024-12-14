import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {DonationAppStackParamList} from '../router';
import {RouteProp} from '@react-navigation/native';
import {
  ActionLine,
  Button,
  CarouselImages,
  Divider,
  Footer,
  ScreenContainer,
  SectionHeader,
  Spacer,
  Typography,
  Wrapper,
} from 'dolfo-react-native-ui';

type PetScreenNavigationProp = NativeStackNavigationProp<
  DonationAppStackParamList,
  'PetScreen'
>;

type PetScreenRouteProp = RouteProp<DonationAppStackParamList, 'PetScreen'>;

type PetScreenProps = {
  navigation: PetScreenNavigationProp;
  route: PetScreenRouteProp;
};

export function PetScreen({navigation}: PetScreenProps) {
  return (
    <ScreenContainer
      withoutTopSpace
      footer={
        <Footer>
          <Button title="Adotar pet" />
        </Footer>
      }>
      <CarouselImages
        height={300}
        images={[
          {
            uri: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            uri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            uri: 'https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        ]}
      />
      <Wrapper py={7} px={7}>
        <SectionHeader title="Bob" subtitle="Rua das Palmeeiras, 308" />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          at ipsa doloremque corporis dolor hic officia, voluptas quisquam
          placeat officiis repudiandae saepe quis cupiditate veniam adipisci
          modi. Dolorum, porro. Mollitia?
        </Typography>
        <Divider />
        <ActionLine title="10 de Dez, 2024" overline="Data de adoção" />
        <Spacer h={5} />
        <ActionLine
          title="Entrega em casa"
          overline="Modo de entrega"
          description="Rua dos Jardins, 104 - Bairro Palmeiras"
        />
        <Divider />
      </Wrapper>
    </ScreenContainer>
  );
}
