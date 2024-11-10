import { Button, Headline, Surface, TextInput } from "@/components/atoms";
import { FormFooter } from "../pet-form.styles";
import { ScrollView } from "react-native";
import { ListItem } from "@/components/molecules";

type PhotoStepProps = {
  onGoBack: () => void;
  onSubmit: () => void;
};

export function PhotosStep(props: PhotoStepProps) {
  return (
    <>
      <ScrollView contentContainerStyle={{ gap: 12 }}>
        <Headline
          title="Add some photos of your pet"
          subTitle="You can add more or make changes later."
        />
        <Surface padding={5} marginVertical={6}>
          <ListItem
            title="Add photos"
            paragraph="Get some photos from your library"
            icon="plus"
            onPress={() => {}}
          />
        </Surface>
        <Surface padding={5} marginVertical={6}>
          <ListItem
            title="Take new photos"
            paragraph="Take some photos from your camera"
            icon="camera"
            onPress={() => {}}
          />
        </Surface>
      </ScrollView>
      <FormFooter>
        <Button variant="link" onPress={props.onGoBack} title="Previous" />
        <Button title="Next" onPress={() => props.onSubmit()} />
      </FormFooter>
    </>
  );
}
