import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {DonationAppStackParamList} from '../router';
import {RouteProp} from '@react-navigation/native';
import {
  ActionLine,
  Button,
  CarouselImages,
  Divider,
  Footer,
  NavigationHeader,
  NavigationLine,
  ScreenContainer,
  SectionHeader,
  SimpleLine,
  Spacer,
  Summary,
  Typography,
  Wrapper,
} from 'dolfo-react-native-ui';
import {
  DeliveryModeToggle,
  DeliveryModeToggleHandle,
} from '../components/delivery-mode-toggle/delivery-mode-toggle';

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
  const deliveryModeToggleRef = useRef<DeliveryModeToggleHandle>(null);

  function onPressAdopt() {
    navigation.navigate('CheckoutScreen');
    // bottomRef?.current?.show();
  }

  function onPressDeliveryMode() {
    deliveryModeToggleRef?.current?.show();
  }

  return (
    <ScreenContainer
      withoutTopSpace
      header={<NavigationHeader />}
      footer={
        <Footer>
          <Spacer />
          <Button onPress={onPressAdopt} size="xl" title="Adotar pet" />
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
        <Spacer h={5} />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          at ipsa doloremque corporis dolor hic officia, voluptas quisquam
          placeat officiis repudiandae saepe quis cupiditate veniam adipisci
          modi. Dolorum, porro. Mollitia?
        </Typography>
        <Spacer h={5} />
        <Summary icon="Calendar" title="Idade • 2 anos" />
        <Spacer h={5} />
        <Summary icon="Shield" title="Gênero • Macho" />
        <Spacer h={5} />
        <Summary icon="Palette" title="Cor • Rajado" />
        <Spacer h={5} />
        <Summary icon="Weight" title="Peso • 3kg" />
        <Divider />
        <SimpleLine
          avatar={{
            source: {
              uri: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          }}
          title="Sarah"
          description="Doador(a) de Bob"
        />
        <Divider />
        <ActionLine
          leadingIcon="CalendarHeart"
          title="10 de Dez, 2024"
          overline="Data de adoção"
          actionButton={{
            title: 'Alterar',
            size: 'xs',
            onPress: () => {},
            fit: true,
            variant: 'tertiary',
          }}
        />
        <Spacer h={5} />
        <ActionLine
          actionButton={{
            title: 'Alterar',
            size: 'xs',
            onPress: onPressDeliveryMode,
            fit: true,
            variant: 'tertiary',
          }}
          title="Entrega em casa"
          leadingIcon="House"
          overline="Modo de entrega"
          description="Rua dos Jardins, 104 - Bairro Palmeiras"
        />
        <Divider />
        <NavigationLine
          title="Denunciar este anuncio"
          leadingIcon="Flag"
          description="Algo estranho com o anúncio? Clique aqui para denunciar"
        />
      </Wrapper>
      <DeliveryModeToggle onChange={() => {}} ref={deliveryModeToggleRef} />
    </ScreenContainer>
  );
}
