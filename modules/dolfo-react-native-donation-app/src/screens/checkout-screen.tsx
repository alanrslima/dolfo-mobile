import {
  ActionLine,
  Button,
  Divider,
  ItemTile,
  NavigationHeader,
  ScreenContainer,
  SectionHeader,
  SimpleLine,
  Spacer,
  Summary,
  Typography,
  Wrapper,
} from 'dolfo-react-native-ui';
import React from 'react';

export function CheckoutScreen() {
  return (
    <ScreenContainer withoutTopSpace header={<NavigationHeader />}>
      <Wrapper py={7} px={7}>
        <ItemTile title="Bob" />
        <Divider />
        <SectionHeader
          title="Adoção"
          subtitle="Confirme a data e o modo de entrega para adotar seu mais novo companheiro"
        />
        <Spacer h={5} />
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
            onPress: () => {},
            fit: true,
            variant: 'tertiary',
          }}
          title="Entrega em casa"
          leadingIcon="House"
          overline="Modo de entrega"
          description="Rua dos Jardins, 104 - Bairro Palmeiras"
        />
        <Divider />
        <Summary
          icon="HandHeart"
          title="Adoção gratuita de pet"
          paragraph="Tudo que pedimos como pagamento é que cuide do seu mais novo pet com amor e carinho."
        />
        <Divider />
        <SectionHeader
          title="Doador"
          subtitle="Mande uma mensagem para o doador do pet caso queira tirar alguma dúvida"
        />
        <Spacer h={5} />
        <SimpleLine
          avatar={{
            source: {
              uri: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          }}
          title="Sarah"
          description="Doador(a) de Bob"
        />
        <Spacer h={5} />
        <Button title="Enviar mensagem" variant="secondary" size="sm" />
        <Divider />
        <Typography>
          Ao clicar em confirmar eu aceito os termos de uso e privacidade.
        </Typography>
        <Spacer h={3} />
        <Button title="Confirmar adoção" full />
      </Wrapper>
    </ScreenContainer>
  );
}
