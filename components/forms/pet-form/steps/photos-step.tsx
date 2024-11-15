import { Button, Headline, Surface, TextInput } from "@/components/atoms";
import { FormFooter } from "../pet-form.styles";
import { Image, ScrollView } from "react-native";
import { ListItem } from "@/components/molecules";
import { useImagePicker } from "@/hooks/use-image-picker";
import { useState } from "react";
import { Asset } from "@/types/asset";

type PhotoStepProps = {
  onGoBack: () => void;
  onSubmit: () => void;
};

export function PhotosStep(props: PhotoStepProps) {
  const [photos, setPhotos] = useState<Asset[]>([]);

  const { launchImageLibraryAsync } = useImagePicker();

  const onPressAddPhoto = async () => {
    const response = await launchImageLibraryAsync();
    if (response) {
      setPhotos((prev) => [...prev, ...response]);
    }
  };

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
            onPress={onPressAddPhoto}
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
        {photos?.map((photo) => (
          <Image
            key={photo.uri}
            style={{ height: 200, width: "100%" }}
            source={{ uri: photo.uri }}
          />
        ))}
      </ScrollView>
      <FormFooter>
        <Button variant="link" onPress={props.onGoBack} title="Previous" />
        <Button title="Next" onPress={() => props.onSubmit()} />
      </FormFooter>
    </>
  );
}
