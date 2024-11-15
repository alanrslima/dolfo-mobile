import {
  Avatar,
  Banner,
  Button,
  Card,
  Carousel,
  Headline,
  Screen,
  SectionHeader,
  Spacer,
} from "@/components";
import { Link, useNavigation } from "expo-router";
import { Dimensions, ScrollView } from "react-native";
import { router } from "expo-router";
import { usePets } from "@/hooks/use-pets";

export default function HomeScreen() {
  const { myPets } = usePets();

  return (
    <Screen safeAreaColor="background" useTopSafeArea>
      <ScrollView>
        <Headline
          title="Everything Your Pet’s Needs"
          rightComponent={() => <Avatar />}
        />
        <SectionHeader
          title="My Pet's"
          rightComponent={
            <Link href="/add-pet" asChild>
              <Button
                variant="outline"
                size="xs"
                title="Add new"
                leftIcon="plus"
              />
            </Link>
          }
        />
        <Spacer h={4} />
        <Carousel
          data={myPets || []}
          itemWidth={Dimensions.get("screen").width - 48}
          renderItem={({ item }) => (
            <Card
              title={item.name}
              imageSource={{ uri: item.photos.at(-1)?.link }}
              paragraph={item.breed}
            />
          )}
        />
        <Spacer h={5} />
        <SectionHeader title="Walking activity" />
        <Spacer h={4} />
        <Banner />
      </ScrollView>
    </Screen>
  );
}
