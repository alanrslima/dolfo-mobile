import {
  Carousel,
  Headline,
  ListItem,
  Screen,
  SectionHeader,
  Spacer,
  Surface,
} from "@/components";
import { Link } from "expo-router";
import { Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";

const Image = styled.Image`
  height: 350px;
`;

export default function PetScreen() {
  return (
    <Screen useTopSafeArea={false}>
      <ScrollView>
        <Carousel
          data={[1, 2, 3, 4]}
          itemWidth={Dimensions.get("screen").width}
          renderItem={() => (
            <Image
              source={{
                uri: "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
            />
          )}
        />
        <Spacer h={5} />
        <Link href="/add-pet">Link</Link>
        <Headline
          title="Esmeralda"
          subTitle="Golden Retriever • Female • 2.5 years"
        />
        <Spacer h={5} />
        <Surface padding={4} marginVertical={7}>
          <ListItem
            disabled
            bgIconColor="positive600"
            iconColor="white"
            icon="ab-testing"
            paragraph="Lorem ipsum dolor sit amet consectetur. Ut sit magna commodo urna in."
          />
        </Surface>
        <Spacer h={5} />
        <SectionHeader title="Vacines" />
        <Spacer h={3} />
        <Surface padding={4} gap={4} marginVertical={7}>
          <ListItem
            title="v8 ou v10"
            onPress={() => {}}
            paragraph="Lorem ipsum dolor sit amet consectetur. Ut sit magna commodo urna in."
          />
          <ListItem
            onPress={() => {}}
            title="Gripe Canina (Tosse dos Canis)"
            paragraph="Lorem ipsum dolor sit amet consectetur. Ut sit magna commodo urna in."
          />
        </Surface>
        <Spacer h={5} />
        <SectionHeader title="Alergias" />
        <Spacer h={3} />
        <Surface padding={4} gap={4} marginVertical={7}>
          <ListItem
            title="Alergia a Pulgas e Carrapatos"
            icon="bug"
            onPress={() => {}}
            paragraph="Lorem ipsum dolor sit amet consectetur. Ut sit magna commodo urna in."
          />
          <ListItem
            onPress={() => {}}
            icon="cloud-search"
            title="Alergia a Produtos de Limpeza"
            paragraph="Lorem ipsum dolor sit amet consectetur. Ut sit magna commodo urna in."
          />
        </Surface>
        <Spacer h={5} />
        <SectionHeader title="Medicamentos" />
        <Spacer h={3} />
        <Surface padding={4} gap={4} marginVertical={7}>
          <ListItem
            title="Alergia a Pulgas e Carrapatos"
            icon="bug"
            onPress={() => {}}
            paragraph="Lorem ipsum dolor sit amet consectetur. Ut sit magna commodo urna in."
          />
          <ListItem
            onPress={() => {}}
            icon="card-account-details-star"
            title="Alergia a Produtos de Limpeza"
            paragraph="Lorem ipsum dolor sit amet consectetur. Ut sit magna commodo urna in."
          />
        </Surface>
      </ScrollView>
    </Screen>
  );
}
